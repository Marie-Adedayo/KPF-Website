import axios from "axios";
import { appendToSheet } from "./googleSheet.js";

export async function verifyPayPal(req, res) {
  const { orderId, amount, currency, email, contact } = req.body;

  try {
    const auth = await axios({
      url: "https://api-m.paypal.com/v1/oauth2/token",
      method: "post",
      data: "grant_type=client_credentials",
      auth: {
        username: process.env.PAYPAL_CLIENT_ID,
        password: process.env.PAYPAL_CLIENT_SECRET
      }
    });

    const token = auth.data.access_token;

    const orderData = await axios.get(
      `https://api-m.paypal.com/v2/checkout/orders/${orderId}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    const status = orderData.data.status;

    if (status !== "COMPLETED") {
      return res.status(400).json({ verified: false });
    }

    await appendToSheet({
      timestamp: new Date().toISOString(),
      reference: orderId,
      amount,
      currency,
      email,
      contact,
      status: "success",
      raw: JSON.stringify(orderData.data)
    });

    res.json({ verified: true });

  } catch (error) {
    res.status(500).json({ verified: false });
  }
}

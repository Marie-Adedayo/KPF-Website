import axios from "axios";
import { appendToSheet } from "./googleSheet.js";

export async function verifyPaystack(req, res) {
  const { reference, email, amount, currency, contact } = req.body;

  try {
    const response = await axios.get(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`
        }
      }
    );

    const data = response.data.data;

    if (data.status !== "success") {
      return res.status(400).json({ verified: false });
    }

    await appendToSheet({
      timestamp: new Date().toISOString(),
      reference,
      amount,
      currency,
      email,
      contact,
      status: "success",
      raw: JSON.stringify(data)
    });

    res.json({ verified: true });

  } catch (error) {
    res.status(500).json({ verified: false });
  }
}

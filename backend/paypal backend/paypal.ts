import axios from "axios";

export const verifyPayPalOrder = async (orderId: string) => {
  try {
    // Get access token
    const auth = Buffer.from(
      `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_SECRET}`
    ).toString("base64");

    const tokenRes = await axios({
      url: "https://api-m.paypal.com/v1/oauth2/token",
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: "grant_type=client_credentials",
    });

    const token = tokenRes.data.access_token;

    // Verify order
    const orderRes = await axios.get(
      `https://api-m.paypal.com/v2/checkout/orders/${orderId}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    return orderRes.data.status === "COMPLETED";
  } catch (err) {
    console.error("PayPal verification error:", err);
    return false;
  }
};

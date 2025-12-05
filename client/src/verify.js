import axios from "axios";

export const verifyPayment = async (req, res) => {
  const { reference } = req.query;

  try {
    const response = await axios.get(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },
      }
    );

    const data = response.data.data;

    if (data.status === "success") {
      // store in database or Google Sheets
      return res.json({ verified: true, data });
    } else {
      return res.json({ verified: false });
    }
  } catch (e) {
    return res.status(500).json({ error: "Verification failed" });
  }
};

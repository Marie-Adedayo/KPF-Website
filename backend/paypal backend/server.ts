import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { verifyPayPalOrder } from "./paypal";
import { sendReceiptEmail } from "./email";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Verify donation after frontend approve
app.post("/verify-paypal", async (req, res) => {
  const { orderId, amount, currency, email } = req.body;

  try {
    const verified = await verifyPayPalOrder(orderId);

    if (!verified) {
      return res.status(400).json({ error: "Verification failed" });
    }

    // send email receipt
    await sendReceiptEmail(email, amount, currency, orderId);

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Verification error" });
  }
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

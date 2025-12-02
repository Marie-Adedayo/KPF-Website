import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import axios from "axios";
import crypto from "crypto";
import { appendToSheet, initGoogleAuth } from "./googleSheets.js";

dotenv.config();
initGoogleAuth(); // lazy init

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Simple health
app.get("/", (req, res) => res.send("Paystack verification server running"));

/**
 * POST /api/verify
 * Body: { reference, email?, amount?, currency?, contact? }
 * Server calls Paystack verify endpoint using secret key and stores to sheet if success
 */
app.post("/api/verify", async (req, res) => {
  const { reference, email, amount, currency, contact } = req.body;
  if (!reference) return res.status(400).json({ error: "Missing reference" });

  try {
    const response = await axios.get(
      `https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`,
      {
        headers: { Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}` },
      }
    );

    const data = response.data;
    if (!data.status) {
      return res.status(500).json({ error: "Paystack returned non-success" });
    }

    const tx = data.data; // transaction object from Paystack
    const status = tx.status; // 'success' or otherwise

    // Append to Google Sheet (idempotent approach: check if reference exists in your sheet if needed)
    await appendToSheet({
      timestamp: new Date().toISOString(),
      reference: tx.reference,
      amount: tx.amount / 100,
      currency: tx.currency,
      status,
      email: tx.customer?.email || email || "",
      contact: contact || (tx.metadata?.custom_fields?.[0]?.value || ""),
      raw: JSON.stringify(tx),
    });

    return res.json({ verified: status === "success", data: tx });
  } catch (err) {
    console.error("Verify error:", err?.response?.data || err.message || err);
    return res.status(500).json({ error: "Verification failed", detail: err?.message });
  }
});

/**
 * POST /api/webhook
 * Paystack webhook endpoint for async notifications.
 * Verifies x-paystack-signature HMAC SHA512 using SECRET KEY.
 */
app.post("/api/webhook", async (req, res) => {
  const signature = req.headers["x-paystack-signature"] || "";
  const body = JSON.stringify(req.body || {});

  // Validate signature
  const secret = process.env.PAYSTACK_SECRET_KEY || "";
  const hash = crypto.createHmac("sha512", secret).update(body).digest("hex");

  if (hash !== signature) {
    console.warn("Invalid webhook signature");
    return res.status(400).send("Invalid signature");
  }

  const event = req.body;
  // event.event = 'charge.success' or 'transfer.success' etc.
  try {
    if (event?.event === "charge.success" || event?.event === "payment.success") {
      const tx = event?.data;
      await appendToSheet({
        timestamp: new Date().toISOString(),
        reference: tx.reference,
        amount: tx.amount / 100,
        currency: tx.currency,
        status: tx.status || "success",
        email: tx.customer?.email || "",
        contact: (tx.metadata?.custom_fields?.[0]?.value) || "",
        raw: JSON.stringify(tx),
      });
    }

    // Respond quickly
    res.json({ received: true });
  } catch (err) {
    console.error("Webhook processing error", err);
    res.status(500).send("server error");
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

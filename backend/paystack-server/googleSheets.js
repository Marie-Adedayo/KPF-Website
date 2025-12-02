import { google } from "googleapis";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

let authClient = null;

export function initGoogleAuth() {
  if (authClient) return;

  const keyFile = process.env.GOOGLE_SERVICE_ACCOUNT_FILE;
  if (!keyFile || !fs.existsSync(keyFile)) {
    console.warn("Google service account file not found. Set GOOGLE_SERVICE_ACCOUNT_FILE in .env");
    return;
  }

  const auth = new google.auth.GoogleAuth({
    keyFile,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  authClient = auth;
}

/**
 * Append a row to configured sheet
 * rowObj example: { timestamp, reference, amount, currency, status, email, contact, raw }
 */
export async function appendToSheet(rowObj) {
  if (!authClient) initGoogleAuth();
  if (!authClient) throw new Error("Google auth not initialized");

  const sheets = google.sheets({ version: "v4", auth: authClient });
  const sheetId = process.env.SHEET_ID;
  const sheetName = process.env.SHEET_NAME || "Sheet1";

  const row = [
    rowObj.timestamp || "",
    rowObj.email || "",
    rowObj.amount != null ? String(rowObj.amount) : "",
    rowObj.currency || "",
    rowObj.reference || "",
    rowObj.contact || "",
    rowObj.status || "",
    rowObj.raw || "",
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: `${sheetName}!A1`,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [row],
    },
  });
}

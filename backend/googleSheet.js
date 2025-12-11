import { google } from "googleapis";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

let authClient = null;

export function initGoogleAuth() {
  if (authClient) return;

  const keyFile = process.env.GOOGLE_SERVICE_ACCOUNT_FILE;
  if (!keyFile || !fs.existsSync(keyFile)) {
    console.warn("Service account file not found");
    return;
  }

  const auth = new google.auth.GoogleAuth({
    keyFile,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  authClient = auth;
}

export async function appendToSheet(row) {
  if (!authClient) initGoogleAuth();
  if (!authClient) throw new Error("Google auth not initialized");

  const sheets = google.sheets({ version: "v4", auth: authClient });

  const sheetId = process.env.SHEET_ID;
  const sheetName = process.env.SHEET_NAME || "Sheet1";

  const values = [[
    row.timestamp,
    row.email,
    row.amount,
    row.currency,
    row.reference,
    row.contact,
    row.status,
    row.raw
  ]];

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: `${sheetName}!A1`,
    valueInputOption: "USER_ENTERED",
    requestBody: { values }
  });
}

import nodemailer from "nodemailer";

export const sendReceiptEmail = async (
  to: string,
  amount: string,
  currency: string,
  orderId: string
) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: '"Kayode Philip Foundation" <no-reply@kpf.org>',
    to,
    subject: "Donation Receipt",
    html: `
      <h2>Thank you for your donation!</h2>
      <p><strong>Amount:</strong> ${currency} ${amount}</p>
      <p><strong>Transaction ID:</strong> ${orderId}</p>
      <p>We appreciate your support.</p>
    `,
  });
};

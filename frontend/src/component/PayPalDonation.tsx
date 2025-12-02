import React, { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

interface PayPalDonationProps {
  defaultAmount?: number;
}

const PayPalDonation: React.FC<PayPalDonationProps> = ({ defaultAmount = 10 }) => {
  const [amount, setAmount] = useState<string>(defaultAmount.toString());
  const [currency, setCurrency] = useState<string>("USD");

  return (
    <div className="space-y-4 w-full max-w-md p-4 bg-white rounded-xl shadow">
      <h2 className="text-xl font-bold text-gray-800">Donate via PayPal</h2>

      <select
        className="border rounded p-2 w-full"
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
      >
        <option value="USD">USD ($)</option>
        <option value="EUR">EUR (€)</option>
        <option value="GBP">GBP (£)</option>
      </select>

        <input
          type="number"
          value={amount}
          min={1}
          className="border rounded p-2 w-full"
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter donation amount"
        />

        <PayPalButtons
          style={{
            layout: "vertical",
            color: "gold",
            shape: "rect",
            label: "paypal",
          }}
          forceReRender={[amount, currency]}
          createOrder={(data, actions) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                amount: { value: amount, currency_code: currency },
              },
            ],
          });
        }}
        onApprove={async (_, actions) => {
          if (!actions.order) return;

          const details = await actions.order.capture();
          const payer = details.payer;

          alert(`Donation completed! Thank you ${payer?.name?.given_name}`);

          // Send to backend
          await fetch("https://YOUR_BACKEND_URL/verify-paypal", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              orderId: details.id,
              amount,
              currency,
              email: payer?.email_address,
            }),
          });
        }}
        onError={() => alert("Payment error. Try again.")}
      />
    </div>
  );
};

export default PayPalDonation;

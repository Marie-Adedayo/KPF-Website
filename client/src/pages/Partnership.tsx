import React, { useState } from "react";
import Header from "@/component/Header";
import Footer from "@/component/Footer";

export default function PartnershipPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    phone: "",
    partnershipType: "",
    offer: "",
    reason: "",
    website: "",
    honeypot: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);

    // Check honeypot first to prevent bot submissions
    if (form.honeypot) {
      console.warn("Bot detected. Submission blocked.");
      return;
    }

    const requiredFields = ["name", "email", "organization", "phone", "partnershipType", "offer", "reason"];
    const missingFields = requiredFields.filter((field) => !form[field as keyof typeof form]);

    if (missingFields.length > 0) {
      alert("Please fill in all required fields.");
      return;
    }

    if (!validateEmail(form.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzbEriQM0jq-mw3x010bGc5sd158XJ1TsHpz3TJg9kFmIgMVf0NN81LYaXVJ0zCK2WP/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      if (result.status === "success") {
        setSuccess(true);
        setForm({
          name: "",
          email: "",
          organization: "",
          phone: "",
          partnershipType: "",
          offer: "",
          reason: "",
          website: "",
          honeypot: "",
        });
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-gray-900">
      <Header />

      <section className="pt-24 bg-gradient-to-r from-purple-800 to-yellow-500 text-white text-center py-16 px-4">
        <h1 className="text-5xl font-bold mb-4">Partner with Kayode Philip Foundation</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Join us in our mission to empower, educate, and uplift communities. Whether you're a business,
          NGO, or individual, we welcome meaningful collaborations.
        </p>
      </section>

      <section className="bg-white p-8 rounded-xl shadow max-w-3xl mx-auto my-16">
        <h2 className="text-2xl font-bold text-center mb-6">Partnership Application Form</h2>

        {success && (
          <div className="text-green-600 text-center font-medium mb-4">
            ✅ Thank you! We’ve received your partnership request.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium text-gray-700 mb-1">Full Name *</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-400 px-3 py-2 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700 mb-1">Email Address *</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-400 px-3 py-2 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700 mb-1">Organization / Company *</label>
            <input
              name="organization"
              value={form.organization}
              onChange={handleChange}
              className="w-full border border-gray-400 px-3 py-2 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700 mb-1">Phone Number *</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border border-gray-400 px-3 py-2 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700 mb-1">Type of Partnership *</label>
            <select
              name="partnershipType"
              value={form.partnershipType}
              onChange={handleChange}
              className="w-full border border-gray-400 px-3 py-2 rounded-md"
              required
            >
              <option value="">Select one</option>
              <option value="Financial Support">Financial Support</option>
              <option value="Product or Service Donation">Product or Service Donation</option>
              <option value="Training / Mentorship">Training / Mentorship</option>
              <option value="Co-branded Events">Co-branded Events</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block font-medium text-gray-700 mb-1">Describe what you want to offer *</label>
            <textarea
              name="offer"
              value={form.offer}
              onChange={handleChange}
              rows={4}
              className="w-full border border-gray-400 px-3 py-2 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700 mb-1">Why do you want to partner with us? *</label>
            <textarea
              name="reason"
              value={form.reason}
              onChange={handleChange}
              rows={4}
              className="w-full border border-gray-400 px-3 py-2 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700 mb-1">Website / Social Media (optional)</label>
            <input
              name="website"
              value={form.website}
              onChange={handleChange}
              className="w-full border border-gray-400 px-3 py-2 rounded-md"
              placeholder="https://example.com or @yourhandle"
            />
          </div>
          <input
                type="text"
                name="honeypot"
                value={form.honeypot}
                onChange={handleChange}
                style={{ display: "none" }}
                tabIndex={-1}
            />

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-purple-700 text-white py-3 rounded-md transition ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-purple-800"
            }`}
          >
            {loading ? "Submitting..." : "Submit Partnership Request"}
          </button>
        </form>
      </section>

      <Footer />
    </div>
  );
}

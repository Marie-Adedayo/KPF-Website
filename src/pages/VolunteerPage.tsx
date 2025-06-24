import React, { useState, useRef } from "react";
import Header from "@/component/Header";
import Footer from "@/component/Footer";

export default function VolunteersPage() {
  const [form, setForm] = useState({ name: "", email: "", role: "", bio: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);

    if (!form.name || !form.email || !form.role || !form.bio) {
      alert("Please fill in all fields.");
      return;
    }

    if (!validateEmail(form.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    // ✅ Use FormData to bypass CORS preflight
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("role", form.role);
    formData.append("bio", form.bio);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzJb-BLUXlCZ8r2BO5hkXbC7evds0ls6j6X89qh8y5F1ZMZ-MlILQfvc8AYF99NzfM/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      if (result.status === "success") {
        setSuccess(true);
        setForm({ name: "", email: "", role: "", bio: "" });
      } else {
        alert("Failed to submit. Server responded with an error.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 overflow-hidden" style={{ minHeight: "90vh" }}>
        <div className="absolute inset-0 z-0">
          <img
            src="/Images/volunteer.jpeg"
            alt="Volunteer with Kayode Philip Foundation"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-yellow-500/70" />
        </div>

        <div className="container mx-auto px-6 relative z-10 flex items-center h-full" style={{ minHeight: "80vh" }}>
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Volunteer with Us, <br /> Transform Lives
            </h1>
            <p className="text-xl mb-8">
              Be the reason someone smiles. Join our mission to bring hope, education, and
              empowerment to underserved communities.
            </p>
            <button
              onClick={scrollToForm}
              className="bg-orange-500 text-white py-4 px-8 rounded-button hover:bg-orange-600 transition duration-300 font-medium text-lg"
            >
              Apply Now
            </button>
          </div>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="py-16 px-4 grid md:grid-cols-3 gap-8 text-center">
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">🧡 Purpose-Driven Work</h3>
          <p className="text-gray-600 text-sm">
            Support causes that matter — from education to empowerment.
          </p>
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">🤝 Build Connections</h3>
          <p className="text-gray-600 text-sm">
            Meet other changemakers, mentors, and visionaries.
          </p>
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">🌱 Grow with Us</h3>
          <p className="text-gray-600 text-sm">
            Gain real experience and personal development opportunities.
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section
        ref={formRef}
        className="bg-white border border-gray-400 p-8 rounded-xl shadow max-w-xl mx-auto my-20"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Apply to Volunteer</h2>
        {success && (
          <div className="text-green-600 text-center font-medium mb-4">
            🎉 Thank you! Your application has been received.
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded-md focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded-md focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>
          <div>
            <label htmlFor="role" className="block font-medium text-gray-700 mb-1">
              Preferred Role
            </label>
            <input
              id="role"
              name="role"
              value={form.role}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded-md focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>
          <div>
            <label htmlFor="bio" className="block font-medium text-gray-700 mb-1">
              Tell us about yourself
            </label>
            <textarea
              id="bio"
              name="bio"
              rows={4}
              value={form.bio}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded-md focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-orange-500 text-white py-2 rounded-md transition ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-orange-600"
            }`}
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </section>

      <Footer />
    </div>
  );
}

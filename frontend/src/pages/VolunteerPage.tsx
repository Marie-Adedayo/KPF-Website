import React, { useState, useRef } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

export default function VolunteerPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    bio: "",
    locationType: "",
    state: "",
    country: ""
  });
   const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false); // added loading state
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

    if (!form.name || !form.email || !form.role || !form.bio || !form.locationType) {
      alert("Please fill in all required fields.");
      return;
    }

    if (!validateEmail(form.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    // Use URLSearchParams so Apps Script can read e.parameter
    const payload = new URLSearchParams();
    Object.entries(form).forEach(([k, v]) => {
      if (v !== "") payload.append(k, String(v));
    });

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxY-tcbJMog-iqhFY4zFvfsIowB3AlNWzUjdiFwe6nypOkBX3lxyk_jQe0uLnazZ3DE/exec",
        {
          method: "POST",
          body: payload
        }
      );

      const result = await response.json();

      if (result.status === "success") {
        setSuccess(true);
        setForm({ name: "", email: "", role: "", bio: "", locationType: "", state: "", country: "" });
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
          <div className="max-w-xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Partner or Volunteer with Us and Transform Lives
            </h1>
            <p className="text-xl mb-8">
              Whether you're looking to contribute your time or resources, your involvement can help us bring hope, education, and empowerment to communities in need.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToForm}
                className="bg-orange-500 text-white py-4 px-8 rounded-md hover:bg-orange-600 transition duration-300 font-medium text-lg"
              >
                Volunteer
              </button>
              <a
                href="/partnership"
                className="bg-purple-600 text-white py-4 px-8 rounded-md hover:bg-purple-700 transition duration-300 font-medium text-lg text-center"
              >
                Partner with Us
              </a>
            </div>

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
              className="w-full border border-gray-400 px-3 py-2 rounded-md focus:ring-1 focus:ring-purple-600 focus:border-purple-600 focus:outline-none"
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
              className="w-full border border-gray-400 px-3 py-2 rounded-md focus:ring-1 focus:ring-purple-600 focus:border-purple-600 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="role" className="block font-medium text-gray-700 mb-1">
              Preferred Role
            </label>
            <select
              id="role"
              name="role"
              value={(form as any).role || ""}
              onChange={(e) => handleChange(e as any)}
              required
              className="w-full border border-gray-400 px-3 py-2 rounded-md mb-4 focus:ring-1 focus:ring-purple-600 focus:border-purple-600 focus:outline-none"
            >
              <option value="">-- Select a role --</option>
              <option value="Coordination & Logistics">Coordination & Logistics</option>
              <option value="Registration & Crowd Management">Registration & Crowd Management</option>
              <option value="Medical & Health Services">Medical & Health Services</option>
              <option value="Welfare & Feeding">Welfare & Feeding</option>
              <option value="Education & Empowerment">Education & Empowerment</option>
              <option value="Media & Documentation">Media & Documentation</option>
              <option value="Security & Safety">Security & Safety</option>
              <option value="Sanitation & Environment">Sanitation & Environment</option>
              <option value="Technical / IT Support">Technical / IT Support</option>
              <option value="Counseling & Community Engagement">Counseling & Community Engagement</option>
              <option value="Logistics">Logistics</option>
              <option value="Other">Other</option>
            </select>

            <label htmlFor="locationType" className="block font-medium text-gray-700 mb-1">
              Where are you based?
            </label>
            <select
              id="locationType"
              name="locationType"
              value={(form as any).locationType || ""}
              onChange={(e) => handleChange(e as any)}
              required
              className="w-full border border-gray-400 px-3 py-2 rounded-md mb-4 focus:ring-1 focus:ring-purple-600 focus:border-purple-600 focus:outline-none"
            >
              <option value="">-- Select location --</option>
              <option value="nigeria">Nigeria</option>
              <option value="abroad">Abroad</option>
            </select>

            {/* Nigerian states list */}
            {((form as any).locationType === "nigeria") && (() => {
              const NIGERIAN_STATES = [
              "Abia","Adamawa","Akwa Ibom","Anambra","Bauchi","Bayelsa","Benue",
              "Borno","Cross River","Delta","Ebonyi","Edo","Ekiti","Enugu","Gombe",
              "Imo","Jigawa","Kaduna","Kano","Katsina","Kebbi","Kogi","Kwara",
              "Lagos","Nasarawa","Niger","Ogun","Ondo","Osun","Oyo","Plateau",
              "Rivers","Sokoto","Taraba","Yobe","Zamfara","Federal Capital Territory"
              ];
              return (
              <>
                <label htmlFor="state" className="block font-medium text-gray-700 mb-1">
                State in Nigeria
                </label>
                <select
                id="state"
                name="state"
                value={(form as any).state || ""}
                onChange={(e) => handleChange(e as any)}
                required
                className="w-full border border-gray-400 px-3 py-2 rounded-md mb-4 focus:ring-1 focus:ring-purple-600 focus:border-purple-600 focus:outline-none"
                >
                <option value="">-- Select state --</option>
                {NIGERIAN_STATES.map((s) => (
                  <option key={s} value={s}>
                  {s}
                  </option>
                ))}
                </select>
              </>
              );
            })()}

            {((form as any).locationType === "abroad") && (
              <>
              <label htmlFor="country" className="block font-medium text-gray-700 mb-1">
                Country
              </label>
              <input
                id="country"
                name="country"
                value={(form as any).country || ""}
                onChange={handleChange}
                required
                className="w-full border border-gray-400 px-3 py-2 rounded-md mb-4 focus:ring-1 focus:ring-purple-600 focus:border-purple-600 focus:outline-none"
              />
              </>
            )}
            <input
              id="role"
              name="role"
              value={form.role}
              onChange={handleChange}
              required
              className="w-full border border-gray-400 px-3 py-2 rounded-md focus:ring-1 focus:ring-purple-600 focus:border-purple-600 focus:outline-none"
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
              className="w-full border border-gray-400 px-3 py-2 rounded-md focus:ring-1 focus:ring-purple-600 focus:border-purple-600 focus:outline-none"
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
        {success && (
          <div className="text-green-600 text-center font-medium mb-4">
            ✅ Thank you! Your application has been received.
          </div>
        )}
        
      </section>

      <Footer />
    </div>
  );
}

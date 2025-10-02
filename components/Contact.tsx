"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = "918143413999"; // 🔹 Replace with your WhatsApp number
    const text = `📩 New Contact Message\n\n👤 Name: ${form.name}\n📧 Email: ${form.email}\n📱 Phone: ${form.phone}\n💬 Message: ${form.message}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank"); // Opens WhatsApp chat
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 ">
      {/* Hero Section */}
      <section className="relative py-16 text-center bg-gradient-to-r from-black to-blue-700 text-white px-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Get in Touch With Us
        </h1>
        <p className="max-w-2xl mx-auto text-lg p-5 ">
          We’d love to hear about your project, idea, or just a quick hello.
          Let’s create something amazing together.
        </p>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
          <form onSubmit={sendToWhatsApp} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-3 focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-3 focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-3 focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              className="w-full rounded-lg border px-4 py-3 focus:ring-2 focus:ring-indigo-500"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold hover:opacity-90 transition"
            >
              Send
            </button>
          </form>
        </div>

        {/* Contact Info + Map */}
        <div className="space-y-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Contact Details</h2>
            <ul className="space-y-4 text-gray-700">
              <li>
                📞 <span className="font-medium">Phone:</span>{" "}
                <a href="tel:+918555088176" className="hover:underline">
                  +91 85550 88176 or
                </a>
                <a href="tel:+918143413999" className="hover:underline">
                  +91 81434 13999
                </a>
              </li>
              <li>
                📧 <span className="font-medium">Email:</span>{" "}
                <a
                  href="mailto:hello@yourcompany.com"
                  className="hover:underline"
                >
                  genuineservices@gmail.com
                </a>
              </li>
              <li>
                📍 <span className="font-medium">Address: </span>
                #2-6-8 Ashita comolex, 3rd floor Near Kokila Centre, Kakinada,
                AP, India
              </li>
              <li>
                🕒 <span className="font-medium">Working Hours:</span>
                Mon – Sat: 9:00 AM – 6:00 PM
              </li>
            </ul>
          </div>

          {/* Google Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-72">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122110.45256617575!2d82.16509442719935!3d16.976928792810693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3827ddaf59b4f7%3A0x92f8ddb9c89a4803!2sKakinada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1759349365882!5m2!1sen!2sin"
              width="600"
              height="450"
             
              loading="lazy"
       
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

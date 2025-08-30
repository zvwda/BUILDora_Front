import React, { useState } from "react";
import axios from "axios";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: ""
  });

  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // تحديث الحقول
  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // إرسال البريد
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");

    try {
      const emailData = {
        subject: `New Contact Request from ${formData.name}`,
        text: `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Project Type: ${formData.projectType}

Message:
${formData.message}
        `,
      };

      await axios.post("http://localhost:5000/Email/sendEmail", {
        to: ["ali.m.farouk33@gmail.com" ,  "zwalid327@gmail.com" , "amjadayman605@gmail.com" ], 
        emailData,
      });

      setStatus("Email sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        message: ""
      });
    } catch (error) {
      setStatus("Failed to send email.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="text-white py-20 px-6 lg:px-20">
      {/* Section Header */}
      <h2 className="text-2xl md:text-4xl font-[400] text-center mb-16">
        Got an idea?
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Text Block */}
        <div>
          <h3 className="text-xl text-white mb-4">Let’s Build Something Together</h3>
          <p className="text-gray-300 mb-2">
            Whether it’s your first website or your tenth product —<br />
            we’re here to help.
          </p>
          <p className="text-gray-300">
            Just send us a few details, and we’ll get back to you within 24 hours.
          </p>
        </div>

        {/* Right Form */}
        <div className="bg-white text-black rounded-lg p-8 shadow-lg">
          <h4 className="text-lg font-semibold mb-6 text-center">Let’s Build Together</h4>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#00bfffe8]"
              required
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#00bfffe8]"
              required
            />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="tel"
              placeholder="Phone number"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#00bfffe8]"
            />
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded bg-white focus:outline-none focus:ring-2 focus:ring-[#00bfffe8] focus:border-[#00bfffe8]"
              required
            >
              <option value="">Select project type</option>
              <option>Website</option>
              <option>Mobile App</option>
              <option>Product Design</option>
            </select>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows={4}
              className="w-full border border-gray-300 px-4 py-2 rounded resize-none focus:outline-none focus:ring-2 focus:ring-[#00bfffe8]"
              required
            ></textarea>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#0A1C3C] text-white py-3 rounded hover:bg-[#00bfffe8] transition"
            >
              {isLoading ? "Sending..." : "Send Request"}
            </button>

            <p className="text-center text-sm text-[#0A1C3C] pt-2">
              {status || "Expect a response from our team within one business day."}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

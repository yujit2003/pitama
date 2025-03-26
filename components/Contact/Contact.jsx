"use client";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOpenMail = (e) => {
    e.preventDefault();
    const { subject, message } = formData;

    if (!subject || !message) {
      alert("Please fill in all fields.");
      return;
    }
    const email = "pitamafoods@gmail.com";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-bold mb-6">Contact</h2>
            <ul className="space-y-6">
              <li className="flex items-start">
                <span className="text-2xl mr-4">📍</span>
                <div>
                  <p>1850 Ellesmere Road</p>
                  <p>Scarborough</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-4">📞</span>
                <div>289-380-7130</div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-4">✉️</span>
                <div>info@pitamafoods.com</div>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="col-span-1 border p-3 rounded-md"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="col-span-1 border p-3 rounded-md"
              />
              <input
                type="email"
                placeholder="Email *"
                className="col-span-2 border p-3 rounded-md"
              />
              <textarea
                placeholder="Message"
                rows="5"
                className="col-span-2 border p-3 rounded-md"
              ></textarea>
              <button
                type="submit"
                className="col-span-2 bg-gray-700 text-white py-2 rounded-md hover:bg-gray-600"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      
    </>
  );
};

export default Contact;

"use client"
import React, { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOpenMail = (e) => {
    e.preventDefault();
    const { subject, message } = formData;

    if (!subject || !message) {
      // Implement proper form validation and error handling here
      alert('Please fill in all fields.');
      return;
    }
    const email = 'pitamafoods@gmail.com'
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="h-full ">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <b className="text-4xl text-center mb-12">
            Let&apos;s <span className="text-red-500">connect.</span>
          </b>
          {/* form */}
          <form onSubmit={handleOpenMail} className="flex flex-1 flex-col gap-6 w-full mx-auto">
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                placeholder="Name"
                className="input"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="input"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
            />
            <textarea
              placeholder="Message"
              className="textarea"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
            <button
              type="submit"
              className="btn rounded-full border border-black/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-300">
                Let&apos;s talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
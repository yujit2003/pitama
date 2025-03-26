import React from "react";
import NavBar from "../../components/NavBar";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Home/Footer";
import Dev from "../../components/Home/Dev";

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar page="contact" />
      
      
      {/* Contact Form */}
      <div className="flex justify-center">
        <div className="bg-white shadow-lg rounded-lg p-8 md:p-2 w-full max-w-5xl">
          <Contact />
        </div>
      </div>
      <div className="w-full mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.935362473709!2d-79.2301162845122!3d43.76357487911743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d21c8f6e3b05%3A0xa49da74b4c7ebf23!2s1850%20Ellesmere%20Rd%2C%20Scarborough%2C%20ON%20M1H%202V5%2C%20Canada!5e0!3m2!1sen!2sus!4v1695651234567!5m2!1sen!2sus"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-md shadow-lg"
        ></iframe>
      </div>
      
      {/* Footer */}
      <div className="mt-auto">
        <Footer />
      </div>
      <Dev />
    </div>
  );
};

export default Page;
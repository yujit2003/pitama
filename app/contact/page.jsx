import React from "react";
import NavBar from "../../components/NavBar";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Home/Footer";
import Dev from "../../components/Home/Dev";

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar page="contact" />
      
      {/* Hero Section */}
      <div className="relative flex flex-col items-center text-center py-20 px-4 md:px-0">
        <h1 className="text-5xl font-bold text-[#fcaf17] tracking-tight mb-4">
          CONTACT US
        </h1>
        <h2 className="text-2xl md:text-3xl font-pacifico text-red-500 font-bold mb-4">
          It is our Pleasure to serve you
        </h2>
        <p className="text-lg max-w-3xl text-gray-700">
          Please fill out the form, and we will respond within 24 hours.
        </p>
      </div>
      
      {/* Contact Form */}
      <div className="flex justify-center">
        <div className="bg-white shadow-lg rounded-lg p-8 md:p-2 w-full max-w-3xl">
          <Contact />
        </div>
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
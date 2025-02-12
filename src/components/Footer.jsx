import React from "react";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white py-8 px-5 md:px-28 md:py-16">
      <div className="container mx-auto grid grid-cols-1 space-y-10 md:grid-cols-4 md:space-y-0">
        
        {/* Company Info */}
        <section className="space-y-4">
          <h1 className="text-4xl font-black">Gadgets District</h1>
          <p className="w-2/3 text-sm font-light">
            Power Up Your Play and Productivity
          </p>
        </section>

        {/* Contact Info */}
        <section className="space-y-6">
          <h2 className="uppercase text-xl font-semibold">Contact Us</h2>
          <div className="space-y-4 text-sm font-light">
            <p className="flex items-center space-x-2">
              <BsTelephone className="text-lg" />
              <span>+8801836318259</span>
            </p>
            <p className="flex items-center space-x-2">
              <FiMail className="text-lg" />
              <span>gadgetsdiatrict25@gmail.com</span>
            </p>
            {/* Address section removed */}
          </div>
        </section>

        {/* Social Media Links */}
        <section className="space-y-6">
          <h2 className="uppercase text-xl font-semibold">Follow Us</h2>
          <div className="flex space-x-6 text-3xl">
            <a
              href="https://www.facebook.com/share/1B5JynkTHv/?mibextid=LQQJ4d"
              aria-label="Facebook"
              className="text-blue-600 hover:text-white/80"
            >
              <AiOutlineFacebook />
            </a>
            <a
              href="https://www.instagram.com/gadgets_district_?igsh=MmY2YnJwcWlqdnk1"
              aria-label="Instagram"
              className="text-pink-600 hover:text-white/80"
            >
              <AiOutlineInstagram />
            </a>
          </div>
        </section>

        {/* Useful Links */}
        <section className="space-y-6">
          <h2 className="uppercase text-xl font-semibold">Useful Links</h2>
          <div className="flex flex-col space-y-4 text-sm font-light">
            <a href="/faq" className="hover:text-white/80">
              FAQ
            </a>
            <a href="/returnpolicy" className="hover:text-white/80">
              Return Policy
            </a>
          </div>

          {/* Buttons */}
          <div className="flex flex-col space-y-4">
            <a
              href="https://wa.me/8801836318259"
              className="block text-center border border-green-500 text-green-500 py-2 rounded hover:bg-green-500 hover:text-white transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Us
            </a>
            <a
              href="tel:+8801836318259"
              className="block text-center border border-blue-500 text-blue-500 py-2 rounded hover:bg-blue-500 hover:text-white transition duration-300"
            >
              Call Us
            </a>
          </div>
        </section>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm mt-12">
        <p>&copy; 2025 Gadgets District. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

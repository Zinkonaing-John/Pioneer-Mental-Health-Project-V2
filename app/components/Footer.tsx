import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[#161d1c] text-white text-sm px-6 md:px-20 pt-12 pb-6 font-serif">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Purpose */}
        <div className="max-w-sm">
          <h4 className="text-xl italic font-light mb-3">Pioneers</h4>
          <p className="text-base font-sans mb-6">
            Providing compassionate mental health care and resources to help you on your journey to wellness.
          </p>
          {/* Social icons */}
          <div className="flex gap-4">
            {[FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
              <div key={idx} className="bg-gray-700 p-3 rounded-full hover:bg-white hover:text-black transition">
                <Icon size={18} />
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            {["Home", "About Us", "Services", "Resources", "Blog", "Contact"].map(link => (
              <li key={link}>
                <a href="#" className="hover:underline">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Services</h4>
          <ul className="space-y-2">
            {["AI Chatbox", "Group Therapy", "Anxiety Treatment", "Stress Management"].map(service => (
              <li key={service}>
                <a href="#" className="hover:underline">{service}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-10 border-gray-600" />

      {/* Bottom Section */}
      <div className="text-center text-xs font-sans space-y-2">
        <p>235 Cheonjam-Ro, Wansan-Gu, Jeonju-Si, Jeollabuk-Do 55069 Korea</p>
        <p>TEL: +82-63-220-4114</p>
        <p>Copyright © VISION College of Jeonju. All Rights Reserved.</p>
        <div className='flex flex-row space-x-0'>
        <img src="images/vision.png" alt="Vision Logo" className="mx-auto mt-3 w-100" />
        <div className="mt-10 space-x-4 items-center">
          <a href="#" className="hover:underline">Privacy Policy</a> |
          <a href="#" className="hover:underline">Terms of Service</a> |
          <a href="#" className="hover:underline">Accessibility</a> |
          <a href="#" className="hover:underline">Sitemap</a>
        </div>

        </div>
        
      </div>
    </footer>
  );
};

export default Footer;

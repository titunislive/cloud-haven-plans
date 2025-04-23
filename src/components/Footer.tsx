
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-bold gradient-text mb-4">CloudHaven</h2>
            <p className="text-gray-500 mb-4">
              Reliable hosting solutions for businesses of all sizes. Fast, secure, and affordable.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-blue">
                <span className="sr-only">Facebook</span>
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-blue">
                <span className="sr-only">Twitter</span>
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-blue">
                <span className="sr-only">Instagram</span>
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-blue">
                <span className="sr-only">LinkedIn</span>
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Hosting */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">Hosting</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-500 hover:text-brand-blue">Shared Hosting</a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-brand-blue">VPS Hosting</a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-brand-blue">Dedicated Servers</a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-brand-blue">Cloud Hosting</a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-brand-blue">Wordpress Hosting</a>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-500 hover:text-brand-blue">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-brand-blue">Careers</a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-brand-blue">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-brand-blue">Partnerships</a>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-500 hover:text-brand-blue">Terms of Service</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-500 hover:text-brand-blue">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-500 hover:text-brand-blue">Contact Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-brand-blue">Knowledge Base</a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-brand-blue">FAQ</a>
              </li>
              <li className="flex items-center text-gray-500">
                <Mail size={16} className="mr-2" />
                <span>support@cloudhaven.com</span>
              </li>
              <li className="flex items-center text-gray-500">
                <PhoneCall size={16} className="mr-2" />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-400 text-center">
            © {new Date().getFullYear()} CloudHaven. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

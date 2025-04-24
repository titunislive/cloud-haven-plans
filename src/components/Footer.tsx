import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-sm border-t mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="xl:col-span-1">
            <p className="text-base text-gray-500">
              Cloudscape is your premier destination for modern cloud hosting solutions.
              We empower businesses and individuals with cutting-edge technology and unparalleled support.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Legal
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link to="/privacy-policy" className="text-base text-gray-500 hover:text-gray-900">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms-of-service" className="text-base text-gray-500 hover:text-gray-900">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link to="/delete-instructions" className="text-base text-gray-500 hover:text-gray-900">
                      Data Deletion
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Support
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                      Security
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                      Press
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Connect
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 sm:flex sm:items-center sm:justify-between">
          <p className="text-base text-gray-400">
            &copy; {new Date().getFullYear()} Cloudscape, Inc. All rights reserved.
          </p>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-end">
            <a href="#" className="text-base text-gray-400 hover:text-gray-500">
              Terms
            </a>
            <a href="#" className="text-base text-gray-400 hover:text-gray-500">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => (
  <div className="max-w-3xl mx-auto py-12 px-4">
    <Link to="/" className="inline-flex items-center text-gray-600 hover:text-brand-blue mb-6">
      <ArrowLeft className="mr-2" size={16} /> Back to Home
    </Link>
    <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
    <p className="mb-4 text-gray-600">
      Cloudscape values your privacy and is committed to protecting your personal data. This Privacy Policy outlines how we collect, use, and safeguard your information.
    </p>
    <h2 className="text-xl font-semibold mt-8 mb-3">Information We Collect</h2>
    <ul className="list-disc pl-6 text-gray-600">
      <li>Personal identification information (name, email address, etc.)</li>
      <li>Usage data and cookies</li>
      <li>Other data relevant to providing our service</li>
    </ul>
    <h2 className="text-xl font-semibold mt-8 mb-3">How We Use Your Information</h2>
    <ul className="list-disc pl-6 text-gray-600">
      <li>To provide and maintain our services</li>
      <li>To notify you about updates and offers</li>
      <li>To improve our website and user experience</li>
    </ul>
    <h2 className="text-xl font-semibold mt-8 mb-3">Contact Us</h2>
    <p className="text-gray-600">
      If you have questions about this Privacy Policy, please contact us at <a className="text-brand-blue" href="mailto:support@cloudscape.com">support@cloudscape.com</a>
    </p>
  </div>
);

export default PrivacyPolicy;

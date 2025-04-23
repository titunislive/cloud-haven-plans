
import React from "react";
import BackToHomeButton from "@/components/BackToHomeButton";

const TermsOfService = () => (
  <div className="max-w-3xl mx-auto py-12 px-4">
    <BackToHomeButton />
    <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
    <p className="mb-4 text-gray-600">
      Please read these Terms of Service ("Terms") carefully before using Cloudscape. By accessing or using our services, you agree to be bound by these Terms.
    </p>
    <h2 className="text-xl font-semibold mt-8 mb-3">Use of Services</h2>
    <ul className="list-disc pl-6 text-gray-600">
      <li>You must be at least 18 years old to use our services.</li>
      <li>Do not misuse our services or attempt to access them unlawfully.</li>
    </ul>
    <h2 className="text-xl font-semibold mt-8 mb-3">Account Responsibility</h2>
    <ul className="list-disc pl-6 text-gray-600">
      <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
      <li>Notify us immediately of any unauthorized use of your account.</li>
    </ul>
    <h2 className="text-xl font-semibold mt-8 mb-3">Modifications</h2>
    <p className="text-gray-600">
      We reserve the right to update or modify these Terms at any time. Your continued use indicates acceptance of the new Terms.
    </p>
    <h2 className="text-xl font-semibold mt-8 mb-3">Contact Us</h2>
    <p className="text-gray-600">
      If you have any questions about these Terms, contact us at <a className="text-brand-blue" href="mailto:support@cloudscape.com">support@cloudscape.com</a>
    </p>
  </div>
);

export default TermsOfService;

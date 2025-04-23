
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BackToHomeButton = ({ className = "" }: { className?: string }) => (
  <Link to="/" className={`inline-flex items-center text-gray-600 hover:text-brand-blue mb-6 ${className}`}>
    <ArrowLeft className="mr-2" size={16} /> Back to Home
  </Link>
);

export default BackToHomeButton;

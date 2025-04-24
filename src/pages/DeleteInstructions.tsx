
import React from "react";
import Navbar from "@/components/Navbar";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedBackground from "@/components/AnimatedBackground";

const DeleteInstructions = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <AnimatedBackground />
      
      <div className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6">Data Deletion Instructions</h1>
        
        <div className="space-y-6 bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md">
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">How to Request Data Deletion</h2>
            <p className="text-gray-600">
              We take your privacy seriously. If you wish to delete your account and associated data, please follow these steps:
            </p>
            
            <ol className="list-decimal pl-6 space-y-2 text-gray-600">
              <li>Log into your account</li>
              <li>Download any data you wish to keep</li>
              <li>Contact our support team with your deletion request</li>
            </ol>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">What Data Will Be Deleted</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Account information</li>
              <li>Usage history</li>
              <li>Stored preferences</li>
              <li>All associated content</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Support</h2>
            <Button className="flex items-center gap-2">
              <Mail size={18} />
              Email Support Team
            </Button>
          </section>

          <div className="mt-6 p-4 bg-gray-50 rounded-md">
            <p className="text-sm text-gray-500">
              Note: Data deletion is permanent and cannot be undone. Please ensure you have backed up any important information before requesting deletion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteInstructions;

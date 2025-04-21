
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Server, Shield, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background gradient with dot pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white"></div>
      <div className="relative pt-10 pb-16 sm:pt-16 lg:pt-24 lg:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Cloud Hosting for</span>
              <span className="block gradient-text">Every Website</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Fast, secure, and reliable hosting solutions for businesses of all sizes. Get started in minutes with our easy setup process.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-brand-blue to-brand-teal hover:from-brand-blue hover:to-brand-blue md:py-4 md:text-lg md:px-10">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Button variant="outline" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-brand-blue bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center">
              <div className="rounded-full bg-blue-50 p-3 mb-4">
                <Server className="h-6 w-6 text-brand-blue" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">99.9% Uptime</h3>
              <p className="mt-2 text-sm text-gray-500">Our robust infrastructure ensures your website stays online</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center">
              <div className="rounded-full bg-blue-50 p-3 mb-4">
                <Shield className="h-6 w-6 text-brand-blue" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Enhanced Security</h3>
              <p className="mt-2 text-sm text-gray-500">Advanced protection against cyber threats and attacks</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center">
              <div className="rounded-full bg-blue-50 p-3 mb-4">
                <Zap className="h-6 w-6 text-brand-blue" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Lightning Fast</h3>
              <p className="mt-2 text-sm text-gray-500">Optimized servers for quick loading and performance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

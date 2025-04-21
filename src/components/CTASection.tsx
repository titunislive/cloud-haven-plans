
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <div className="bg-brand-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="relative rounded-2xl bg-gradient-to-r from-brand-blue to-brand-teal overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-teal mix-blend-multiply" aria-hidden="true"></div>
          </div>
          <div className="relative max-w-7xl mx-auto py-12 px-6 sm:py-16 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Ready to get started?
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-blue-50">
                Launch your website today with our hassle-free hosting solutions.
              </p>
              <div className="mt-8">
                <Button className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-brand-blue bg-white hover:bg-gray-50 sm:px-10">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="ml-4 inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white border-white hover:bg-white/10 sm:px-10">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;

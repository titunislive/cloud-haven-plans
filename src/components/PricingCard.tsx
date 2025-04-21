
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: {
    monthly: number;
    annual: number;
  };
  description: string;
  features: string[];
  isPopular?: boolean;
  isAnnual: boolean;
}

const PricingCard = ({
  title,
  price,
  description,
  features,
  isPopular = false,
  isAnnual
}: PricingCardProps) => {
  const displayPrice = isAnnual ? price.annual : price.monthly;
  const billingPeriod = isAnnual ? '/year' : '/month';

  return (
    <div className={`pricing-card ${isPopular ? 'pricing-card-popular' : ''}`}>
      {isPopular && <div className="pricing-badge">MOST POPULAR</div>}
      <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      <div className="mt-4 flex items-baseline text-gray-900">
        <span className="text-4xl font-extrabold tracking-tight">${displayPrice}</span>
        <span className="ml-1 text-xl font-semibold">{billingPeriod}</span>
      </div>
      <p className="mt-5 text-sm text-gray-500">{description}</p>
      
      <ul className="mt-6 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <div className="flex-shrink-0">
              <Check className="h-5 w-5 text-green-500" />
            </div>
            <p className="ml-3 text-sm text-gray-700">{feature}</p>
          </li>
        ))}
      </ul>
      
      <Button 
        className={`mt-8 w-full ${
          isPopular 
            ? 'bg-brand-blue hover:bg-blue-700 text-white' 
            : 'bg-white border border-brand-blue text-brand-blue hover:bg-gray-50'
        }`}
      >
        Get Started
      </Button>
    </div>
  );
};

export default PricingCard;

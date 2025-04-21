
import React from 'react';
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface PricingToggleProps {
  isAnnual: boolean;
  setIsAnnual: (value: boolean) => void;
}

const PricingToggle = ({ isAnnual, setIsAnnual }: PricingToggleProps) => {
  return (
    <div className="flex items-center justify-center space-x-4 mb-8">
      <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>Monthly</span>
      <Switch 
        checked={isAnnual} 
        onCheckedChange={setIsAnnual}
        className="data-[state=checked]:bg-brand-blue"
      />
      <div className="flex items-center">
        <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>Annual</span>
        <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
          Save 20%
        </span>
      </div>
    </div>
  );
};

export default PricingToggle;

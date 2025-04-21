
import React, { useState } from 'react';
import PricingToggle from './PricingToggle';
import PricingCard from './PricingCard';
import HostingPlanToggle from './HostingPlanToggle';

const sharedHostingFeatures = [
  "10 GB SSD Storage",
  "Unlimited Bandwidth",
  "Free SSL Certificate",
  "24/7 Support",
  "1-Click WordPress Install",
];

const vpsHostingFeatures = [
  "50 GB SSD Storage",
  "2 GB RAM",
  "2 CPU Cores",
  "Unlimited Bandwidth",
  "Free SSL Certificate",
  "24/7 Support",
  "Root Access",
];

const dedicatedHostingFeatures = [
  "500 GB SSD Storage",
  "16 GB RAM",
  "8 CPU Cores",
  "Unlimited Bandwidth",
  "Free SSL Certificate",
  "24/7 Priority Support",
  "Root Access",
  "DDoS Protection",
];

const PRICING_PLANS = [
  {
    type: "shared",
    title: "Shared Hosting",
    price: { monthly: 3.99, annual: 39.99 },
    description: "Perfect for small websites and blogs",
    features: sharedHostingFeatures,
  },
  {
    type: "vps",
    title: "VPS Hosting",
    price: { monthly: 19.99, annual: 191.99 },
    description: "Ideal for growing businesses with moderate traffic",
    features: vpsHostingFeatures,
    isPopular: true,
  },
  {
    type: "dedicated",
    title: "Dedicated Hosting",
    price: { monthly: 89.99, annual: 863.99 },
    description: "Enterprise-grade solution for high-performance needs",
    features: dedicatedHostingFeatures,
  },
];

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [selectedType, setSelectedType] = useState("shared");

  const filteredPlans = PRICING_PLANS.filter((plan) => plan.type === selectedType);

  return (
    <div id="hosting" className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            <span className="gradient-text">Choose Your Hosting Plan</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Select the perfect hosting solution for your website needs
          </p>
        </div>

        <HostingPlanToggle selected={selectedType} setSelected={setSelectedType} />
        <PricingToggle isAnnual={isAnnual} setIsAnnual={setIsAnnual} />

        <div className="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-1 lg:grid-cols-1 xl:gap-10 place-items-center">
          {filteredPlans.map((plan, idx) => (
            <PricingCard
              key={plan.title}
              title={plan.title}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
              isAnnual={isAnnual}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;

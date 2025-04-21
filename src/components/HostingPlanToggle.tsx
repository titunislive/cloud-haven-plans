
import React from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const HOSTING_PLANS = [
  { label: "Shared", value: "shared" },
  { label: "VPS", value: "vps" },
  { label: "Dedicated", value: "dedicated" },
];

interface HostingPlanToggleProps {
  selected: string;
  setSelected: (type: string) => void;
}

const highlight =
  "transition-colors duration-200 hover:bg-gradient-to-r hover:from-[#0069ff]/10 hover:to-[#00c7d4]/10 hover:border-brand-blue/70 hover:text-brand-blue";

const HostingPlanToggle: React.FC<HostingPlanToggleProps> = ({
  selected,
  setSelected,
}) => (
  <ToggleGroup
    type="single"
    value={selected}
    onValueChange={(val) => val && setSelected(val)}
    className="justify-center mb-8"
  >
    {HOSTING_PLANS.map((plan) => (
      <ToggleGroupItem
        key={plan.value}
        value={plan.value}
        aria-label={plan.label}
        className={`px-6 py-2 text-base font-semibold border rounded-full mx-2 ${highlight} ${selected === plan.value ? "bg-brand-blue/90 text-white border-brand-blue shadow-md" : "bg-white border-gray-300 text-gray-700"}`}
      >
        {plan.label}
      </ToggleGroupItem>
    ))}
  </ToggleGroup>
);

export default HostingPlanToggle;

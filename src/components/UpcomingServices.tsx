
import React from "react";
import { Card } from "@/components/ui/card";
import { Database, Dns, CloudCog } from "lucide-react";

const UpcomingServices = () => {
  return (
    <div className="mt-8 px-4">
      <h2 className="text-xl font-semibold mb-4 text-center text-gray-700">Upcoming Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        <Card className="p-6 hover:shadow-lg transition-shadow backdrop-blur-sm bg-white/80">
          <Database className="w-8 h-8 text-brand-blue mb-3" />
          <h3 className="font-semibold mb-2">Database Services</h3>
          <p className="text-sm text-gray-600">Scalable and secure database solutions coming soon</p>
        </Card>
        
        <Card className="p-6 hover:shadow-lg transition-shadow backdrop-blur-sm bg-white/80">
          <Dns className="w-8 h-8 text-brand-teal mb-3" />
          <h3 className="font-semibold mb-2">DNS Management</h3>
          <p className="text-sm text-gray-600">Advanced DNS management tools launching soon</p>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow backdrop-blur-sm bg-white/80">
          <CloudCog className="w-8 h-8 text-brand-blue mb-3" />
          <h3 className="font-semibold mb-2">Cloud Integration</h3>
          <p className="text-sm text-gray-600">Seamless cloud service integration coming soon</p>
        </Card>
      </div>
    </div>
  );
};

export default UpcomingServices;

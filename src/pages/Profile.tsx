
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock } from "lucide-react";
import Navbar from "@/components/Navbar";

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Try to get user data from location state or localStorage
  const email = location.state?.email;
  const name = location.state?.name || "User";
  
  const userServices = [
    {
      name: "Basic Hosting Plan",
      details: "5GB SSD Storage, Unlimited Bandwidth",
      status: "Active",
      renewalDate: "2025-06-15"
    }
  ];

  if (!email) {
    // If accessed directly, send to login page
    navigate("/login");
    return null;
  }

  const handleChangePassword = () => {
    alert("Password change feature is not implemented yet. Implement it here!");
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gradient-to-tr from-brand-blue/5 to-brand-teal/5 py-10">
        <div className="bg-white dark:bg-card p-8 rounded-xl shadow-md border max-w-3xl w-full flex flex-col items-center">
          <Avatar className="h-24 w-24">
            <AvatarFallback className="text-3xl">
              {name[0]?.toUpperCase() || "U"}
            </AvatarFallback>
          </Avatar>
          <h1 className="mt-5 text-2xl font-bold text-brand-blue">{name}</h1>
          <div className="text-lg text-gray-600">{email}</div>
          
          <Button
            className="mt-6 flex items-center gap-2"
            onClick={handleChangePassword}
            variant="outline"
          >
            <Lock className="mr-2" size={18} /> Change Password
          </Button>
          
          <div className="w-full mt-10">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Your Services</h2>
            
            {userServices.length > 0 ? (
              <div className="grid grid-cols-1 gap-4">
                {userServices.map((service, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{service.name}</CardTitle>
                      <CardDescription>Status: <span className="text-green-500 font-medium">{service.status}</span></CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{service.details}</p>
                      <p className="mt-2 text-sm text-gray-500">Renewal date: {service.renewalDate}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">You don't have any active services.</p>
            )}
            
            <div className="mt-6">
              <Button className="w-full bg-gradient-to-r from-brand-blue to-brand-teal text-white">
                Browse Available Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

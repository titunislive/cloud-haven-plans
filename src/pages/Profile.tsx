import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Edit } from "lucide-react";
import Navbar from "@/components/Navbar";
import EditProfileForm from "@/components/EditProfileForm";
import { getUserPlanDetails, PaymentInfo } from "@/lib/firebase-db";
import { toast } from "sonner";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<{ name: string; email: string; isLoggedIn: boolean } | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [planDetails, setPlanDetails] = useState<{
    title: string;
    price: number;
    billingCycle: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userData = localStorage.getItem("cloudscape_user");
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
      fetchUserPlan(parsedUser.email);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const fetchUserPlan = async (userEmail: string) => {
    try {
      setIsLoading(true);
      const paymentData = await getUserPlanDetails(userEmail);
      
      if (paymentData) {
        setPlanDetails({
          title: paymentData.planSelected,
          price: paymentData.planPrice,
          billingCycle: paymentData.billingCycle,
        });
      } else {
        // Set basic plan as fallback
        setPlanDetails({
          title: "Basic Plan",
          price: 0,
          billingCycle: "monthly",
        });
      }
    } catch (error) {
      console.error("Error fetching plan details:", error);
      // Set basic plan on error
      setPlanDetails({
        title: "Basic Plan",
        price: 0,
        billingCycle: "monthly",
      });
      toast.error("Failed to load subscription information");
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateUser = (updatedUser: any) => {
    setUser(updatedUser);
    setIsEditing(false);
  };

  if (!user) {
    return null;
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gradient-to-tr from-brand-blue/5 to-brand-teal/5 py-10">
        <div className="bg-white dark:bg-card p-8 rounded-xl shadow-md border max-w-3xl w-full">
          {!isEditing ? (
            <div className="flex flex-col items-center">
              <Avatar className="h-24 w-24">
                <AvatarFallback className="text-3xl">
                  {user.name[0]?.toUpperCase() || "U"}
                </AvatarFallback>
              </Avatar>
              <h1 className="mt-5 text-2xl font-bold text-brand-blue">{user.name}</h1>
              <div className="text-lg text-gray-600">{user.email}</div>
              
              <Button
                className="mt-6 flex items-center gap-2"
                onClick={() => setIsEditing(true)}
                variant="outline"
              >
                <Edit className="mr-2" size={18} /> Edit Profile
              </Button>

            {isLoading ? (
              <Card className="mt-8 p-6 w-full bg-gray-50">
                <p className="text-gray-500 text-center">Loading plan information...</p>
              </Card>
            ) : planDetails ? (
              <Card className="mt-8 p-6 w-full bg-gray-50">
                <h2 className="text-xl font-semibold mb-4">Current Plan</h2>
                <div className="space-y-2">
                  <p className="text-lg font-medium text-brand-blue">
                    {planDetails.title}
                  </p>
                  <p className="text-gray-600">
                    ${planDetails.price}/{planDetails.billingCycle === 'annual' ? 'year' : 'month'}
                  </p>
                </div>
              </Card>
            ) : null}
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold mb-6">Edit Profile</h2>
            <EditProfileForm user={user} onUpdate={handleUpdateUser} />
            <Button
              variant="ghost"
              className="mt-4"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </Button>
          </div>
        )}
        </div>
      </div>
    </>
  );
};

export default Profile;

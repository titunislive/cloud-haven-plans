
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Edit } from "lucide-react";
import Navbar from "@/components/Navbar";
import EditProfileForm from "@/components/EditProfileForm";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<{ name: string; email: string; isLoggedIn: boolean } | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem("cloudscape_user");
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
    } else {
      navigate("/login");
    }
  }, [navigate]);

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
              
              {/* Removed userServices section because userServices is undefined */}
              <p className="text-gray-500 mt-10 text-center">You don't have any active services.</p>
              <div className="mt-6">
                <Button className="w-full bg-gradient-to-r from-brand-blue to-brand-teal text-white">
                  Browse Available Services
                </Button>
              </div>
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

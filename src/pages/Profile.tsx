
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // The email is expected in location.state
  const email: string | undefined = location.state?.email;

  if (!email) {
    // If accessed directly, send to signup page
    navigate("/signup");
    return null;
  }

  const handleChangePassword = () => {
    alert("Password change feature is not implemented yet. Implement it here!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gradient-to-tr from-brand-blue/5 to-brand-teal/5">
      <div className="bg-white dark:bg-card p-8 rounded-xl shadow-md border max-w-md w-full flex flex-col items-center">
        <Avatar>
          <AvatarFallback>
            {email[0]?.toUpperCase() || "U"}
          </AvatarFallback>
        </Avatar>
        <div className="mt-5 text-lg text-brand-blue font-bold">{email}</div>
        <Button
          className="mt-8 flex items-center gap-2"
          onClick={handleChangePassword}
          variant="outline"
        >
          <Lock className="mr-2" size={18} /> Change Password
        </Button>
      </div>
    </div>
  );
};

export default Profile;

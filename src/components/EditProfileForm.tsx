
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const EditProfileForm = ({ user, onUpdate }: { 
  user: { name: string; email: string; }, 
  onUpdate: (updatedUser: any) => void 
}) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedUser = {
      ...user,
      name,
      email
    };
    
    localStorage.setItem("cloudscape_user", JSON.stringify(updatedUser));
    onUpdate(updatedUser);
    toast.success("Profile updated successfully!");
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }
    
    // In a real app, you'd verify the current password here
    const updatedUser = {
      ...user,
      password: newPassword
    };
    
    localStorage.setItem("cloudscape_user", JSON.stringify(updatedUser));
    setCurrentPassword("");
    setNewPassword("");
    toast.success("Password changed successfully!");
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleUpdateProfile} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1"
          />
        </div>
        <Button type="submit">Update Profile</Button>
      </form>

      <div className="border-t pt-6">
        <h3 className="text-lg font-medium mb-4">Change Password</h3>
        <form onSubmit={handleChangePassword} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Current Password</label>
            <Input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="mt-1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">New Password</label>
            <Input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="mt-1"
            />
          </div>
          <Button type="submit">Change Password</Button>
        </form>
      </div>
    </div>
  );
};

export default EditProfileForm;

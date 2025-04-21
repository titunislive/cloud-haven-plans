
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Mail, Lock, User } from "lucide-react";

const Signup = () => {
  return (
    <div className="min-h-[70vh] flex justify-center items-center bg-gradient-to-tr from-brand-blue/5 to-brand-teal/5">
      <div className="w-full max-w-md p-8 bg-white dark:bg-card rounded-xl shadow-md border">
        <h2 className="text-2xl font-extrabold text-center text-brand-blue mb-6">Create Your Account</h2>
        <form className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-600" htmlFor="name">Name</label>
            <div className="flex items-center border rounded-md px-2 bg-gray-50 focus-within:ring-2 focus-within:ring-brand-blue">
              <User className="mr-2 text-gray-400" size={18} />
              <Input id="name" type="text" autoComplete="name" placeholder="Your name" required className="bg-transparent border-0 p-0 focus:ring-0"/>
            </div>
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-600" htmlFor="email">Email</label>
            <div className="flex items-center border rounded-md px-2 bg-gray-50 focus-within:ring-2 focus-within:ring-brand-blue">
              <Mail className="mr-2 text-gray-400" size={18} />
              <Input id="email" type="email" autoComplete="email" placeholder="you@example.com" required className="bg-transparent border-0 p-0 focus:ring-0"/>
            </div>
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-600" htmlFor="password">Password</label>
            <div className="flex items-center border rounded-md px-2 bg-gray-50 focus-within:ring-2 focus-within:ring-brand-blue">
              <Lock className="mr-2 text-gray-400" size={18} />
              <Input id="password" type="password" autoComplete="new-password" placeholder="••••••••" required className="bg-transparent border-0 p-0 focus:ring-0"/>
            </div>
          </div>
          <Button type="submit" className="w-full bg-gradient-to-r from-brand-blue to-brand-teal text-white">Sign Up</Button>
        </form>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-brand-blue hover:underline font-semibold">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;

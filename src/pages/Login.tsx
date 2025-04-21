
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Mail, Lock } from "lucide-react";

const Login = () => {
  return (
    <div className="min-h-[70vh] flex justify-center items-center bg-gradient-to-tr from-brand-blue/5 to-brand-teal/5">
      <div className="w-full max-w-md p-8 bg-white dark:bg-card rounded-xl shadow-md border">
        <h2 className="text-2xl font-extrabold text-center text-brand-blue mb-6">Login to CloudHaven</h2>
        <form className="space-y-5">
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
              <Input id="password" type="password" autoComplete="current-password" placeholder="••••••••" required className="bg-transparent border-0 p-0 focus:ring-0"/>
            </div>
          </div>
          <Button type="submit" className="w-full bg-gradient-to-r from-brand-blue to-brand-teal text-white">Login</Button>
        </form>
        <div className="mt-4 text-center text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="text-brand-blue hover:underline font-semibold">
            Sign Up
          </Link>
        </div>
        <div className="mt-3 text-center text-sm">
          <Link to="/" className="text-gray-600 hover:text-brand-blue hover:underline">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;



import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, ArrowLeft } from "lucide-react";
import { getDatabase, ref, get } from "firebase/database";
import { firebaseApp } from "@/lib/firebase";
import { toast } from "sonner";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const db = getDatabase(firebaseApp);
      const usersRef = ref(db, "users");
      const snapshot = await get(usersRef);

      if (snapshot.exists()) {
        const users = snapshot.val();
        let foundUser = null;
        let userId = null;

        Object.keys(users).forEach((key) => {
          if (users[key].email === form.email) {
            foundUser = users[key];
            userId = key;
          }
        });

        if (foundUser) {
          if (foundUser.password === form.password) {
            toast.success("Login successful!");
            // Store session to localStorage
            localStorage.setItem(
              "cloudscape_user",
              JSON.stringify({
                isLoggedIn: true,
                email: foundUser.email,
                name: foundUser.name,
                userId: userId
              })
            );
            // redirect to Profile
            navigate("/profile");
          } else {
            toast.error("Incorrect password");
          }
        } else {
          toast.error("User not found");
        }
      } else {
        toast.error("No users found");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An error occurred during login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[70vh] flex justify-center items-center bg-gradient-to-tr from-brand-blue/5 to-brand-teal/5">
      <div className="w-full max-w-md p-8 bg-white dark:bg-card rounded-xl shadow-md border">
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-brand-blue mb-6">
          <ArrowLeft className="mr-2" size={16} /> Back to Home
        </Link>
        <h2 className="text-2xl font-extrabold text-center text-brand-blue mb-6">Login to Cloudscape</h2>
        <form className="space-y-5" onSubmit={handleLogin}>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-600" htmlFor="email">Email</label>
            <div className="flex items-center border rounded-md px-2 bg-gray-50 focus-within:ring-2 focus-within:ring-brand-blue">
              <Mail className="mr-2 text-gray-400" size={18} />
              <Input 
                id="email" 
                type="email" 
                autoComplete="email" 
                placeholder="you@example.com" 
                required 
                className="bg-transparent border-0 p-0 focus:ring-0"
                value={form.email}
                onChange={handleChange}
                disabled={loading}
              />
            </div>
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-600" htmlFor="password">Password</label>
            <div className="flex items-center border rounded-md px-2 bg-gray-50 focus-within:ring-2 focus-within:ring-brand-blue">
              <Lock className="mr-2 text-gray-400" size={18} />
              <Input 
                id="password" 
                type="password" 
                autoComplete="current-password" 
                placeholder="••••••••" 
                required 
                className="bg-transparent border-0 p-0 focus:ring-0"
                value={form.password}
                onChange={handleChange}
                disabled={loading}
              />
            </div>
          </div>
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-brand-blue to-brand-teal text-white"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>
        <div className="mt-4 text-center text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="text-brand-blue hover:underline font-semibold">
            Sign Up
          </Link>
        </div>
        <div className="mt-2 text-center text-xs">
          By logging in, you agree to our{" "}
          <Link to="/terms-of-service" className="text-brand-blue hover:underline">
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

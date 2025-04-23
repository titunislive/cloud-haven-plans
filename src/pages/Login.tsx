
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import { getDatabase, ref, get, query, orderByChild, equalTo } from "firebase/database";
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
      
      // Find user with matching email
      const userQuery = query(usersRef, orderByChild("email"), equalTo(form.email));
      const snapshot = await get(userQuery);
      
      if (snapshot.exists()) {
        // Get the first user with matching email
        const users = snapshot.val();
        const userId = Object.keys(users)[0];
        const user = users[userId];
        
        if (user.password === form.password) {
          // Login successful
          toast.success("Login successful!");
          
          // Store user data and navigate to home
          navigate("/", { state: { 
            isLoggedIn: true, 
            email: user.email,
            name: user.name
          }});
        } else {
          // Password incorrect
          toast.error("Incorrect password");
        }
      } else {
        // User not found
        toast.error("User not found");
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


import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, User } from "lucide-react";
import { saveSignupUser } from "@/lib/firebase-db";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      await saveSignupUser(form);
      setSuccess(true);
      setForm({ name: "", email: "", password: "" });
      // NAVIGATE TO PROFILE & PASS EMAIL
      navigate("/profile", { state: { email: form.email } });
    } catch (err) {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[70vh] flex justify-center items-center bg-gradient-to-tr from-brand-blue/5 to-brand-teal/5">
      <div className="w-full max-w-md p-8 bg-white dark:bg-card rounded-xl shadow-md border">
        <h2 className="text-2xl font-extrabold text-center text-brand-blue mb-6">Create Your Account</h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-600" htmlFor="name">Name</label>
            <div className="flex items-center border rounded-md px-2 bg-gray-50 focus-within:ring-2 focus-within:ring-brand-blue">
              <User className="mr-2 text-gray-400" size={18} />
              <Input id="name" type="text" autoComplete="name" placeholder="Your name" required className="bg-transparent border-0 p-0 focus:ring-0" value={form.name} onChange={handleChange} disabled={loading}/>
            </div>
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-600" htmlFor="email">Email</label>
            <div className="flex items-center border rounded-md px-2 bg-gray-50 focus-within:ring-2 focus-within:ring-brand-blue">
              <Mail className="mr-2 text-gray-400" size={18} />
              <Input id="email" type="email" autoComplete="email" placeholder="you@example.com" required className="bg-transparent border-0 p-0 focus:ring-0" value={form.email} onChange={handleChange} disabled={loading}/>
            </div>
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-600" htmlFor="password">Password</label>
            <div className="flex items-center border rounded-md px-2 bg-gray-50 focus-within:ring-2 focus-within:ring-brand-blue">
              <Lock className="mr-2 text-gray-400" size={18} />
              <Input id="password" type="password" autoComplete="new-password" placeholder="••••••••" required className="bg-transparent border-0 p-0 focus:ring-0" value={form.password} onChange={handleChange} disabled={loading}/>
            </div>
          </div>
          <Button type="submit" className="w-full bg-gradient-to-r from-brand-blue to-brand-teal text-white" disabled={loading}>
            {loading ? "Signing Up..." : "Sign Up"}
          </Button>
        </form>
        {error && <div className="mt-4 text-center text-red-500 text-sm">{error}</div>}
        {/* The signup success message is hidden, as navigation is now automatic */}
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-brand-blue hover:underline font-semibold">
            Login
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

export default Signup;

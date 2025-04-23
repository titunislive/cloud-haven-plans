
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { getDatabase, ref, push, set } from "firebase/database";
import { firebaseApp } from "@/lib/firebase";
import Navbar from "@/components/Navbar";

// Define the payment form schema with validations
const formSchema = z.object({
  cardholderName: z.string().min(3, "Name must be at least 3 characters"),
  cardNumber: z.string()
    .min(13, "Card number must be at least 13 digits")
    .max(19, "Card number cannot exceed 19 digits")
    .regex(/^[0-9]+$/, "Card number must contain only digits")
    // Store only last 4 digits in clear text
    .transform(val => val.slice(-4).padStart(val.length, '*')),
  expiryDate: z.string()
    .regex(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, "Expiry date must be in MM/YY format")
    // We'll store the expiry date as is since it's not highly sensitive
    .transform(val => val),
  // We don't store CVV at all - it's explicitly forbidden by PCI DSS
  cvv: z.string()
    .min(3, "CVV must be 3 digits")
    .max(4, "CVV cannot exceed 4 digits")
    .regex(/^[0-9]+$/, "CVV must contain only digits")
    // Never store the CVV
    .transform(() => ""),
});

type FormData = z.infer<typeof formSchema>;

const BillDesk = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const planDetails = location.state?.planDetails || {
    title: "Unknown Plan",
    price: 0,
    isAnnual: false
  };

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cardholderName: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Only store PCI-DSS compliant info (no full card numbers, no CVV)
      const paymentInfo = {
        cardholderName: data.cardholderName,
        last4Digits: data.cardNumber.slice(-4),
        expiryDate: data.expiryDate,
        timestamp: new Date().toISOString(),
        planSelected: planDetails.title,
        planPrice: planDetails.price,
        billingCycle: planDetails.isAnnual ? 'annual' : 'monthly',
        userId: localStorage.getItem("cloudscape_user") 
          ? JSON.parse(localStorage.getItem("cloudscape_user") || "{}").email 
          : "guest",
      };

      // Store compliant payment info in Firebase
      const db = getDatabase(firebaseApp);
      const paymentsRef = ref(db, "payments");
      const newPaymentRef = push(paymentsRef);
      await set(newPaymentRef, paymentInfo);

      toast.success("Payment information saved successfully!");
      navigate("/profile", { replace: true });
    } catch (error) {
      console.error("Error saving payment info:", error);
      toast.error("Failed to save payment information.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-tr from-brand-blue/5 to-brand-teal/5 py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto bg-white rounded-xl shadow-md border p-8">
            <h1 className="text-2xl font-bold mb-6 text-center text-brand-blue">Payment Details</h1>
            
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <h2 className="text-lg font-medium text-gray-800">{planDetails.title}</h2>
              <p className="text-sm text-gray-600">
                ${planDetails.price} / {planDetails.isAnnual ? 'year' : 'month'}
              </p>
            </div>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="cardholderName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cardholder Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="cardNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Card Number</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="1234 5678 9012 3456" 
                          maxLength={19}
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="expiryDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Expiry Date</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="MM/YY" 
                            maxLength={5}
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="cvv"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>CVV</FormLabel>
                        <FormControl>
                          <Input 
                            type="password" 
                            placeholder="123" 
                            maxLength={4}
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="pt-4">
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-brand-blue to-brand-teal text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Processing..." : "Complete Purchase"}
                  </Button>
                </div>

                <p className="text-xs text-gray-500 mt-4 text-center">
                  Your payment information is securely processed and stored in compliance with PCI DSS standards. 
                  We never store complete card numbers or security codes.
                </p>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BillDesk;

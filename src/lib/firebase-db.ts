
import { getDatabase, ref, push, set, query, orderByChild, equalTo, get } from "firebase/database";
import { firebaseApp } from "./firebase";

// Define the type for payment information
export interface PaymentInfo {
  cardholderName: string;
  last4Digits: string;
  expiryDate: string;
  timestamp: string;
  planSelected: string;
  planPrice: number;
  billingCycle: 'annual' | 'monthly';
  userId: string;
}

export const saveSignupUser = async (user: { email: string, password: string, name: string }) => {
  const db = getDatabase(firebaseApp);
  const usersRef = ref(db, "users");
  const newUserRef = push(usersRef);
  await set(newUserRef, user);
};

export const savePaymentInfo = async (paymentInfo: PaymentInfo) => {
  const db = getDatabase(firebaseApp);
  const paymentsRef = ref(db, "payments");
  const newPaymentRef = push(paymentsRef);
  await set(newPaymentRef, paymentInfo);
  return newPaymentRef.key;
};

export const getUserPlanDetails = async (userEmail: string): Promise<PaymentInfo | null> => {
  try {
    console.log("getUserPlanDetails called for:", userEmail);
    const db = getDatabase(firebaseApp);
    const paymentsRef = ref(db, "payments");
    const userPaymentsQuery = query(
      paymentsRef,
      orderByChild("userId"),
      equalTo(userEmail)
    );
    
    console.log("Executing query with userId:", userEmail);
    const snapshot = await get(userPaymentsQuery);
    
    if (snapshot.exists()) {
      console.log("Data found in Firebase:", snapshot.val());
      const payments = Object.values(snapshot.val()) as PaymentInfo[];
      console.log("Extracted payments:", payments);
      
      if (payments.length > 0) {
        // Return the most recent payment
        const latestPayment = payments[payments.length - 1];
        console.log("Returning latest payment:", latestPayment);
        return latestPayment;
      }
    } else {
      console.log("No data found for user:", userEmail);
    }
    
    return null;
  } catch (error) {
    console.error("Error fetching user plan:", error);
    return null;
  }
};

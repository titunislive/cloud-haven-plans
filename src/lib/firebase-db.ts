
import { getDatabase, ref, push, set, query, orderByChild, equalTo, get } from "firebase/database";
import { firebaseApp } from "./firebase";

export const saveSignupUser = async (user: { email: string, password: string, name: string }) => {
  const db = getDatabase(firebaseApp);
  const usersRef = ref(db, "users");
  const newUserRef = push(usersRef);
  await set(newUserRef, user);
};

export const savePaymentInfo = async (paymentInfo: any) => {
  const db = getDatabase(firebaseApp);
  const paymentsRef = ref(db, "payments");
  const newPaymentRef = push(paymentsRef);
  await set(newPaymentRef, paymentInfo);
  return newPaymentRef.key;
};

export const getUserPlanDetails = async (userEmail: string) => {
  try {
    const db = getDatabase(firebaseApp);
    const paymentsRef = ref(db, "payments");
    const userPaymentsQuery = query(
      paymentsRef,
      orderByChild("userId"),
      equalTo(userEmail)
    );
    
    const snapshot = await get(userPaymentsQuery);
    if (snapshot.exists()) {
      const payments = Object.values(snapshot.val());
      // Return the most recent payment
      return payments[payments.length - 1];
    }
    return null;
  } catch (error) {
    console.error("Error fetching user plan:", error);
    return null;
  }
};

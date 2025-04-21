
import { getDatabase, ref, push, set } from "firebase/database";
import { firebaseApp } from "./firebase";

export const saveSignupUser = async (user: { email: string, password: string, name: string }) => {
  const db = getDatabase(firebaseApp);
  const usersRef = ref(db, "users");
  const newUserRef = push(usersRef);
  await set(newUserRef, user);
};

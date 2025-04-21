
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDRtK5Z_TAgMUhDIBAV2X_psj4n5D09iqw",
  authDomain: "live-chess-dede7.firebaseapp.com",
  databaseURL: "https://live-chess-dede7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "live-chess-dede7",
  storageBucket: "live-chess-dede7.firebasestorage.app",
  messagingSenderId: "1002758569165",
  appId: "1:1002758569165:web:5af6a95b24f5de03913d84",
};

export const firebaseApp = initializeApp(firebaseConfig);


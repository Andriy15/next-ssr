import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg90GKTw3rsnekkNlwubneMKbL0eD-HI8",
  authDomain: "ssr-chat-ad10c.firebaseapp.com",
  projectId: "ssr-chat-ad10c",
  storageBucket: "ssr-chat-ad10c.appspot.com",
  messagingSenderId: "960439100989",
  appId: "1:960439100989:web:08d9b80716d862398dac54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig) 
export  const auth = getAuth(app)  
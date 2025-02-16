import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1KtHfDE_NKoRKj9MKv_GUQ-b_6FRp3-8",
  authDomain: "my-telejuni-project.firebaseapp.com",
  projectId: "my-telejuni-project",
  storageBucket: "my-telejuni-project.firebasestorage.app",
  messagingSenderId: "572094004650",
  appId: "1:572094004650:web:b3ef70254fd3de47e03fd3",
  measurementId: "G-HXWQ7TH6HG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
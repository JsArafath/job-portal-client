// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRSo4ix3ohZ82OfAI_FrBvnlJ__u6W0qk",
  authDomain: "old-new-product.firebaseapp.com",
  projectId: "old-new-product",
  storageBucket: "old-new-product.appspot.com",
  messagingSenderId: "855755572702",
  appId: "1:855755572702:web:22aef828a47aa782af094f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
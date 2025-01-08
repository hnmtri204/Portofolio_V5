import { addDoc, collection } from "@firebase/firestore"; // Perbarui ini
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB-lfUt1adpQ0KYcFFW_oAWTJVfHDOOZy8",
//   authDomain: "portofolio-web-3e8e8.firebaseapp.com",
//   projectId: "portofolio-web-3e8e8",
//   storageBucket: "portofolio-web-3e8e8.appspot.com",
//   messagingSenderId: "25195509306",
//   appId: "1:25195509306:web:2b635dcf997137bf612703"
// };
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALPR6wEKX6_G7ufNOoJJ0yWsUl7Qf2CUA",
  authDomain: "portofolio-6a519.firebaseapp.com",
  projectId: "portofolio-6a519",
  storageBucket: "portofolio-6a519.firebasestorage.app",
  messagingSenderId: "634517571427",
  appId: "1:634517571427:web:c4e72122d065a2f788f556",
  measurementId: "G-VL3XH28C26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { addDoc, collection, db };


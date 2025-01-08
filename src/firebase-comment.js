import { addDoc, collection } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyALPR6wEKX6_G7ufNOoJJ0yWsUl7Qf2CUA",
    authDomain: "portofolio-6a519.firebaseapp.com",
    projectId: "portofolio-6a519",
    storageBucket: "portofolio-6a519.firebasestorage.app",
    messagingSenderId: "634517571427",
    appId: "1:634517571427:web:c4e72122d065a2f788f556",
    measurementId: "G-VL3XH28C26"
};
// const firebaseConfig = {
//     apiKey: "AIzaSyDJPq9a0YPoQYkpQ-Uaw7aXQRXzzqOKzFA",
//     authDomain: "web-kelas-tes.firebaseapp.com",
//     projectId: "web-kelas-tes",
//     storageBucket: "web-kelas-tes.appspot.com",
//     messagingSenderId: "890817433268",
//     appId: "1:890817433268:web:11e5258f8864a6174c11e1"
// };

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { addDoc, collection, db, storage };


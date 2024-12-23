// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfCxZc0sfNHRj1NWyZ-RTzffIfO6Z5YoU",
  authDomain: "bulletin-ac8b9.firebaseapp.com",
  projectId: "bulletin-ac8b9",
  storageBucket: "bulletin-ac8b9.firebasestorage.app",
  messagingSenderId: "697915047746",
  appId: "1:697915047746:web:b4ef114ba97552fa4ad2db",
  measurementId: "G-3WTRLJVYY9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Storageのインスタンスをエクスポート
const storage = getStorage(app);
// Firestoreをエクスポート
const db = getFirestore(app);
//const analytics = getAnalytics(app); ローカル環境だと使用できない

// dbをエクスポート
export { db };
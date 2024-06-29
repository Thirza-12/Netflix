// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdPd5XvWqIL9gJzKL6MZ0fJGnQSrvCxKM",
  authDomain: "netflix-745ec.firebaseapp.com",
  projectId: "netflix-745ec",
  storageBucket: "netflix-745ec.appspot.com",
  messagingSenderId: "587183094574",
  appId: "1:587183094574:web:7b97e39cdccdca6d32d8bf",
  measurementId: "G-B7M8E7CG8W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
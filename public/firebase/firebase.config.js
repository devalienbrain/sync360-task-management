// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC66OClznCTE-ZyaqdSS-lkN9UVnXqDXiI",
  authDomain: "sync360-task-management.firebaseapp.com",
  projectId: "sync360-task-management",
  storageBucket: "sync360-task-management.appspot.com",
  messagingSenderId: "1093880718111",
  appId: "1:1093880718111:web:6fda2577a5b192a7b9462a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

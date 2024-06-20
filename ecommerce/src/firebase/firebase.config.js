// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4WhNfNb6hDSwPyNQ3SwEeBsNwb05Deug",
  authDomain: "ecommerce-react-js-54295.firebaseapp.com",
  projectId: "ecommerce-react-js-54295",
  storageBucket: "ecommerce-react-js-54295.appspot.com",
  messagingSenderId: "912343718857",
  appId: "1:912343718857:web:5bddf2fb732455b62d2618",
  measurementId: "G-1VNFW9T9J8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

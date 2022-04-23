// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBRjGC1lewwj3hUYJi9owABQ1AY4CejgEs",
  authDomain: "ema-john-simple-41b6d.firebaseapp.com",
  projectId: "ema-john-simple-41b6d",
  storageBucket: "ema-john-simple-41b6d.appspot.com",
  messagingSenderId: "96579070672",
  appId: "1:96579070672:web:e7407e2c9d051e80780cd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)

export default auth;
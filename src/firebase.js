import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBHsHyBGplXehBgR92LaA1AeKJHNOI4uV0",
  authDomain: "userauthentication-2.firebaseapp.com",
  projectId: "userauthentication-2",
  storageBucket: "userauthentication-2.appspot.com",
  messagingSenderId: "734856552901",
  appId: "1:734856552901:web:1a968dd16c0dc7bb496bac",
  databaseURL:"https://userauthentication-2-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHEKoQazzdgeFOFBqMgDDsu3oDzMFH9eY",
  authDomain: "nextjs13-whatsapp-fce06.firebaseapp.com",
  projectId: "nextjs13-whatsapp-fce06",
  storageBucket: "nextjs13-whatsapp-fce06.appspot.com",
  messagingSenderId: "7772131046",
  appId: "1:7772131046:web:02cf95e20a41878fa6b527",
  measurementId: "G-TW7Q0450W6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider() ;
const auth = getAuth() ;

export { app , googleProvider , auth }
// const analytics = getAnalytics(app);
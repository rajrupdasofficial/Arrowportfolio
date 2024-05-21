// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const apikey_base=process.env.apiKey
const authDomain_base=process.env.authDomain
const projectId_base=process.env.projectId
const storageBucket_base=process.env.storageBucket
const messagingSenderId_base=process.env.messagingSenderId
const appId_base=process.env.appId
const measurementId=process.env.measurementId
const firebaseConfig = {
  apiKey: apikey_base,
  authDomain: authDomain_base,
  projectId: projectId_base,
  storageBucket: storageBucket_base,
  messagingSenderId: messagingSenderId_base,
  appId: appId_base,
  measurementId: measurementId
};

// Initialize Firebase
export const firebase_config = initializeApp(firebaseConfig);
let analytics = null;
if (typeof window !== "undefined") {
  analytics = getAnalytics(firebase_config);
}

export { analytics };


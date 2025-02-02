// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
//import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: 'AIzaSyDEuiPbN6qmXz9cRVa45LtmIiXFXIEupP0',
   authDomain: 'ang-blog-c9435.firebaseapp.com',
   projectId: 'ang-blog-c9435',
   storageBucket: 'ang-blog-c9435.appspot.com',
   messagingSenderId: '207450317135',
   appId: '1:207450317135:web:7682873676a5bc1a52e53a',
   measurementId: 'G-N4M8SXXGNV',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export default app;

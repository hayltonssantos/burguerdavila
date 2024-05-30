// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4aiGlxBy3J-k-moNjO2c0A7v-DPNGAE4",
  authDomain: "burguerdavila.firebaseapp.com",
  databaseURL: "https://burguerdavila-default-rtdb.firebaseio.com",
  projectId: "burguerdavila",
  storageBucket: "burguerdavila.appspot.com",
  messagingSenderId: "895990301629",
  appId: "1:895990301629:web:2fd7ea9ae3443f00f508d4",
  measurementId: "G-WJ41QDCK6R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
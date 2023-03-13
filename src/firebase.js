// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbxzdupbet-kruvyGy5cYERTnKKF5ubwY",
  authDomain: "gtu-paper-solution-565db.firebaseapp.com",
  databaseURL: "https://gtu-paper-solution-565db-default-rtdb.firebaseio.com",
  projectId: "gtu-paper-solution-565db",
  storageBucket: "gtu-paper-solution-565db.appspot.com",
  messagingSenderId: "99377892891",
  appId: "1:99377892891:web:e877d9c91cb722b1a932be",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA3R1z1sbhmjpKzTUXifT1vpYJQxGQevZQ",
  authDomain: "fir-react-tutorial-4c773.firebaseapp.com",
  projectId: "fir-react-tutorial-4c773",
  storageBucket: "fir-react-tutorial-4c773.appspot.com",
  messagingSenderId: "218157112846",
  appId: "1:218157112846:web:4b3799ad42f939e5cf665f"
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

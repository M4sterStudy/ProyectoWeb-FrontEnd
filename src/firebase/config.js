import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA2tzJt9u9tTMNfdhteSAwsnLj5_cnXBGc",
  authDomain: "loginweb-a51ef.firebaseapp.com",
  projectId: "loginweb-a51ef",
  storageBucket: "loginweb-a51ef.appspot.com",
  messagingSenderId: "305126633838",
  appId: "1:305126633838:web:f2a22651a9411aa135917f",
  measurementId: "G-MEDKPEWGC6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth()


export {app,auth}
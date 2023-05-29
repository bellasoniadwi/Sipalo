import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCaWsXHCRfkYq__dtr1QMDC9i50IXTnR4E",
  authDomain: "sipalo-b9f0c.firebaseapp.com",
  projectId: "sipalo-b9f0c",
  storageBucket: "sipalo-b9f0c.appspot.com",
  messagingSenderId: "301384337187",
  appId: "1:301384337187:web:a796d9f57614482fd7ee96",
  measurementId: "G-8VHYSRT66M",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
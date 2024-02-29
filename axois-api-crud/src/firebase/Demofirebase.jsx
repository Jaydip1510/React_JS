import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCdyqf3-XDNiVW-0WXAy8yD_yco3y2-akM",
    authDomain: "reactdemo-888d6.firebaseapp.com",
    projectId: "reactdemo-888d6",
    storageBucket: "reactdemo-888d6.appspot.com",
    messagingSenderId: "194535158686",
    appId: "1:194535158686:web:82938b06f9be5d25b71c8f",
    measurementId: "G-CSH3D2YRW8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
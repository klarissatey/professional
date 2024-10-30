import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCFaXewGdVczeBZvCo177-rTkQlgfID16E",
    authDomain: "first-gen-mentorship.firebaseapp.com",
    projectId: "first-gen-mentorship",
    storageBucket: "first-gen-mentorship.firebasestorage.app",
    messagingSenderId: "1077040908789",
    appId: "1:1077040908789:web:ad8544b17486a2a4fb38bc",
    measurementId: "G-1H1G5EGQBT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const firestore = getFirestore(app);

// User authentication methods
const signUp = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log("User signed up: ", user);
        return user;
    } catch (error) {
        console.error("Error signing up: ", error);
        throw error;
    }
};

const signIn = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log("User signed in: ", user);
        return user;
    } catch (error) {
        console.error("Error signing in: ", error);
        throw error;
    }
};

// Export the Firebase services and authentication methods
export { auth, firestore, signUp, signIn };

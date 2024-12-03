import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, addDoc, getDocs, updateDoc, deleteDoc, doc, setDoc } from 'firebase/firestore';

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
initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth();
const db = getFirestore();
export {auth, db};

async function addTestData () {
    await setDoc(doc(db, "testCollection", "testDoc"), {name: "Test", value: 123});
    console.log("document added");
}
addTestData();

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

// Firestore database operations
const addUserProfile = async (userData) => {
    try {
        const docRef = await addDoc(collection(firestore, "users"), userData);
        console.log("User profile added with ID: ", docRef.id);
        return docRef.id;
    } catch (error) {
        console.error("Error adding user profile: ", error);
        throw error;
    }
};

const getUserProfiles = async () => {
    try {
        const querySnapshot = await getDocs(collection(firestore, "users"));
        const users = [];
        querySnapshot.forEach((doc) => {
            users.push({ id: doc.id, ...doc.data() });
        });
        return users;
    } catch (error) {
        console.error("Error getting user profiles: ", error);
        throw error;
    }
};

const updateUserProfile = async (id, updatedData) => {
    try {
        const userRef = doc(firestore, "users", id);
        await updateDoc(userRef, updatedData);
        console.log("User profile updated: ", id);
    } catch (error) {
        console.error("Error updating user profile: ", error);
        throw error;
    }
};

const deleteUserProfile = async (id) => {
    try {
        const userRef = doc(firestore, "users", id);
        await deleteDoc(userRef);
        console.log("User profile deleted: ", id);
    } catch (error) {
        console.error("Error deleting user profile: ", error);
        throw error;
    }
};

// Export the Firebase services and authentication methods
export { auth, firestore, signUp, signIn, addUserProfile, getUserProfiles, updateUserProfile, deleteUserProfile };

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBw5arrgdNklC5AYgOsBXEQVEbNzH_h0yw",
  authDomain: "e-commerce-437df.firebaseapp.com",
  projectId: "e-commerce-437df",
  storageBucket: "e-commerce-437df.appspot.com",
  messagingSenderId: "152860894299",
  appId: "1:152860894299:web:f257b8d6fae090a0fa8b7e",
  measurementId: "G-V1CTEWF6RB",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error Saveing data ", error);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

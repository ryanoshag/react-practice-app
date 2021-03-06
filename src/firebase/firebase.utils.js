import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBcCUK78OO5tG3pGpy2wSnyFlfgk9GdQHs",
    authDomain: "react-practice-app-6b938.firebaseapp.com",
    databaseURL: "https://react-practice-app-6b938.firebaseio.com",
    projectId: "react-practice-app-6b938",
    storageBucket: "react-practice-app-6b938.appspot.com",
    messagingSenderId: "643409667602",
    appId: "1:643409667602:web:7730ce23c21e08ec37dacb",
    measurementId: "G-TPRKFH5GE5"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) 
        return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        }
        catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
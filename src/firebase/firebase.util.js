import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyB7DO2E0642ksZDTcGO_DSzDHI6eL_VtGk",
  authDomain: "crown-db-bbdc3.firebaseapp.com",
  databaseURL: "https://crown-db-bbdc3.firebaseio.com",
  projectId: "crown-db-bbdc3",
  storageBucket: "crown-db-bbdc3.appspot.com",
  messagingSenderId: "30231711318",
  appId: "1:30231711318:web:5ad0616740e1be07ceb5f7",
  measurementId: "G-8J91EN1B1K"
};


export const createUserProfileDocument = async (authenticUser, additionalData) => {
  if(!authenticUser) return;

  const userRef = firestore.doc(`users/${authenticUser.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const {displayName, email} = authenticUser;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(e) {
      console.log('error while inserting user', e.message)
    }
  }
  
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
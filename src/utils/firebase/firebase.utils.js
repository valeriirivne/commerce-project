import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  DocumentSnapshot,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDd7fCqfzsHTBBJEjgdCxyG9g_cjM0d_Rg',
  authDomain: 'crwn-clothing-db-f17f2.firebaseapp.com',
  projectId: 'crwn-clothing-db-f17f2',
  storageBucket: 'crwn-clothing-db-f17f2.appspot.com',
  messagingSenderId: '157055924749',
  appId: '1:157055924749:web:27348d590127d27a44f344',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//different providers : Facebook, Github, or any else
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

// The getAuth() function without parameters will use the default initialized instance of Firebase. If you have multiple instances of Firebase i.e. multiple projects, then you must pass the app instance to specify which project's auth that auth instance must use.
export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

//we add new collection as well as new documents inside this collection
export const addCollectionAndDocuments = async (
  collectionKey, //for example users key inside the collection
  objectsToAdd // the actual documents that we want to add
) => {
  const collectionRef = collection(db, collectionKey); //here we are looking for our instantiated db and collectionKey('users' or 'categories' i.e. )
  // we need to instantiate a batch class
  const batch = writeBatch(db);
  // this batch instance allows us to attach a butch of different rights, deletes, sets. and only when we are ready to fire off the batch does the actual transaction begin. So what we are going to do is we need to create a bunch of set methods

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();

  // transaction is a word that represents  a successful unit of work to a database. A unit of work differs. It might be multiple sets of setting value into a collection
  // Транзакції та пакетні записи
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());

  // const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
  //   const { title, items } = docSnapshot.data();

  //   acc[title.toLowerCase()] = items;
  //   return acc;
  // }, {});

  // return categoryMap;
};

// first we need to see if there is existing document reference
// refrence is a special type of object that firestore uses when talking about actual instance of document model
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user ', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  // console.log(auth);
  // console.log(`EMAIL OF USER THAT AUTHANTICATED: ${auth.currentUser.email}`);
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
  const res = await signOut(auth);
};

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
};
//onAuthStateChange will call this callback whenever the authentication state of auth singleton changes. example: When user signs in that considers a auth change, or user sign out. OnAuthStateChanged is an open listener the moment you set it,  this thing is always waiting to see whether or not the auth state are changing and the moment it does it will run a callback

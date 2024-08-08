import { createContext, useEffect, useReducer } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore'; // Importar Firestore
// CUSTOM COMPONENT
import { SplashScreen } from '@/components/splash-screen';
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APT_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app); // Inicializar Firestore
const initialAuthState = {
  user: null,
  isInitialized: false,
  isAuthenticated: false
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'AUTH_STATE_CHANGED':
      const {
        isAuthenticated,
        user
      } = action.payload;
      return {
        ...state,
        isAuthenticated,
        user,
        isInitialized: true
      };
    default:
      return state;
  }
};

// LOGIN WITH EMAIL HANDLER
const signInWithEmail = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// LOGIN WITH GOOGLE ACCOUNT HANDLER
const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

// REGISTER USER WITH EMAIL HANDLER
const createUserWithEmail = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// USER LOGOUT HANDLER
const logout = () => signOut(auth);

// AUTH CONTEXT INITIALIZE
export const AuthContext = createContext({
  ...initialAuthState,
  method: 'FIREBASE',
  logout,
  signInWithGoogle,
  signInWithEmail,
  createUserWithEmail
});
export const AuthProvider = ({
  children
}) => {
  const [state, dispatch] = useReducer(reducer, initialAuthState);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Buscar el documento del usuario por correo electrónico
        const usersRef = collection(firestore, 'users');
        const q = query(usersRef, where('email', '==', user.email));
        const querySnapshot = await getDocs(q);
        const userDoc = querySnapshot.docs[0];

        const payload = {
          isAuthenticated: true,
          user: {
            id: user.uid,
            role: userDoc.data().role,
            email: user.email,
            avatar: user.photoURL,
            name: `${userDoc.data().firstName} ${userDoc.data().lastName}`
          }
        };
        dispatch({
          type: 'AUTH_STATE_CHANGED',
          payload
        });
      } else {
        dispatch({
          type: 'AUTH_STATE_CHANGED',
          payload: {
            isAuthenticated: false,
            user: null
          }
        });
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  // SHOW LOADING
  if (!state.isInitialized) return <SplashScreen />;
  return <AuthContext.Provider value={{
    ...state,
    logout,
    signInWithEmail,
    signInWithGoogle,
    method: 'FIREBASE',
    createUserWithEmail
  }}>
      {children}
    </AuthContext.Provider>;
};
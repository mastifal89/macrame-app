import React, { useContext, useEffect, useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import {
  updateProfile,
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { auth } from "../Firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  function signup(name, email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const auth = getAuth();
        updateProfile(auth.currentUser, {
          displayName: name,
        });
      })
      .catch((error) => alert(error));
  }
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
  };
  return (
    <div>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </div>
  );
}

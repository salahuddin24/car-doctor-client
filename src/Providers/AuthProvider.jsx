import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const loginUser = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }


  useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, currentUser =>{
      setUser(currentUser);
      console.log('current user :', currentUser);
      setLoading(false);
    });
    return () =>{
      return unsubscribe();
    }
  }, [])

  const authInfo = {
    user, 
    loading,
    createUser,
    loginUser,

  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
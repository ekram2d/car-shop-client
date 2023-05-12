import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/firebase.config';
export const AuthContext = createContext()
const auth = getAuth(app);
const AuthProvider = ({ children }) => {

      const [user, setUser] = useState(null);
      const [loaidng, setLoading] = useState(true);

      const registerWithEmailPassword = (email, password) => {
            setLoading(true);
            return createUserWithEmailAndPassword(auth, email, password);


      }
      const loginUser=(email,password)=>{
            setLoading(true);
            return signInWithEmailAndPassword(auth,email,password);
      }

      useEffect(() => {
            const unsubcribe = onAuthStateChanged(auth, currentuser => {
                  setUser(currentuser);
                  setLoading(false);
                  console.log("currentt", currentuser);
                 
            });
            return () => {
                  return unsubcribe();
            }
      }, [])
      const authInfo = {
            user,
            loaidng,
            registerWithEmailPassword,
            loginUser,
      }

      return (
            <AuthContext.Provider value={authInfo}>
                  {children}
            </AuthContext.Provider>
      );
};

export default AuthProvider;
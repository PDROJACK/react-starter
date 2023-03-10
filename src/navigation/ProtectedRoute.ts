import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "../app/firebasConfig";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const ProtectedRoute = ({children}) => {
    const [user, setUser] = useState<User>(null);
    const navigator = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              console.log(user);
              setUser(user);
            } else {
              setUser(null)
              navigator("/login")
            }
          });

          return () => {
            setUser(null)
          }
    }, []);

    if(user === null){
      console.log("going to logout")
      navigator("/login")
      return null
    }
    
    if(!user.emailVerified) {
      console.log("going to verification screen")
      navigator("/verification")
      return null
    }

    return children
    
}
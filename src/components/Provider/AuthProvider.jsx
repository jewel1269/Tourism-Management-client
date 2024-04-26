import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState()



const createUser = (email, password)=>{
    return createUserWithEmailAndPassword( auth, email, password)
}

const signIn =(email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
}

const logOut = () => {
   
    return signOut(auth)
}

const googleLogin=(googleProvider)=>{
    return signInWithPopup(auth, googleProvider )
}
const githubLogin=(githubProvider)=>{
    return signInWithPopup(auth, githubProvider )
}

useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
        console.log("user in the", currentUser)
        setUser(currentUser)
        
    })
    return () => {
        unSubscribe();
    }
}, [])

    const allInfo={
        createUser,
        googleLogin,
        githubLogin,
        signIn,
        logOut,
        user,





    }
    return (
        <AuthContext.Provider value={allInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;
import { createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import { createContext, useState } from "react";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setuser] = useState()



const createUser = (email, password)=>{
    return createUserWithEmailAndPassword( auth, email, password)
}

const googleLogin=(googleProvider)=>{
    return signInWithPopup(auth, googleProvider )
}
const githubLogin=(githubProvider)=>{
    return signInWithPopup(auth, githubProvider )
}

    const allInfo={
        createUser,
        googleLogin,
        githubLogin,



    }
    return (
        <AuthContext.Provider value={allInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;
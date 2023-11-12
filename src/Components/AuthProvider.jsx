import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import app from "../Firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {


    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
 
    

    const googleSignIn = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)

    }
     

    const CreateUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const LogOut = () => {
        setLoading(true);
        return signOut(auth)
    }
    const SignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
           const userEmail = currentUser?.email || user?.email
           const loggedUser = {email: userEmail}
            setUser(currentUser);
            
            if(currentUser){
                axios.post('https://assignment-11-server-mu-six.vercel.app/jwt',loggedUser, {withCredentials:true})
                .then(res=>{
                    console.log(res.data);
                })
            }
            else{
                axios.post('https://assignment-11-server-mu-six.vercel.app/logout',loggedUser, {withCredentials:true})
                .then(res=>{
                    console.log(res.data);
                })

            }
            
            setLoading(false)
        });
        return () => {
            unSubscribe
        }

    }, [])




    const authInf = {
        user,
        CreateUser,
        LogOut,
        SignIn,
        loading,
        googleSignIn,
        
       
       

    }
    return (
        <AuthContext.Provider value={authInf}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
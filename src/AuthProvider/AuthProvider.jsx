import axios from 'axios';
import { auth } from '../../fire.configue';
import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const authContext = createContext(null)
const AuthProvider = ({ children }) => {
    const googlePro = new GoogleAuthProvider()
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (name, link) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: link
        })
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, googlePro)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    },[])

    const authInfo = { user, createUser, updateUser, googleSignIn, signInUser, logOut, loading }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    )

};

export default AuthProvider;
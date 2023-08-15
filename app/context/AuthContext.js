'use client'
import React, { createContext, useState, useContext, useEffect } from 'react'
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from 'firebase/auth'
import { auth } from '../firebase'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const signInWithGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider()
            await signInWithPopup(auth, provider)
        } catch (error) {
            console.log(error)
        }
    }

    const logOut = async () => {
        try {
            await signOut(auth)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
        })
        return unsubscribe
    }, [user])

    return (
        <AuthContext.Provider value={{user, signInWithGoogle, logOut}}>
            {children}
        </AuthContext.Provider>    
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}
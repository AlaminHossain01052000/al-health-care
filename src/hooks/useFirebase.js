import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";

import initializeFirebase from "../firebase/firebase.init";

initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const emailSignUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {


                setUser(result.user);
            })
    }
    const emailSignIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                setUser(result.user)
            })
    }

    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
    }
    const loggingOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    const setDisplayName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            // Profile updated!
            // ...
        }).catch((error) => {
            // An error occurred
            // ...
        });
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }


        })
    }, [user])


    return {
        emailSignUp,
        emailSignIn,
        googleSignIn,
        user,
        loggingOut,
        setUser,
        setDisplayName

    }
}
export default useFirebase;

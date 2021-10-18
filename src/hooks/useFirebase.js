import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
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

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
        })
    }, [user])

    const logOut = (e) => {
        e?.preventDefault();
        signOut(auth).then(() => {
            console.log("signOut Done")
        }).catch((error) => {
            // An error happened.
        });
        console.log("logout")

    }
    return {
        emailSignUp,
        emailSignIn,
        googleSignIn,
        logOut,
        user,
        setUser

    }
}
export default useFirebase;

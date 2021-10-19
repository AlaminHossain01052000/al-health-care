import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";

import initializeFirebase from "../firebase/firebase.init";

initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const emailSignUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {


                setUser(result.user);
            })
            .finally(() => {
                setIsLoading(false)
            })

            .catch(error => {
                setError(error.message);
            })

    }
    const emailSignIn = (email, password) => {

        setIsLoading(true);

        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {

                setUser(result.user)
            })
            .finally(() => {
                setIsLoading(false)
            })
            .catch(error => {
                setError(error.message);
            })

    }

    const googleSignIn = () => {

        setIsLoading(true)

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
            .finally(() => {
                setIsLoading(false)
            })
            .catch(error => {
                setError(error.message);
            })

    }
    const loggingOut = () => {



        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch(error => {
                setError(error.message);
            })

    }

    const setDisplayName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            // setDisplayName
        }).catch((error) => {
            setError(error.message);
        });
    }
    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            setIsLoading(false);

        })
    }, [user])


    return {
        emailSignUp,
        emailSignIn,
        googleSignIn,
        user,
        loggingOut,
        setUser,
        setDisplayName,
        error,
        setError,
        isLoading

    }
}
export default useFirebase;

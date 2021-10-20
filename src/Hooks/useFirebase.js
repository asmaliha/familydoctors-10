import { getAuth, signInWithPopup, updateProfile, sendEmailVerification, GoogleAuthProvider, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);


    const auth = getAuth();

    // Sign in using Google
    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);

                setUser(result.user);
            })
            .finally(() => setIsLoading(false));
    }
    // Eventhandlers for name,email and password
    const handleEmail = e => {
        setEmail(e.target.value);
    }

    const handlePassword = e => {
        setPassword(e.target.value)
    }


    // Registration of new user

    const handleUserLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleRegisterUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                verifyEmail();
                setUserName();
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            })
    }



    // Logging Out
    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }
    // Logout when user is logged in (state changed)
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
    }, []);

    // Returning of values
    return {
        handleUserLogin,
        handleRegisterUser,
        handleEmail,
        handlePassword,
        user,
        error,
        signInUsingGoogle,
        isLoading,
        logout
    }
}
export default useFirebase;
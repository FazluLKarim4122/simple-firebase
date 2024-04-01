
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../Firebase/firebase.init";
import { useState } from "react";

const Login = () => {
    // ke sign in korse ta dekhte chai
    const [user, setUser] = useState(null)
    const auth = getAuth(app)
    // console.log(app)
    const provider = new GoogleAuthProvider()
    const handleGoogleSignin = () => {
        // console.log('google sign in clicked')
        signInWithPopup(auth, provider)
        .then(result => {
            const loggedInUser = result.user
            console.log(loggedInUser)
            setUser(loggedInUser)
        })
        .catch(error => {
            console.log('error', error.message)
        })
        
    }
    
    const handleSignOut = () => {
        console.log('sign out')
        signOut(auth).then(result => {
            //dekhi kisu paoa jay kina tai result ta dekhay dilam
            console.log(result)
            // thik moto logout hoye gele amra ki korte pari,,at least setUser ke null kore dite pari kono user nai tai
            setUser(null)
        }).catch(error => {
            console.log(error.message)
        })
    }

    //Github Authentication 
    const githubProvider = new GithubAuthProvider()
    const handleGithubSignIn =() =>{
        // console.log('github sign in')
        signInWithPopup(auth, githubProvider)
        .then(result =>{
            const loggedUser = result.user
            console.log(loggedUser)
            setUser(loggedUser)
        }).catch(error => {
            console.log(error.message)
        })
    }
   

    
    return (
        <div>
            {/* user thake ? logout dekhaba : na thakle sign in koro */}
            {
                user ?
                    <button onClick={handleSignOut}>Sign Out</button> :
                    <div>
                        <button onClick={handleGoogleSignin}>Google Login</button>
                        <button onClick={handleGithubSignIn}>GitHub Login</button>
                    </div>
            }
            {/** conditional rendering: jodi user thake taile dekhaba na thakle dhukte jabe na */}
            {user && <div>
                <h3>User: {user?.displayName}</h3>
                <p>Email: {user.email}</p>
                <img src={user.photoURL} alt="" />
                <p>UserId: {user.uid}</p>
            </div>}
        </div>
    );
};

export default Login;

import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../Firebase/firebase.init";
import { useState } from "react";

const Login = () => {
    // ke sign in korse ta dekhte chai
    const [user, setUser] = useState(null)
    const auth = getAuth(app)
    // console.log(app)
    const provider = new GoogleAuthProvider()
    const handleGoogleSignin = ()=>{
        // console.log('google sign in clicked')
        signInWithPopup(auth,provider)
        .then(result =>{
            const loggedInUser = result.user
            console.log(loggedInUser)
            setUser(loggedInUser)
        })
        .catch(error =>{
            console.log('error', error.message)
        })

    }

    
    return (
        <div>
            <button onClick={handleGoogleSignin}>Google Login</button>
            {/** conditional rendering: jodi user thake taile dekhaba na thakle dhukte jabe na */}
            {user && <div>
                <h3>User: {user?.displayName}</h3>
                <p>Email: {user.email}</p>
                <img src={user.photoURL} alt="" />
            </div>}
        </div>
    );
};

export default Login;
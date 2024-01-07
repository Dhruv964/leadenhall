// components/MyComponent.jsx
import React from 'react';
import { account } from '../../lib/appwrite';


const SignIn = () => {

    const handleSignIn = async (e:React.MouseEvent<HTMLElement>) => {
        e.preventDefault();

        account.createOAuth2Session('google', 'http://localhost:3000/', 'http://localhost:3000/login');

        
        const session = await account.getSession('current');

        const promise = await account.get();
        // Get the session ID
        const sessionId = session.$id;
        console.log(sessionId);
        // Update the session
        // const promise2 = account.updateSession(sessionId);
        promise.then(
            function (response:any) {
                console.log(response); // Success
            },
            function (error:any) {
                console.log(error); // Failure
            }
        );
    }

    return (
        <div className= "justify-center" >
        <button onClick={ handleSignIn }
    className="border-[1px] border-black/50 hover:border-black p-4 m-2 shadow-lg rounded-md mx-auto font-semibold"
        >
        Sign in with Google
        </button>
        </div>
    )
    };

export default SignIn;

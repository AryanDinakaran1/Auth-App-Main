import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase-config';
import axios from 'axios';

function SignUp() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = async () => {

        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            console.log(user);

            useEffect(() => {
                axios.post('http://127.0.0.1:8000/signup', { 
                    username,
                    email, 
                    password })
                .then((response) => {
                    console.log(response);
                })
                .catch((response) => {
                    console.log(response)
                })
            })
        }
        catch(error) {
            console.log(error);
        }

    };

    return(
        <div>

            <h1>Sign Up</h1>
            {/*
            <form action="http://127.0.0.1:8000/signup" method="post">
            */}

            <input type="text" name="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <input type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={register}>Sign Up</button>

            {/*
            </form>
            */}
        </div>
    );

}

export default SignUp;
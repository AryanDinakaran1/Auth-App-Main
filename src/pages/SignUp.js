import React, { useState } from 'react';

function SignUp() {

    const [username, setUsername] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [password, setPassword] = useState();

    return(
        <div>

            <h1>Sign Up</h1>
            <form action="http://127.0.0.1:8000/signup" method="post">

                <input type="text" value={username} name="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                <input type="text" value={firstName} name="first_name" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
                <input type="text" value={lastName} name="last_name" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
                <input type="password" value={password} name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <input type="submit" />

            </form>
        </div>
    );

}

export default SignUp;
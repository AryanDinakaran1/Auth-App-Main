import React, { useState } from 'react';

function SignUp() {
    return(
        <div>

            <h1>Sign Up</h1>
            <form action="http://127.0.0.1:8000/signup" method="post">

                <input type="text" value={username} name="username" placeholder="Username" />
                <input type="text" value={firstName} name="first_name" placeholder="First Name" />
                <input type="text" value={lastName} name="last_name" placeholder="Last Name" />
                <input type="password" value={password} name="password" placeholder="Password" />
                <input type="submit" />

            </form>
        </div>
    );

}

export default SignUp;
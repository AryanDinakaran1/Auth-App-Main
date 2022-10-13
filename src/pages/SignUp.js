import React from 'react';

function SignUp() {

    return(
        <div>
            <h1>Sign Up</h1>
            <form>

                <input type="text" name="username" placeholder="Username" />
                <input type="text" name="firstName" placeholder="First Name" />
                <input type="text" name="lastName" placeholder="Last Name" />
                <input type="password" name="password" placeholder="Password" />
                <input type="submit" />

            </form>
        </div>
    );

}

export default SignUp;
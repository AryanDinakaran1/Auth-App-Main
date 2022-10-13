import React from 'react';

function SignIn() {
    return(
        <div>
            <h1>Sign In</h1>
            <form>

                <input type="text" name="username" placeholder="Username" />
                <input type="password" name="password" placeholder="Password" />
                <input type="submit" />

            </form>
        </div>
    );
}
export default SignIn;
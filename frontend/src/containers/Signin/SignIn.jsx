import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function SignIn() {

    const [email, setEmail ] = useState('');
    const [password, setPassword] = useState('');
    const submitHandler = (e)=>{
        e.preventDefault();
        // sign in action 
    }
   
    return (
        <div>
         <form className="form" onSubmit={submitHandler}>
             <div>
                 Sign in
             </div>
             <div>
                 <label htmlFor="email">Email address</label>
                 <input type="email" id='email' placeholder="Enter email" required onChange = {(e)=>setEmail(e.target.value)}/>
             </div>
             <div>
                 <label htmlFor="password">Password</label>
                 <input type="password" id='password' placeholder="Enter password" required onChange = {(e)=>setEmail(e.target.value)}/>
             </div>
             <div>
                 <label />
                 <button className="primary" type="submit">Sign In</button>
             </div>
             <div>
                 <label />
                New customer? <Link to="/signup">Create your account</Link>
             </div>
         </form>
        </div>
    )
}

export default SignIn;

'use client'
import { useState } from "react";

export default function Signup() {
    const [username, SetUsername] = useState('');
    const [password, SetPassword] = useState('');
    const [email, SetEmail] = useState('');
  
    return (
    <div className='signup_form text-center mt-10'>
        <input type="email" name="email_address" placeholder='Email Address' className='m-5 p-2' onChange={ e => SetEmail(e.target.value)}/>
        <br />
        <input type="text" name="username" placeholder='Username' className='m-5 p-2' onChange={ e => SetUsername(e.target.value)}/>
        <br />
        <input type="password" name="password" placeholder='Password' className='m-5 p-2' onChange={ e => SetPassword(e.target.value)}/>
        <br />
        <button type="submit" className='m-5 pl-5 pr-5 pt-2 pb-2 border-none rounded-full bg-slate-400'>Submit</button>

    </div>
  )
}

// https://hackernoon.com/6-easy-steps-to-use-next-auth-in-nextjs-13-using-route-handler
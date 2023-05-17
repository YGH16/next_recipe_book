import React from 'react'

export default function Signup() {
  return (
    <div className='signup_form text-center mt-10'>
        <input type="email" name="email_address" placeholder='Email Address' className='m-5 p-2'/>
        <br />
        <input type="text" name="username" placeholder='Username' className='m-5 p-2' />
        <br />
        <input type="password" name="password" placeholder='Password' className='m-5 p-2' />
        <br />
        <button type="submit" className='m-5 pl-5 pr-5 pt-2 pb-2 border-none rounded-full bg-slate-400'>Submit</button>
    </div>
  )
}
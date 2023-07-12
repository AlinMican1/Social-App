'use client'

import React from 'react';
import './registerForm.css';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { ErrorAlert } from '../atom/errorAlert';


const RegisterForm = () => {
    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[error,setError] = useState<string | null>(null)

    const onSubmit = async (e: React.FormEvent) =>{
      e.preventDefault()
      try{
          const res = await fetch ('api/register',{
            method: 'POST',
            body: JSON.stringify({
              name,
              email,
              password
            }),
            headers:{
              'Content-type': 'application/json'
            }
          })
          if(res.ok){
            signIn()
          }
          /*SET ERROR MESSAGE HERE */
          else{
            setError((await res.json()).error)
            
          }
      }catch(error:any){
        setError(error?.message)
        
      }
    }
  return (
    <div className='FormContainer'>
        
        <form onSubmit={onSubmit} >
            <h1>Create your account</h1>
            <label htmlFor='name'>Username:</label>
            <input  type='text' id='name' name='email' required value={name} onChange={(e) => setName(e.target.value)}/>
            <label htmlFor='email'>email:</label>
            <input  type='text' id='email' name='email' required value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor='password'>Password:</label>
            <input type='password' id='password' name='password' required value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type='submit'>Submit</button>
            {error && <ErrorAlert>{error}</ErrorAlert>}
        </form>
    </div>
  )
}

export default RegisterForm
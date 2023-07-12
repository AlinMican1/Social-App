'use client'

import React from 'react';
import './registerForm.css';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { ErrorAlert } from '../atom/errorAlert';
import { useRouter, useSearchParams } from 'next/navigation';


const LoginForm = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const callbackUrl  = searchParams.get('callbackUrl') || '/home'
    //const error = searchParams.get('error') ? 'Invalid credentials' : ''
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const [error, setError] = useState('')
    
    const onSubmit = async (e: React.FormEvent) =>{
        e.preventDefault()
        try {
            const res = await signIn('credentials', {
                redirect: false,
                email, 
                password,
                callbackUrl
            })
            if(!res?.error){
                router.push(callbackUrl)
            }else{
                setError('Invalid email or password')
            }
        }catch(err:any){

        }

        
    
    }
  return (
    <div className='FormContainer'>
        
    <form onSubmit={onSubmit} >
        <h1>Log in</h1>
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

export default LoginForm
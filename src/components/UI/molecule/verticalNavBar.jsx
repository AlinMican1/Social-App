import React from 'react'
import Button from '../atom/button'
import './verticalNavBar.css'

const VerticalNavBar = () => {
  return (
    <div className='container'>
        <Button btnText={'Join with Google'} btnVariant={'default'}/>
        <Button btnText={'Join with Github'} btnVariant={'default'}/>
        <p>Or</p>
        <Button btnText={'Register'} btnVariant={'default'}/>

        <h3>Already have an account?</h3>
        <Button btnText={'Sign in'} btnVariant={'default'}/>
    </div>
  )
}

export default VerticalNavBar
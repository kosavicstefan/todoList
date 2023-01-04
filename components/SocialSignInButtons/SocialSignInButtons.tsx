import React from 'react'
import CustomButton from '../CustomButton/CustomButton'

const SocialSignInButtons = () => {

  const onSignInFacebook = () => {
    console.log('Facebook!')
  }

  const onSignInGoogle = () => {
    console.log('Google!')
  }

  const onSignInApple = () => {
    console.log('Apple!')
  }
  return (
    <>
      <CustomButton onPress={onSignInFacebook} text={'Sign in with Facebook!'} bgColor='#e7eaf4' fgColor='#4765a9' />
      <CustomButton onPress={onSignInGoogle} text={'Sign in with Google!'} bgColor='#fae9ea' fgColor='#dd4d44' />
      <CustomButton onPress={onSignInApple} text={'Sign in with Apple'} bgColor='#e3e3e3' fgColor='#363636' />
    </>
  )
}

export default SocialSignInButtons
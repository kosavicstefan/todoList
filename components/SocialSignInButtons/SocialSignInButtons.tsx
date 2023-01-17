import React from 'react'
import CustomButton from '../CustomButton/CustomButton'
import { getAuth, signInWithRedirect, GoogleAuthProvider, getRedirectResult, signInWithPopup } from "@firebase/auth";
import { FacebookAuthProvider } from 'expo-firebase-auth';
import { } from "firebase/auth";
import 'firebase/compat/auth';

const SocialSignInButtons = () => {

  const onSignInFacebook = async () => {
    const facebookAppId = '6261271913929608';
    const auth = getAuth()
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        console.log('Facebook radi: ', user)

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
        console.log('Ovdje je facebook greska: ', errorCode, errorMessage)

        // ...
      });
  };


  const onSignInGoogle = () => {

    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    console.log("AUTH: ", auth)
    signInWithRedirect(auth, provider);
    getRedirectResult(auth)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });

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
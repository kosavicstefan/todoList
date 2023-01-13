import { View, Image, StyleSheet, Dimensions, ScrollView, ImageSourcePropType, Alert } from 'react-native'
import { INavigation } from "../../interface";
import React, { useState } from 'react'
import CustomInput from '../CustomInput/CustomInput';
import CustomButton from '../CustomButton/CustomButton';
import SocialSignInButtons from '../SocialSignInButtons/SocialSignInButtons';
import { auth } from '../Firebase/firebase';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const SignIn = ({ navigation }: INavigation) => {
    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string>()

    const onSignInPressed = () => {
        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                if (user.emailVerified) {
                    console.log("Signed in user: ", user);
                    navigation.navigate('Home');
                } else {
                    Alert.alert(
                        'Log in failed',
                        'Your account is not verified. Verify your account first to be able to Log in.',
                        [
                            { text: 'OK', onPress: () => console.log('OK Pressed') },
                        ],
                        { cancelable: false },
                    );
                }
                setEmail('')
                setPassword('')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorCode, errorMessage);
            });


    }

    const onForgotPressed = () => {
        navigation.navigate('ForgotPassword')
    }

    const onSignUp = () => {
        navigation.navigate("SignUp")
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={"https://www.valens.dev/images/valens-logo-og.jpg" as ImageSourcePropType}
                />
                <CustomInput placeholder={'Email'} value={email} setValue={setEmail} />
                <CustomInput placeholder={'Password'} value={password} setValue={setPassword} secureTextEntry />
                <CustomButton onPress={onSignInPressed} text={'Sign in!'} />
                <CustomButton onPress={onForgotPressed} text={'Forgot password?'} type='TERTIARY' />

                <SocialSignInButtons />

                <CustomButton onPress={onSignUp} text={"Don't have an account? Create one"} type='TERTIARY' />

            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: 'center',
    },
    logo: {
        height: windowHeight * 0.25,
        maxHeight: windowHeight * 0.3,
        width: windowWidth
    }
});


export default SignIn
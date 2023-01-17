import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { INavigation } from "../../interface";
import React, { useState } from 'react'
import CustomInput from '../CustomInput/CustomInput';
import CustomButton from '../CustomButton/CustomButton';
import SocialSignInButtons from '../SocialSignInButtons/SocialSignInButtons';
import { auth } from '../Firebase/firebase';
import 'firebase/auth';

const SignUp = ({ navigation }: INavigation) => {
    const [username, setUsername] = useState<string>()
    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string>()
    const [passwordRepeat, setPasswordRepeat] = useState<string>()

    const onRegisterPressed = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                user.sendEmailVerification();
                console.log("Tu", user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

        navigation.navigate('ConfirmEmail')
    }

    const onSignIn = () => {
        navigation.navigate('SignIn')
    }

    const onTermsOfUsePressed = () => {
        console.log('Terms of Use')
    }

    const onPrivacyPressed = () => {
        console.log('Privacy Policy')
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={styles.title}>Create an account</Text>
                <CustomInput placeholder={'Username'} value={username} setValue={setUsername} secureTextEntry={false} />
                <CustomInput placeholder={'Email'} value={email} setValue={setEmail} secureTextEntry={false} />
                <CustomInput placeholder={'Password'} value={password} setValue={setPassword} secureTextEntry />
                <CustomInput placeholder={'Repeat Password'} value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry />
                <CustomButton onPress={onRegisterPressed} text={'Register'} />
                <Text style={styles.text}>
                    By registering, you confirm that you accept our {' '}
                    <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and {' '}
                    <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text>
                </Text>

                {/* <SocialSignInButtons /> */}

                <CustomButton onPress={onSignIn} text={"Have an account? Sign in"} type='TERTIARY' />

            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        marginVertical: 25,
        marginHorizontal: 10
    },
    text: {
        color: 'gray',
        marginVertical: 10
    },
    link: {
        color: '#FDB075'
    }
});


export default SignUp
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native'
import { INavigation } from "../../interface";
import React, { useState } from 'react'
import CustomInput from '../CustomInput/CustomInput';
import CustomButton from '../CustomButton/CustomButton';
import { getAuth, sendPasswordResetEmail } from "@firebase/auth";

const ForgotPassword = ({ navigation }: INavigation) => {

    const [email, setEmail] = useState<string>()

    const onSendPressed = () => {
        const auth = getAuth();
        sendPasswordResetEmail(auth, email)
            .then(() => {
                Alert.alert(
                    'Email sent',
                    'Confirmation for password change was sent to your email.',
                    [
                        { text: 'OK', onPress: () => console.log('OK Pressed') },
                    ],
                    { cancelable: false },
                );
                setEmail('')
                navigation.navigate('SignIn')
            })
            .catch((error) => {
                Alert.alert(
                    'Error',
                    'There was an error sending your email. Check if you entered right email.',
                    [
                        { text: 'OK', onPress: () => console.log(error) },
                    ],
                    { cancelable: false },
                );
                setEmail('')
            });
    }

    const onSignInPressed = () => {
        navigation.navigate('SignIn')
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={styles.title}>Reset your password</Text>
                <CustomInput placeholder={'Enter your email'} value={email} setValue={setEmail} />

                <CustomButton onPress={onSendPressed} text={'Change password'} />

                <CustomButton onPress={onSignInPressed} text={'Back to Sign in'} type='TERNARY' />
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

});


export default ForgotPassword
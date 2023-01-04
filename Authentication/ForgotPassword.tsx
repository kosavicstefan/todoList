import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { INavigation } from "../interface";
import React, { useState } from 'react'
import CustomInput from '../components/CustomInput/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';


const ForgotPassword = ({ navigation }: INavigation) => {

    const [username, setUsername] = useState<string>()

    const onSendPressed = () => {
        //Dodaj logiku ubacivanja novog passworda pa tek onda navigaciju na confrim (zasad je odmah navigacija)
        navigation.navigate('NewPassword')
    }

    const onSignInPressed = () => {
        navigation.navigate('SignIn')
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={styles.title}>Reset your password</Text>
                <CustomInput placeholder={'Password'} value={username} setValue={setUsername} secureTextEntry />

                <CustomButton onPress={onSendPressed} text={'Send'} />

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
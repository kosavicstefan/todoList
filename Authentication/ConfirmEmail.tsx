import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { INavigation } from "../interface";
import React, { useState } from 'react'
import CustomInput from '../components/CustomInput/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';


const ConfirmEmail = ({ navigation }: INavigation) => {

    const [code, setCode] = useState<string>()

    const onConfirmPress = () => {
        console.log('Confirm register')
    }

    const onResendPressed = () => {
        console.log('Resend code')
    }

    const onSignUpPressed = () => {
        navigation.navigate('SignUp')
    }


    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={styles.title}>Confirm your email</Text>
                <CustomInput placeholder={'Enter your confirmation code'} value={code} setValue={setCode} secureTextEntry={false} />

                <CustomButton onPress={onConfirmPress} text={'Confirm'} />

                <CustomButton onPress={onResendPressed} text={'Resend code'} type='SECONDARY' />

                <CustomButton onPress={onSignUpPressed} text={'Back to Register'} type='TERNARY' />
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
    }
});


export default ConfirmEmail
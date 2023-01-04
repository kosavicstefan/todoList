import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { INavigation } from "../../interface";
import React, { useState } from 'react'
import CustomInput from '../CustomInput/CustomInput';
import CustomButton from '../CustomButton/CustomButton';


const NewPassword = ({ navigation }: INavigation) => {

    const [code, setCode] = useState<string>()
    const [newPassword, setNewPassword] = useState<string>()

    const onSubmitPressed = () => {
        console.log('Submit sent!')
    }

    const onSignInPressed = () => {
        navigation.navigate('SignIn')
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={styles.title}>New Password</Text>
                <CustomInput placeholder={'Code'} value={code} setValue={setCode} secureTextEntry={false} />
                <CustomInput placeholder={'Enter your new password'} value={newPassword} setValue={setNewPassword} secureTextEntry={false} />

                <CustomButton onPress={onSubmitPressed} text={'Submit'} />

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


export default NewPassword
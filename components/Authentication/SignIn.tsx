import { View, Image, StyleSheet, Dimensions, ScrollView, ImageSourcePropType } from 'react-native'
import { INavigation } from "../../interface";
import React, { useState } from 'react'
import CustomInput from '../CustomInput/CustomInput';
import CustomButton from '../CustomButton/CustomButton';
import SocialSignInButtons from '../SocialSignInButtons/SocialSignInButtons';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const SignIn = ({ navigation }: INavigation) => {
    const [username, setUsername] = useState<string>()
    const [, setPassword] = useState<string>()

    const onSignInPressed = () => {
        navigation.navigate('Home')
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
                <CustomInput placeholder={'Username'} value={username} setValue={setUsername} secureTextEntry={false} />
                <CustomInput placeholder={'Password'} value={username} setValue={setPassword} secureTextEntry />
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
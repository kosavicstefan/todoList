import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({ placeholder, value, setValue, secureTextEntry }) => {
    return (
        <View style={styles.container}>
            <TextInput placeholder={placeholder} value={value} onChange={setValue} secureTextEntry={secureTextEntry} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%',
        paddingHorizontal: 10,
        marginVertical: 5,
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5
    },

});

export default CustomInput
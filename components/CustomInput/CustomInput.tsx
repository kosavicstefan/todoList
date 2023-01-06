import { View, TextInput, StyleSheet, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types';

const CustomInput = ({ placeholder, value, setValue, secureTextEntry }) => {

    const setF = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        console.log(e, e.target.value)
    }

    return (
        <View style={styles.container}>
            <TextInput placeholder={placeholder} value={value} onChangeText={setValue} secureTextEntry={secureTextEntry} />
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

CustomInput.propTypes = {
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
    secureTextEntry: PropTypes.bool
};

export default CustomInput
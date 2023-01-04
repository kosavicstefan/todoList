import { Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types';

const CustomButton = ({ onPress, text, type = 'PRIMARY', bgColor = undefined, fgColor = undefined }) => {
    return (
        <Pressable
            onPress={onPress}
            style={[
                styles.container,
                styles[`container_${type}`],
                bgColor ? { backgroundColor: bgColor } : {}
            ]} >
            <Text
                style={[
                    styles.text,
                    styles[`text_${type}`],
                    fgColor ? { color: fgColor } : {}
                ]}>
                {text}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {

        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5
    },
    container_PRIMARY: {
        backgroundColor: '#3B71F3',
    },
    container_TERTIARY: {

    },
    container_SECONDARY: {
        borderColor: '#3B71F3',
        borderWidth: 2
    },
    text: {
        fontWeight: 'bold',

    },
    text_PRIMARY: {
        color: 'white'
    },
    text_TERTIARY: {
        color: 'gray'
    },
    text_SECONDARY: {
        color: '#3B71F3'
    },

});


CustomButton.propTypes = {
    onPress: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.string,
    bgColor: PropTypes.string,
    fgColor: PropTypes.string
};

export default CustomButton
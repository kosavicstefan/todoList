import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import React from 'react'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


interface ICard {
    title: string,
    image: string
}

const Card = ({ title, image }: ICard) => {
    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.image} source={{ uri: image }} />
            </View>
            <View>
                <Text style={styles.title}>{title}</Text>
            </View>

        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        textAlign: 'center',
        alignItems: 'center',
        width: windowWidth * 0.8,
        alignSelf: 'center',
        backgroundColor: '#98fb98'
    },
    image: {
        margin: 10,
        padding: 10,
        height: windowHeight * 0.2,
        width: windowWidth * 0.5
    },
    title: {
        marginHorizontal: 10,
        padding: 10,
        textAlign: 'center',
        alignItems: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
});

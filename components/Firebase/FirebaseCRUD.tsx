import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomInput from '../CustomInput/CustomInput'
import CustomButton from '../CustomButton/CustomButton'
import { useState, useEffect } from "react";
import database from "../../components/Firebase/firebase";
import firebase from 'firebase/compat';
import { FlatList } from 'react-native-gesture-handler';

const Firebase = () => {
    const [users, setUsers] = useState()
    const [dogName, setDogName] = useState<string>('')

    const todoRef = firebase.firestore().collection('dogNames')

    const f = async () => {
        todoRef.onSnapshot(querySnapshot => {
            const users: any = []
            querySnapshot.forEach((doc) => {
                const name = doc.data()
                users.push(name)
            })
            setUsers(users)
        })
    }

    useEffect(() => {
        f()
    }, [])

    const createColection = () => {
        database.collection('dogNames').add({
            name: dogName,
        });
        setDogName('')
    }
    return (
        <View>
            <View><Text style={{ textAlign: 'center', marginVertical: 20 }}>Dog name</Text></View>
            <View>
                <CustomInput
                    placeholder={'Insert new name'}
                    value={dogName}
                    setValue={setDogName} />
            </View>
            <View>
                <CustomButton
                    onPress={createColection}
                    text={'Save'}
                    type='PRIMARY' />
            </View>
            <View>
                <FlatList
                    data={users}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Text>{item.name}</Text>
                        </View>
                    )}
                />
            </View>
        </View>
    )
}

export default Firebase

const styles = StyleSheet.create({
    item: {
        padding: 15,
        marginHorizontal: 50,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        textAlign: 'center',
        fontSize: 16,
        alignItems: 'center',
        backgroundColor: 'lightgray'

    }
});

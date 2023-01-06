import { View, Text } from 'react-native'
import React from 'react'
import CustomInput from '../CustomInput/CustomInput'
import CustomButton from '../CustomButton/CustomButton'
import { useState, useEffect } from "react";
import database from "../../components/Firebase/firebase";
import firebase from 'firebase';
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
            console.log("Tu su useri: ", users)
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
                        <Text>{item.name}</Text>
                    )}
                />
            </View>
        </View>
    )
}

export default Firebase
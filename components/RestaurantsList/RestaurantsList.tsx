import { useQuery } from "react-query";
import { StyleSheet, View, Text, Pressable, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Card from "../Card/Card";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";

export interface IAttributes {
    Name: string,
    Description: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string
}
export interface IData {
    id: number,
    attributes: IAttributes
}

export default function RestaurantsList() {

    const navigation = useNavigation();

    const restaurantDetails = (item: IData) => {
        navigation.navigate('RestaurantsDetails', { item })
    }

    const { data: restaurantsList, isLoading } = useQuery(
        "restaurantsList",
        async () => {
            const response = await fetch(
                "http://localhost:1337/api/restaurants?populate=pictures"
            );
            return response.json();
        }
    );

    return (
        <View style={styles.container}>
            {isLoading ? (
                <Text>Loading...</Text>
            ) : (
                <ScrollView>
                    <FlatList
                        data={restaurantsList.data}
                        renderItem={({ item }) => (
                            <Pressable onPress={() => restaurantDetails(item)}>
                                <Card
                                    title={item.attributes.Name}
                                    image={'http://localhost:1337' + item.attributes.pictures.data[0].attributes.url} />
                            </Pressable>
                        )}
                        keyExtractor={(item) => item.id}
                    />
                </ScrollView>
            )}
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
});

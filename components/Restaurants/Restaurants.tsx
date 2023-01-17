import { StyleSheet, View } from "react-native";
import React from "react";
import RestaurantsList from "../RestaurantsList/RestaurantsList";

export default function Restaurants() {
    return (
        <View style={styles.container}>
            <RestaurantsList />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
});

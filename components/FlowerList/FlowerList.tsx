import { useQuery } from "react-query";
import { StyleSheet, View, FlatList, Text } from "react-native";
import Flower from "../Flower/Flower";
import React from "react";

export default function FlowerList() {
  const { data: flowersList, isLoading } = useQuery(
    "flowersList",
    async () => {
      const response = await fetch(
        "https://dog.ceo/api/breeds/image/random/3"
      );
      return response.json();
    }
  );

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          <FlatList
            testID="list"
            data={flowersList.message}
            renderItem={({ item }) => (
              <Flower props={item} key={item.length} />
            )}
            keyExtractor={(item) => item}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});

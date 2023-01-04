
import { StyleSheet, View, FlatList } from "react-native";
import Flower from "../Flower/Flower";
import React, { useState, useEffect } from "react";

export default function FlowerList() {
  const [flowersList, setFlowersList] = useState<Array<string>>([]);

  const getData = async () => {
    fetch("https://dog.ceo/api/breeds/image/random/3")
      .then((response) => response.json())
      .then((data) => setFlowersList(data.message));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={flowersList}
          renderItem={({ item }) => <Flower props={item} key={item.length} />}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});

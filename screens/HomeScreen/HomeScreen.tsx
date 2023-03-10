import * as React from "react";
import { View, StyleSheet } from "react-native";
import { INavigation } from "../../interface";
import FlowerList from "../../components/FlowerList/FlowerList";
import Title from "../../components/Title/Title";
import { ScrollView } from "react-native-gesture-handler";

function HomeScreen({ navigation, route }: INavigation) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View testID="titleHome">
          <Title content={"Dog album"} />
        </View>
        <View style={styles.list}>
          <FlowerList />
        </View>
      </View>
    </ScrollView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    padding: 5,
    height: "auto",
    backgroundColor: "#FFDAB9",
  },
  list: {
    display: "flex",
    alignItems: "center",
  },
});

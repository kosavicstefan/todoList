import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ITitle } from "../interface";

//Kako postaviti ovaj content da ne bude any type vec da bude onaj tip koji se salje iz parent componente?
function Title({ content }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{content}</Text>
    </View>
  );
}

export default Title;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: "black",
    textAlign: "center",
    backgroundColor: "#F4A460",
    width: 340,
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 24,
  },
});

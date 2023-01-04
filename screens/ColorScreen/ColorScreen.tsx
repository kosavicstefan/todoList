import * as React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { INavigation } from "../../interface";


function ColorScreen({ navigation, route }: INavigation) {
  return (
    <View style={styles.container}>
      <View style={styles.container_first}>
        <View style={styles.first}>
          <View style={styles.first_1}></View>
          <View style={styles.first_2}></View>
        </View>
        <View style={styles.second}>
          <View style={styles.second_1}></View>
          <View style={styles.second_2}></View>
          <View style={styles.second_3}></View>
        </View>
        <View style={styles.third}>
          <View style={styles.third_1}></View>
          <View style={styles.third_2}></View>
          <View style={styles.third_3}></View>
          <View style={styles.third_4}></View>
        </View>
        <View style={styles.fourth}>
          <View style={styles.fourth_1}></View>
          <View style={styles.fourth_2}></View>
          <View style={styles.fourth_3}></View>
        </View>
        <View style={styles.fifth}>
          <View style={styles.fifth_1}></View>
          <View style={styles.fifth_2}></View>
          <View style={styles.fifth_3}></View>
        </View>
      </View>

      <View style={styles.container_second}>
        <Image
          style={styles.image}
          source={{
            uri: "https://www.valens.dev/images/valens-logo-og.jpg" as any,
          }}
        />
      </View>

      <View style={styles.container_first}>
        <View style={styles.first}>
          <View style={styles.first_1}></View>
          <View style={styles.first_2}></View>
        </View>
        <View style={styles.second}>
          <View style={styles.second_1}></View>
          <TouchableOpacity
            testID="buttonStart"
            onPress={() => navigation.navigate("SignIn")}
            style={styles.second_2_button}
          >
            <View>
              <Text style={styles.text}>Start!</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.second_3}></View>
        </View>
        <View style={styles.third}>
          <View style={styles.third_1}></View>
          <View style={styles.third_2}></View>
          <View style={styles.third_3}></View>
          <View style={styles.third_4}></View>
        </View>
        <View style={styles.fourth}>
          <View style={styles.fourth_1}></View>
          <View style={styles.fourth_2}></View>
          <View style={styles.fourth_3}></View>
        </View>
        <View style={styles.fifth}>
          <View style={styles.fifth_1}></View>
          <View style={styles.fifth_2}></View>
          <View style={styles.fifth_3}></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    borderWidth: 0.5,
    borderColor: "black",
    width: "100%",
    height: "100%",
  },
  container_first: {
    display: "flex",
    flex: 1,
    textAlign: "center",
    margin: 1,
  },
  container_second: {
    display: "flex",
    flex: 1,
    textAlign: "center",
    margin: 1,
  },
  container_third: {
    display: "flex",
    flex: 1,
    textAlign: "center",
    margin: 1,
  },
  first: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    textAlign: "center",
    margin: 1,
  },
  first_1: {
    display: "flex",
    flexGrow: 2,
    borderWidth: 0.5,
    borderColor: "black",
    textAlign: "center",
    margin: 1,
    backgroundColor: "#3CB371",
    width: "100%",
    height: "100%",
  },
  first_2: {
    display: "flex",
    borderWidth: 0.5,
    flexGrow: 3,
    borderColor: "black",
    textAlign: "center",
    margin: 1,
    backgroundColor: "#90EE90",
    width: "100%",
    height: "100%",
  },
  second: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    textAlign: "center",
    margin: 1,
    width: "100%",
    height: "100%",
  },
  second_1: {
    display: "flex",
    flexGrow: 1,
    borderWidth: 0.5,
    borderColor: "black",
    flex: 1,
    textAlign: "center",
    margin: 1,
    backgroundColor: "#2E8B57",
    width: "100%",
    height: "100%",
  },
  second_2: {
    display: "flex",
    flexGrow: 3,
    borderWidth: 0.5,
    borderColor: "black",
    flex: 1,
    textAlign: "center",
    margin: 1,
    backgroundColor: "#90EE90",
    width: "100%",
    height: "100%",
  },
  second_2_button: {
    display: "flex",
    flexGrow: 3,
    borderWidth: 0.5,
    borderColor: "black",
    flex: 1,
    textAlign: "center",
    margin: 1,
    backgroundColor: "#90EE90",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  second_3: {
    display: "flex",
    flexGrow: 1,
    borderWidth: 0.5,
    borderColor: "black",
    flex: 1,
    textAlign: "center",
    margin: 1,
    backgroundColor: "#66CDAA",
    width: "100%",
    height: "100%",
  },
  third: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    textAlign: "center",
    margin: 1,
    width: "100%",
    height: "100%",
  },
  third_1: {
    display: "flex",
    flexGrow: 1,
    borderWidth: 0.5,
    borderColor: "black",
    flex: 1,
    textAlign: "center",
    margin: 1,
    backgroundColor: "#90EE90",
    width: "100%",
    height: "100%",
  },
  third_2: {
    display: "flex",
    flexGrow: 1,
    borderWidth: 0.5,
    borderColor: "black",
    flex: 1,
    textAlign: "center",
    margin: 1,
    backgroundColor: "#66CDAA",
    width: "100%",
    height: "100%",
  },
  third_3: {
    display: "flex",
    flexGrow: 2,
    borderWidth: 0.5,
    borderColor: "black",
    flex: 1,
    textAlign: "center",
    margin: 1,
    backgroundColor: "#2E8B57",
    width: "100%",
    height: "100%",
  },
  third_4: {
    display: "flex",
    flexGrow: 1,
    borderWidth: 0.5,
    borderColor: "black",
    flex: 1,
    textAlign: "center",
    margin: 1,
    backgroundColor: "#90EE90",
    width: "100%",
    height: "100%",
  },
  fourth: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    textAlign: "center",
    margin: 1,
    width: "100%",
    height: "100%",
  },
  fourth_1: {
    display: "flex",
    flexGrow: 3,
    borderWidth: 0.5,
    borderColor: "black",
    flex: 1,
    textAlign: "center",
    margin: 1,
    backgroundColor: "#3CB371",
    width: "100%",
    height: "100%",
  },
  fourth_2: {
    display: "flex",
    flexGrow: 1,
    borderWidth: 0.5,
    borderColor: "black",
    flex: 1,
    textAlign: "center",
    margin: 1,
    backgroundColor: "#66CDAA",
    width: "100%",
    height: "100%",
  },
  fourth_3: {
    display: "flex",
    flexGrow: 1,
    borderWidth: 0.5,
    borderColor: "black",
    flex: 1,
    textAlign: "center",
    margin: 1,
    backgroundColor: "#3CB371",
    width: "100%",
    height: "100%",
  },
  fifth: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    textAlign: "center",
    margin: 1,
    width: "100%",
    height: "100%",
  },
  fifth_1: {
    display: "flex",
    flexGrow: 2,
    borderWidth: 0.5,
    borderColor: "black",
    flex: 1,
    textAlign: "center",
    margin: 1,
    backgroundColor: "#66CDAA",
    width: "100%",
    height: "100%",
  },
  fifth_2: {
    display: "flex",
    flexGrow: 1,
    borderWidth: 0.5,
    borderColor: "black",
    flex: 1,
    textAlign: "center",
    margin: 1,
    backgroundColor: "#90EE90",
    width: "100%",
    height: "100%",
  },
  fifth_3: {
    display: "flex",
    flexGrow: 2,
    borderWidth: 0.5,
    borderColor: "black",
    flex: 1,
    textAlign: "center",
    margin: 1,
    backgroundColor: "#2E8B57",
    width: "100%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    fontSize: 22,
  },
});

export default ColorScreen;

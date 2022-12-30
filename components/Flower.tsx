import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const DUMMY_DOG_NAMES = [
  "Rex",
  "Zoe",
  "Nasus",
  "Aatrox",
  "Viego",
  "Yone",
  "Lulu",
  "Soraka",
  "Sona",
  "Azir",
  "Malzahar",
];

const Flower = (props: any) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Details", { image: props.props });
      }}
    >
      <View style={null}>
        <Image style={styles.image} source={{ uri: props.props }} />
        <Text style={styles.dogName} testID='dogNames'>
          {" "}
          {
            DUMMY_DOG_NAMES[Math.floor(Math.random() * DUMMY_DOG_NAMES.length)]
          }{" "}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    borderWidth: 1,
    borderColor: "black",
    width: 200,
    margin: 10,
    height: 140,
    borderRadius: 10,
  },
  dogName: {
    padding: 5,
    margin: 5,
    backgroundColor: "white",
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default Flower;

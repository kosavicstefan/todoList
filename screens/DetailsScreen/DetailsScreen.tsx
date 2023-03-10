import * as React from "react";
import { View, Image } from "react-native";
import Title from "../../components/Title/Title";
import { INavigation } from "../../interface";

function DetailsScreen({ route }: INavigation) {

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFDAB9",
      }}
    >
      <Title content={"Dog details"} />
      <Image
        style={{
          width: 300,
          height: 300,
          margin: 10,
          borderRadius: 10,
          borderWidth: 1,
        }}
        source={{ uri: route.params.image }}
      />

    </View>
  );
}

export default DetailsScreen;

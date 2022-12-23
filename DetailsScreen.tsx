import * as React from "react";
import { View, Text, Button, Image } from "react-native";
import Title from "./accessories/Title";
import { INavigation } from "./interface";

interface IDetailsScreen {
  id: number;
  text: string;
}

function DetailsScreen({ navigation, route }: INavigation) {
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
      {/* <Button
      title='Go to home'
      onPress={()=>navigation.navigate('Home')}
      />
      <Button
      title='Go back'
      onPress={()=>navigation.goBack()}
      />
      <Button
      title='Go to first'
      onPress={()=>navigation.popToTop()}
      /> */}
    </View>
  );
}

export default DetailsScreen;

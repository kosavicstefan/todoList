import { View, Text } from 'react-native'
import React from 'react'
import CardDetails from '../CardDetails/CardDetails'
import { INavigation } from "../../interface";

const RestaurantsDetails = ({ route }: INavigation) => {
  const { item } = route.params;
  console.log(item)
  return (
    <View>
      <CardDetails
        title={item.attributes.Name}
        description={item.attributes.Description}
        image={'http://localhost:1337' + item.attributes.pictures.data[0].attributes.url}
      />
    </View>
  )
}

export default RestaurantsDetails
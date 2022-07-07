import { FlatList, View, TouchableOpacity, Text } from "react-native"
import React, { useEffect, useState } from "react"
import styles from "../styles/Home.styles.js"

function Message({navigation}, props) {

  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(props)}</Text>
    </View>
  )
}
export default Message

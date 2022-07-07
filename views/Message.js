import { FlatList, View, TouchableOpacity, Text } from "react-native"
import React, { useEffect, useState } from "react"
import styles from "../styles/Home.styles.js"
import card from "../styles/Card.styles"

function Message(props) {

  return (
    <View style={styles.container}>
      <View style={card.card}>
        <View style={card.cardHeader}>
            <Text style={styles.textName}>{props.route.params.name}</Text>
        </View>
        <View style={card.cardBody}>
            <Text style={{...styles.text, padding: 20}}>{props.route.params.text}</Text>
        </View>
        <View style={card.cardFooter}>
            <Text style={{...styles.text, textAlign: 'right'}}>{props.route.params.date}</Text>
        </View>
      </View>

    </View>
  )
}
export default Message

import { FlatList, View, TouchableOpacity, Text } from "react-native"
import React, { useEffect, useState } from "react"
import { getMessages } from "../services/api"
import styles from "../styles/Home.styles.js"
import Message from "../components/Message.js"

function Messages({navigation}) {
  const [data, setData] = useState([])
  async function getMessageList() {
    const data = await getMessages()
    setData(data)
  }
  useEffect(() => {
    getMessageList()
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Message', item)}>
              <Message data={item}  />
            </TouchableOpacity>
          </View>
          
        )}
      />
    </View>
  )
}
export default Messages

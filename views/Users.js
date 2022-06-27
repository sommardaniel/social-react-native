import { Text, FlatList, View, TouchableOpacity } from "react-native"
import React, { useEffect, useState } from "react"
import { getUsers } from "../services/api"
import styles from "../styles/User.styles.js"
import User from "../components/User.js"

function Users({navigation}) {
  const [data, setData] = useState([])
  async function getUserList() {
    const data = await getUsers()
    setData(data)
  }
  useEffect(() => {
    getUserList()
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('User', item)} >
              <User data={item}  />
            </TouchableOpacity>
          </View>
          
        )}
      />
    </View>
  )
}
export default Users

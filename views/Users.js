import { Text, FlatList, View } from "react-native"
import React, { useEffect, useState } from "react"
import { getUsers } from "../services/api"
import styles from "../styles/User.styles.js"
import User from "../components/User.js"

function Users() {
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
      <Text style={styles.title}>users</Text>

      <FlatList
        data={data}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <User data={item}/>
        )}
      />
    </View>
  )
}
export default Users

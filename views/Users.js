import { Text, FlatList, View } from "react-native"
import React, { useEffect, useState } from "react"
import { getUsers } from "../services/api"
import styles from "../styles/User.styles.js"

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
          <Text style={styles.text}>{JSON.stringify(item)}</Text>
        )}
      />
    </View>
  )
}
export default Users

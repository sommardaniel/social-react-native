import { FlatList, View, TouchableOpacity, Text } from "react-native"
import React, { useEffect, useState } from "react"
import { getPosts } from "../services/api"
import styles from "../styles/Home.styles.js"
import Post from "../components/Post.js"

function Home({navigation}) {
  const [data, setData] = useState([])
  async function getPostList() {
    const data = await getPosts()
    setData(data)
  }
  useEffect(() => {
    getPostList()
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity>
              <Post data={item}  />
            </TouchableOpacity>
          </View>
          
        )}
      />
    </View>
  )
}
export default Home

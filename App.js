import { StatusBar } from "expo-status-bar"
import { Text, View } from "react-native"
import Users from "./views/Users"
import styles from "./styles/App.styles"

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
      <Users />
      <StatusBar style="auto" />
    </View>
  )
}

import Users from "./views/Users"
import User from "./views/User"
import styles from "./styles/App.styles"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()
const header = {
  headerStyle: {
    backgroundColor: "#242526",
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
}

export default function App() {
  return (
      <NavigationContainer style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen name="Users" component={Users} options={header}/>
          <Stack.Screen name="User" component={User} options={header}/>
        </Stack.Navigator>
      </NavigationContainer>
  )
}

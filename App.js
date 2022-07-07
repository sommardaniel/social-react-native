import Users from "./views/Users"
import User from "./modals/User"
import Post from "./modals/Post"
import Home from "./views/Home"

import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { enableScreens } from 'react-native-screens';
import Ionicons from '@expo/vector-icons/Ionicons'
enableScreens();

const Stack = createNativeStackNavigator()
const HomeStack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
const header = {
  headerStyle: {
    backgroundColor: "#242526",
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerShown: false,
  contentStyle:{
    backgroundColor:'#242526'
  },
  tabBarStyle:{
    backgroundColor: "#242526",
    borderTopWidth: 0
  },
  tabBarItemStyle:{
    backgroundColor: "#242526",
  },
  tabBarActiveTintColor: '#ffc668',
  tabBarInactiveTintColor: 'gray',
  tabBarShowLabel: false 
}

function UsersStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="UsersStack" component={Users} options={header}/>
      <Stack.Group screenOptions={{ presentation: 'modal'}}>
        <Stack.Screen name="User" component={User} options={header}/>
      </Stack.Group>
    </Stack.Navigator>
  )
}

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeStack" component={Home} options={header}/>
      <HomeStack.Group screenOptions={{ presentation: 'modal'}}>
        <HomeStack.Screen name="Post" component={Post} options={header}/>
      </HomeStack.Group>
    </HomeStack.Navigator>
  )
}

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === 'Home') return <Ionicons name={ focused ? 'ios-home' : 'ios-home-outline'} size={size} color={color} />
              if (route.name === 'Users') return <Ionicons name={ focused ? 'ios-people' : 'ios-people-outline'} size={size} color={color} />
            }
          })}>
          <Tab.Screen name="Home" component={HomeStackNavigator} options={header}/>
          <Tab.Screen name="Users" component={UsersStack} options={header}/>
        </Tab.Navigator>
      </NavigationContainer>
  )
}

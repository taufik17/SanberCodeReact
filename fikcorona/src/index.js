import  React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from './pages/home';
import Login from './pages/login';
import About from './pages/about';


const StackRoot = createStackNavigator();
const RootStackScreen = () => (
  <StackRoot.Navigator initialRouteName="Login" headerMode="none" >
    <StackRoot.Screen name="Login" component={Login} />
    <StackRoot.Screen name="Home" component={Home} />
    <StackRoot.Screen name="Drawer" component={DrawerScreen} />
  </StackRoot.Navigator>
);

const Drawer = createDrawerNavigator();
const DrawerScreen = () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen name="About" component={About} />
  </Drawer.Navigator>
);

export default () => (
  <NavigationContainer>
   <RootStackScreen/>
  </NavigationContainer>
)


import  React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AboutScreen from './AboutScreen';
import LoginScreen from './LoginScreen';
import SkillScreen from './SkillScreen';
import ProjectScreen from './ProjectScreen';
import AddScreen from './AddScreen';


const StackRoot = createStackNavigator();
const RootStackScreen = () => (
  <StackRoot.Navigator headerMode="none" initialRouteName='Login'>
      <StackRoot.Screen name="Login" component={LoginScreen} />
      <StackRoot.Screen name="Drawer" component={DrawerScreen} />
  </StackRoot.Navigator>
);

const Drawer = createDrawerNavigator();
const DrawerScreen = () => (
  <Drawer.Navigator initialRouteName="About">
    <Drawer.Screen name="About" component={AboutScreen} />
    <Drawer.Screen name="TabsScreen" component={TabsScreen} />
  </Drawer.Navigator>
);

const Tabs = createBottomTabNavigator();
const TabsScreen = () => (
  <Tabs.Navigator initialRouteName="SkillScreen">
    <Tabs.Screen name="SkillScreen" component={SkillScreen} />
    <Tabs.Screen name="ProjectScreen" component={ProjectScreen} />
    <Tabs.Screen name="AddScreen" component={AddScreen} />
  </Tabs.Navigator>
);



export default () => (
  <NavigationContainer>
   <RootStackScreen/>
  </NavigationContainer>
)

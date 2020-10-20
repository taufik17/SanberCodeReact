import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Component from './Latihan/Component/Component';
import YoutubeUI from './Tugas/Tugas12/App';
import LoginUI from './Tugas/Tugas13/LoginScreen';
import Tes from './Latihan/StylingFlexbox/Index';
import About from './Tugas/Tugas13/AboutScreen';
import TodoApps from './Tugas/Tugas14/App';
import Skill from './Tugas/Tugas14/SkillScreen';
import Navigation from './Latihan/Navigation/index';
import Tugas15 from './Tugas/Tugas15/index';
import Tugas15Navigation from './Tugas/TugasNavigation/index';
import Testing from './Tugas/TugasNavigation/SkillScreen';
import Quiz3 from './Quiz3/index';
import ApiTes from './Latihan/Api/index';

export default function App() {
  return (
    // <Component />
    // <YoutubeUI />
    // <Tes />
    // <LoginUI />
    // <About />
    // <TodoApps />
    // <Skill />
    // <Navigation />
    // <Tugas15 />
    // <Tugas15Navigation />
    // <Quiz3 />
    <ApiTes />

    // <View style={styles.container}>
    //   <Text>Taufik agung santoso</Text>
    //   <Text>Institut Teknologi Sumatera</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

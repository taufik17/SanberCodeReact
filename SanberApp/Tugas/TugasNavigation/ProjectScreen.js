import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class App extends Component {
  
  render() {
    return ( 
        <View style={styles.container}>
            <Text style={{textAlign:"center"}}>Halaman Proyek</Text>
        </View>        
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent:"center",
        justifyContent :"center"
      }
});



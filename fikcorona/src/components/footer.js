import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native';



export default class footer extends Component {
    render() {
        return (
            <View style={styles.footerContainer}>
                <Text>Fik's Dev</Text>
            </View>
        )
    }
}
const {width : WIDTH} = Dimensions.get('window')
const styles = StyleSheet.create({
    
    footerContainer: {
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
        padding: 10,
        width: WIDTH,
    },
});

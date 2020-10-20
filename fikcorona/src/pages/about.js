import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, Image, View, Dimensions, Linking} from 'react-native';

// import component
import Navbar from '../components/navbar';
import Footer from '../components/footer'; 

const WIDTH = Dimensions.get('window').width

export default class about extends Component  {

    render(){
        return (
            <View style={styles.container}>
               <Navbar navAction={()=>this.props.navigation.toggleDrawer()} />
                <ScrollView vertical>
                    <View style={styles.contentContainer}>
                        <View style={styles.about}>
                            <Text style={styles.textTentangApp}>Aplikasi ini adalah aplikasi yang dibangung untuk memenuhi syarat kelulusan final project Sanber Code React Native beginner</Text>
                            <Text style={styles.textTentangApp}>Platform ini berisi tentang informasi data coronavirus di Indonesia dan dunia</Text>
                            <Text style={[styles.textTentangApp,{fontWeight:'bold', paddingBottom:2}]}>Pembuat</Text>
                            <View style={styles.rowMargin}>
                               
                               <Image
                                    style={styles.fotoprofil}
                                    source = {require("../../images/fotoprofil.jpg")}
                                />
                                <View style={styles.columnMargin}>
                                    <Text style={styles.textPembuat}>Taufik Agung Santoso</Text>
                                    <Text style={styles.textGitlab}>@taufikitera</Text>
                                </View>
                            </View>
                            <Text style={{ padding: 20,color: "#003366", fontSize:14}}>Sumber Web/API : <Text style={{padding: 20,color: "#003366", fontSize:14}} onPress={ ()=>{ Linking.openURL('https://thevirustracker.com/api')}}>thevirustracker.com</Text> </Text>
                        </View>
                    </View>
                    <Footer/>
                </ScrollView>
            </View>
          );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F1F1F9',
    },
    contentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    about:{
        elevation: 3,
        backgroundColor: '#F0F9F8',
        width: WIDTH - 50,
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 15,
    },
    rowMargin:{
        flexDirection: 'row',
        margin:5,
        paddingLeft: 10,
       
    },
    columnMargin: {
        flexDirection: 'column',
        alignSelf: "center",
    },
    textPembuat:{
        fontSize: 20,
        textAlign:"left",
        color: "#003366"
    },
    headerImageContent: {
        marginTop: 25,
        width: 190,
        height: 50,
        alignSelf: "center",
       
    },
    textTentangApp:{
        fontSize: 20,
        padding: 20,
        color: "#003366"
    },

    fotoprofil: {
        width: 50,
        borderRadius: 50,
        height: 50,
    },

    textGitlab: {
        fontSize: 15,
        fontWeight: 'bold'
    }

});

import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, FlatList,Dimensions, Image, View, TouchableOpacity} from 'react-native';
import Axios from 'axios';
import { connect } from 'react-redux'
import Navbar from '../components/navbar';
import Footer from '../components/footer'; 
import storeCredential,{actionCreators}  from '../reducer/credentialRedux';
import { PacmanIndicator } from 'react-native-indicators';

const mapStateToProps = (state) => ({
    dataGlobalPositif: state.dataGlobalPositif,
    dataIndonesia: state.dataIndonesia,
    isLoading: state.isLoading,
    isError: state.isError,
})

class home extends Component  {
    // Mount Fungsi Get
    componentDidMount() {
        storeCredential.dispatch(actionCreators.isLoading(true));
        storeCredential.dispatch(actionCreators.isError(false));
        this.getGlobalPositif();
        this.getIndonesia();
    }

    getGlobalPositif = async () => {
        try {
            const response = await Axios.get(`https://thevirustracker.com/free-api?global=stats`)
            storeCredential.dispatch(actionCreators.dataGlobalPositif(response.data.results));
            storeCredential.dispatch(actionCreators.isError(false));
            storeCredential.dispatch(actionCreators.isLoading(false));
        } 
        catch (error) {
            storeCredential.dispatch(actionCreators.isError(true));
            storeCredential.dispatch(actionCreators.isLoading(false));
        }
    }

    getIndonesia = async () => {
        try {
            const response = await Axios.get(`https://api.thevirustracker.com/free-api?countryTotal=ID`)
            storeCredential.dispatch(actionCreators.dataIndonesia(response.data.countrydata));
            storeCredential.dispatch(actionCreators.isError(false));
            storeCredential.dispatch(actionCreators.isLoading(false));
        } 
        catch (error) {
            storeCredential.dispatch(actionCreators.isError(true));
            storeCredential.dispatch(actionCreators.isLoading(false));
        }
    }
    
  
    render(){
        //  If load data
        if (this.props.isLoading) {
            return (
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }} >
                <PacmanIndicator size={80} color='#0061FF' />
            </View>
            )
        }
        // If data not fetch
        else if (this.props.isError) {
            return (
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }} >
                <Text>Terjadi Error Saat Memuat Data</Text>
            </View>
            )
        }
      
        // If data finish load
        return (
            <View style={styles.container}>
                <Navbar navAction={()=>this.props.navigation.toggleDrawer()} />

                <ScrollView 
                vertical
                showsVerticalScrollIndicator={false}>
                    <View style={styles.headerContainer}>
                        <View style={styles.rowMargin}>     
                            <Text style={styles.textHeader}>Fik's Corona</Text>
                            <Text >Coronavirus Global & Indonesia Live Data</Text>
                                <ScrollView 
                                showsHorizontalScrollIndicator={false}
                                vertical 
                                style={{marginBottom:40}} >

                                    <FlatList
                                        data={this.props.dataGlobalPositif}
                                        renderItem={({ item }) =>
                                        <View style={styles.viewList}>
                                            <View style={styles.itemContainerPositif}>
                                                <View>
                                                    <Text style={styles.textTotal}>TOTAL KASUS ( Dunia ) </Text>
                                                    <Text style={styles.textNilaiTotal}>{item.total_cases}</Text>
                                                    <Text style={styles.textTotal}>ORANG</Text>
                                                </View>
                                                <Image
                                                style={styles.confEmoticon}
                                                    source = {require("../../images/sad.png")}
                                                />
                                            </View>

                                            <View style={styles.itemContainerSembuh}>
                                                <View>
                                                    <Text style={styles.textTotal}>TOTAL SEMBUH ( Dunia )</Text>
                                                    <Text style={styles.textNilaiTotal}>{item.total_recovered}</Text>
                                                    <Text style={styles.textTotal}>ORANG</Text>
                                                </View>
                                                <Image
                                                    style={styles.confEmoticon}
                                                    source = {require("../../images/happy.png")}
                                                />
                                            </View>

                                            <View style={styles.itemContainerMeninggal}>
                                                <View>
                                                    <Text style={styles.textTotal}>TOTAL MENINGGAL ( Dunia )</Text>
                                                    <Text style={styles.textNilaiTotal}>{item.total_deaths}</Text>
                                                    <Text style={styles.textTotal}>ORANG</Text>
                                                </View>
                                                <Image
                                                    style={styles.confEmoticon}
                                                    source = {require("../../images/death.png")}
                                                />
                                            </View>

                                        </View>
                                        }
                                        keyExtractor={({ id }, index) => index}
                                    />


                                    <FlatList
                                        data={this.props.dataIndonesia}
                                        renderItem={({ item }) =>
                                        <View style={styles.viewList}>

                                    <View style={styles.itemContainerIndo}>
                                        <View>
                                            <Text style={styles.textNilaiTotal}>INDONESIA</Text>
                                            <Text style={styles.textTotal}>{item.total_cases} POSITIF, {item.total_recovered}</Text>
                                            <Text style={styles.textTotal}>SEMBUH {item.total_deaths} MENINGGAL</Text>
                                        </View>
                                        <View style={{flexDirection:'column', alignContent: 'center', alignItems: 'center'}}>
                                        <Image
                                            style={styles.confEmoticon}
                                                source = {require("../../images/indonesia.png")}
                                            />
                                        </View>
                                    </View>

                                        </View>
                                        }
                                        keyExtractor={({ id }, index) => index}
                                    />

                                </ScrollView>
                        </View>
                    </View>
                    
                    <Footer/>
                </ScrollView>

            </View>
          );
    }
}

export default connect(mapStateToProps)(home)
const WIDTH = Dimensions.get('window').width
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1F1F9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1, 
        padding: 20
    },
    aboutContainer: {
        alignItems: 'center',
        backgroundColor: '#F0F9F8',
        justifyContent: 'center',
        padding: 20,
        marginTop: 40
    },
    contentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    rowMargin:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
   
    iconCategory: {
        width: 150,
        height: 150,
        borderRadius: 10,
        margin: 10,
    },
    textHeader:{ 
        fontSize: 26, 
        color: "black",
        textAlign:'center',
        alignContent: 'center',
        fontWeight:'bold'
    },
    headerImageContent: {
        width: '100%',
        height: 186,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        },

    itemContainerPositif: {
        width: "100%",
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        backgroundColor: '#F82649',
        borderRadius : 10,
        shadowColor: "#F82649",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.9,
        shadowRadius: 10,

        elevation: 10,
      },

      itemContainerSembuh: {
        width: "100%",
        padding:20,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#09AD95',
        borderRadius : 10,
        shadowColor: "#09AD95",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.9,
        shadowRadius: 10,

        elevation: 10,
      },

      itemContainerMeninggal: {
        width: "100%",
        padding:20,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#D43F8D',
        borderRadius : 10,
        shadowColor: "#D43F8D",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.9,
        shadowRadius: 10,

        elevation: 10,
      },

      itemContainerIndo: {
        width: "100%",
        padding:20,
        marginBottom: 20,
        flexDirection: 'row',
        backgroundColor: '#FC7303',
        justifyContent: 'space-between',
        borderRadius : 10,
        shadowColor: "#FC7303",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.9,
        shadowRadius: 10,

        elevation: 10,
      },

      textTotal: {
          color: 'white'
      },

      textNilaiTotal: {
          color: 'white',
          fontWeight: 'bold',
          fontSize: 20
      },

      confEmoticon: {
          width: 50,
          height: 50
      },

      tombolDetail: {
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 10,
          paddingBottom: 10,
          marginTop: 10,
          borderRadius: 10,
          backgroundColor: '#F1F1F9' 
      },

      textDetail: {
          fontWeight: 'bold',
      }
});
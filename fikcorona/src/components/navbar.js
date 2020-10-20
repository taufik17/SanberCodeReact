import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    userName: state.userName,
    isLoggedIn: state.isLoggedIn,
    isError: state.isError,
})


class navbar extends Component {
    profileHandler() {
       alert("Selamat Datang "+this.props.userName+", Anda berhasil login")
          }

    render() {
        return ( 
            <View style={styles.navbarContainer}>
                <View style={[styles.columnMargin,{flexDirection:'row'}]}>
                        <TouchableOpacity style={{justifyContent:"center"}} onPress={this.props.navAction}>
                            <Icon style={{fontSize:30, color:"#0061FF"}} name={this.props.isChildPage? "arrow-left": "menu"}></Icon>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.columnMargin}>
                        <TouchableOpacity onPress={() => this.profileHandler()}>
                            <Icon style={{fontSize:28, color:"#0061FF"}} name="account"></Icon>
                        </TouchableOpacity>
                    </View>       
            </View>
        )
    }
}
export default connect(mapStateToProps)(navbar)
const WIDTH = Dimensions.get('window').width
const styles = StyleSheet.create({
   
    navbarContainer: { 
        backgroundColor: 'white',
        width: WIDTH,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },  
    columnMargin: {
        padding: 10,
        flexDirection: 'column',
        justifyContent:"center"
    },
    logoNavbar: {
        width: 50,
        height: 50,
        borderRadius: 10,
        marginTop: 5,
        alignItems: 'flex-start',
    },
});

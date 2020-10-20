import React, { Component } from 'react';
import { connect } from 'react-redux'
import { TextInput, StyleSheet, Text, Image, Button, View, Dimensions, TouchableOpacity} from 'react-native';
import storeCredential,{actionCreators}  from '../reducer/credentialRedux';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const mapStateToProps = (state) => ({
    userName: state.userName,
    isLoggedIn: state.isLoggedIn,
    isError: state.isError,
})

class login extends Component  {
    constructor(props) {
        super(props)
        this.state = {
          userName: '',
          password: '',
        }
      }
    loginHandler() {
    if( this.state.password=='12345678'){
          storeCredential.dispatch(actionCreators.isError(false));
          storeCredential.dispatch(actionCreators.userName(this.state.userName));
          storeCredential.dispatch(actionCreators.isLoggedIn(true));
          this.props.navigation.navigate('Drawer')
        }else{
          storeCredential.dispatch(actionCreators.isError(true));
        }
      }
      
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                <View>
                    <Text style={styles.titleText}>SanberCode</Text>
                    <Text style={styles.subTitleText}>Final Project</Text>
                    <Text style={styles.subTitleText}>Kawal Corona</Text>
                </View>

                <View style={styles.formContainer}>
                    <View style={styles.inputContainer}>
                        <MaterialCommunityIcons name='account-circle' color='blue' size={40} />
                        <View>
                        <Text style={styles.labelText}>Username/Email</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder='Masukkan Nama User/Email'
                            onChangeText={userName => this.setState({ userName })}
                        />
                        </View>
                    </View>

                    <View style={styles.inputContainer}>
                        <MaterialCommunityIcons name='lock' color='blue' size={40} />
                        <View>
                        <Text style={styles.labelText}>Password</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder='Masukkan Password'
                            onChangeText={password => this.setState({ password })}
                            secureTextEntry={true}
                        />
                        </View>
                    </View>
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={this.props.isError ? styles.errorText : styles.hiddenErrorText}>Password Salah</Text>
                        <TouchableOpacity style={styles.buttonMasuk} onPress={() => this.loginHandler()}>
                                    <Text style={styles.textButton}>Masuk</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>

                </View>         
            </View>
          );
    }
}

export default connect(mapStateToProps)(login)

const WIDTH =Dimensions.get('window').width
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'blue',
    textAlign: 'center',
  },
  subTitleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
    alignSelf: 'flex-end',
    marginBottom: 16
  },
  formContainer: {
    justifyContent: 'center'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 16
  },
  labelText: {
    fontWeight: 'bold'
  },
  textInput: {
    width: 300,
    backgroundColor: 'white'
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 16,
  },
  hiddenErrorText: {
    color: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
  },
  buttonMasuk: {
    alignItems: "center",
    backgroundColor: "#002D76",
    padding: 10,
    borderRadius:15,
    width: 100,
    justifyContent: 'center',
   
},
errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 16,
  },
hiddenErrorText: {
    color: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
  },
  textButton: {
      color: 'white',
      alignItems: 'center'
  }
});
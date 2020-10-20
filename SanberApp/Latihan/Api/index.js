import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Image, ActivityIndicator } from 'react-native';
import Axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isLoading: true,
      isError: false
    };
  }

  // Mount User Method
  componentDidMount() {
    this.getGithubUser()
  }

  //   Get Api Users
  getGithubUser = async () => {
    try {
      const response = await Axios.get('https://api.github.com/users?since=135')
      this.setState({ isError: false, isLoading: false, data: response.data })
    } catch (error) {
      this.setState({ isLoading: false, isError: true })
    }
  }

  render() {
    //  If load data
    if (this.state.isLoading) {
      return (
        <View
          style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}
        >
          <ActivityIndicator size='large' color='red' />
        </View>
      )
    }
    // If data not fetch
    else if (this.state.isError) {
      return (
        <View
          style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}
        >
          <Text>Terjadi Error Saat Memuat Data</Text>
        </View>
      )
    }
    // If data finish load
    return (
      <FlatList
        data={this.state.data}
        renderItem={({ item }) =>
          <View style={styles.viewList}>
            <View>
              <Image source={{ uri: `${item.avatar_url}` }} style={styles.Image} />
            </View>
            <View>
              <Text style={styles.textItemLogin}> {item.login}</Text>
              <Text style={styles.textItemUrl}> {item.html_url}</Text>

            </View>
          </View>
        }
        keyExtractor={({ id }, index) => index}
      />
    );
  }
}

const styles = StyleSheet.create({
  viewList: {
    height: 100,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#DDD',
    alignItems: 'center'
  },
  Image: {
    width: 88,
    height: 80,
    borderRadius: 40
  },
  textItemLogin: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
    marginLeft: 20,
    fontSize: 16
  },
  textItemUrl: {
    fontWeight: 'bold',
    marginLeft: 20,
    fontSize: 12,
    marginTop: 10,
    color: 'blue'
  }
})
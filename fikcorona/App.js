import * as React from 'react';
import {StyleSheet, StatusBar } from 'react-native';
import Index from './src/index';
import { Provider } from 'react-redux';
import storeCredential  from './src/reducer/credentialRedux'
export default function App() {
  return (
    <Provider store={storeCredential}>
      <StatusBar/>
      <Index/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

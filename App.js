/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import AppNavigator from './Navigator';
import { Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import store from './redux/store';


// construir nuestro theme

const myTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ef5a5a',
  }

}

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <PaperProvider theme={myTheme}>
        <StoreProvider store={store}>
          <AppNavigator />
        </StoreProvider>
      </PaperProvider>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

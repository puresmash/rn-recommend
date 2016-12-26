/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import AppNavigator from './components/AppNavigator.js';

export default class Recommend extends Component {
  render() {
    return (
      <AppNavigator/>
    );
  }
}

AppRegistry.registerComponent('Recommend', () => Recommend);

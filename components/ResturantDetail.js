import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

export default class ResturantDetail extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const { choice } = this.props;
    console.log(choice);
    return (
      <View style={styles.container}>
        <View style={styles.cards}>
          <Text style={styles.text}>{choice}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64,
  },
  cards: {
    backgroundColor: '#EEEEEE',
    margin: 8,
    borderWidth: 1,
    borderRadius: 2,
    flex: 1,
    maxHeight: 350,
    overflow: 'hidden',
  },
  text: {
    flex: 1,
  },
});

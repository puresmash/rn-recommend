import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
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
          <View style={styles.cardHeader}>
            <Text style={styles.headerText}>{choice}</Text>
          </View>
          <View style={styles.cardContent}>
            <Text>
              This is the content about this resturant.{"\n"}
              This is the second line.{"\n"}
              This is the third line.{"\n"}
            </Text>
          </View>
          <View style={styles.cardFooter}>
            <Button title="button"></Button>
            <Button title="button"></Button>
          </View>

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
    flex: 1,
    backgroundColor: '#EEEEEE',
    margin: 8,
    borderWidth: 1,
    borderRadius: 2,
    maxHeight: 250,
    overflow: 'hidden',
  },
  cardHeader: {
    flex: 2,
    paddingTop: 24,
    paddingLeft: 16,
    paddingRight: 16,
  },
  headerText: {
    // flex: 1,
    fontSize: 24,
  },
  cardContent: {
    flex: 3,
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    fontSize: 14,
  },
  cardFooter: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 16,
    paddingBottom: 24,
    paddingLeft: 8,
    paddingRight: 8,
    fontSize: 14,
  },
});

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import NavigatorHelper from '../utils/NavigatorHelper.js';

export default class RestaurantEdit extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.subheader}>
          <Text style={styles.subheaderText}>Name</Text>
        </View>
        <View style={styles.row}>
          <TextInput
            style={styles.textInput}
            editable={true}
            maxLength= {16}
          />
        </View>
        <View style={styles.subheader}>
          <Text style={styles.subheaderText}>Description</Text>
        </View>
        <View style={[styles.row, {height: 96}]}>
          <TextInput
            style={styles.textInput}
            editable={true}
            multiline={true}
          />
        </View>
      </View>

    );
  }
}
const rowHeight = 48;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64,
    backgroundColor: '#DDDDDD',
  },
  row: {
    padding: 8,
    // paddingBottom: 8,
    // marginLeft: 8,
    // marginRight: 8,
    height: rowHeight,
    flexDirection: 'row',
    borderColor: '#CCCCCC',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    // borderWidth: 1,
    backgroundColor: '#FFFFFF',
  },
  devider: {
    height: 24,
    backgroundColor: '#DDDDDD',
  },
  subheader: {
    paddingTop: 24,
    paddingLeft: 8,
    paddingBottom: 8,
    height: rowHeight,
    backgroundColor: '#DDDDDD',
    justifyContent: 'flex-end',
  },
  subheaderText: {
    flex: 1,
    // opacity: 0.54,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    textAlign: 'left',
    // width: 50,
    // height: 16,
  },
});

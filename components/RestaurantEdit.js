import React, { Component, PropTypes } from 'react';
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
import NavigatorHelper from '@utils/NavigatorHelper.js';

// dispatch
import Actions from '@actions';
import {connect} from 'react-redux';

class RestaurantEdit extends Component{

  static propTypes = {
      rid: PropTypes.string.isRequired
  };

  constructor(props){
    super(props);
    // this.state = {
    //   editName =
    // }
  }
  render(){
    const {dispatch, rid, restaurantMap} = this.props;

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
            onChange={(event)=>{
              let name = event.nativeEvent.text;
              dispatch(Actions.UpdRestaurantName(rid, name));
            }}
            value={restaurantMap.get(rid).name}
            placeholder={"Insert Restaurant Name"}
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
            value={restaurantMap.get(rid).description}
            onChange={(event)=>{
              let desc = event.nativeEvent.text;
              dispatch(Actions.UpdRestaurantDesc(rid, desc));
            }}
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

function mapStateToProps(state){
  const { restaurantMap } = state.restaurant;
  console.log(state);
  return {
    restaurantMap
  };
}

// function mapDispatchToProps(dispatch){
//
// }

export default connect(mapStateToProps)(RestaurantEdit);

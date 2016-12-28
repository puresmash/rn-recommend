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
import NavigatorHelper from '@utils/NavigatorHelper.js'
import RestaurantCard from './RestaurantCard.js'

import {connect} from 'react-redux';

class RestaurantDetail extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const { choice, restaurantMap } = this.props;
    const cardList = this.getList(restaurantMap, choice);
    return (
      <View style={styles.container}>
        {cardList}
      </View>
    );
  }
  getList = (map, choice)=>{
    const kind = choice.substr(0,1).toLowerCase();
    let ary = [];

    map.forEach((value, key)=>{
      if(key.substr(0,1) !== kind)
        return;
      ary.push(<RestaurantCard
          rid={key}
          key={key}
          name={value.name}
          description={value.description}
        />
      );
    });
    return ary;
  }
}

function mapStateToProps(state){
  const { restaurantMap } = state.restaurant;
  return {
    restaurantMap
  };
}

export default connect(mapStateToProps)(RestaurantDetail);
//
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64,
  },
});


import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

import RestaurantItem from './RestaurantItem.js';

export default class RestaurantList extends Component{

  // static propTypes = {
  //   navigator: PropTypes.object.isRequired,
  // };
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['Burger','Noodles','Rice'])
    }
    const map = new Map();
    map.set('Burger', require('@images/burger.png'));
    map.set('Noodles', require('@images/noodles.jpg'));
    map.set('Rice', require('@images/rice.jpg'));
    this.imageMap = map;
  }
  render(){
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
        style={styles.restaurantList}
        // {...this.props}
        />
      // Press Cmd+R to reload,{'\n'}
      // Cmd+D or shake for dev menu
      // <Text>test</Text>
    );
  }
  _renderRow = (rowData)=>{
    console.log(rowData);
    return(
      <RestaurantItem
        image={this.imageMap.get(rowData)}
        title={rowData}
      />
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
  restaurantList: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#AAAAAA',
    marginTop: 64,
  }
});

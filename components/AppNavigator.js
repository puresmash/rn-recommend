import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Navigator,
  TouchableHighlight
} from 'react-native'
import RestaurantList from './RestaurantList.js'
import RestaurantDetail from './RestaurantDetail.js'
import RestaurantEdit from './RestaurantEdit.js'
import NavigatorHelper from '../utils/NavigatorHelper.js'

export default class AppNavigator extends Component{

  constructor() {
    super()
    this._renderScene = this._renderScene.bind(this)
  }

  render() {
    const routes = [
      {key: 'RestaurantList', title: 'RestaurantList', index: 0}
    ];
    return <Navigator
      initialRoute={routes[0]}
      initialRouteStack={routes}
      renderScene={this._renderScene}
      navigationBar={
        <Navigator.NavigationBar
          routeMapper={{
            LeftButton: (route, navigator, index, navState) => {
              if (route.index === 0) {
                return null;
              } else {
                return (
                  <TouchableHighlight onPress={() => navigator.pop()} style={[styles.header, styles.headerButton]}>
                    <Text style={styles.buttonText}>Back</Text>
                  </TouchableHighlight>
                );
              }
            },
            RightButton: (route, navigator, index, navState) => {
              if (route.index === 0) {
                return null;
              } else {
                return (
                  <TouchableHighlight onPress={() => navigator.pop()} style={[styles.header, styles.headerButton]}>
                    <Text style={styles.buttonText}>Done</Text>
                  </TouchableHighlight>
                );
              }
            },
            Title: (route, navigator, index, navState) => {
              return (
                <View style={styles.header}>
                  <Text style={styles.headerText}>{route.title}</Text>
                </View>
              );
            },
          }}
          style={{ backgroundColor: 'orange' }}
        />
      }
    />
  }

  _renderScene(route, navigator) {

    NavigatorHelper.setNav(navigator);


    // let navProps = {
    //   routeState : route,
    //   navigator : navigator
    // }
    let component = null

    switch(route.key) {
      case 'RestaurantList' :
        return (
          <RestaurantList />
        );
      break

      case 'RestaurantDetail' :
        return(
          <RestaurantDetail choice={route.choice}/>
        );
      break

      case 'RestaurantEdit' :
        return(
          <RestaurantEdit choice={route.choice}/>
        );
      break
    }

    // return component ? React.createElement(component, navProps) : null
  }

}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'center',
  },
  headerText: {

  },
  headerButton: {
    marginLeft: 8,
    marginRight: 8,

  },
  buttonText: {
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 4,
    paddingBottom: 4,
    borderWidth: 1,
  }
});

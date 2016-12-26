
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import NavigatorHelper from '../utils/NavigatorHelper.js'

export default class RestaurantItem extends Component{
  constructor(props){
    super(props);
    // console.log(typeof NavigatorHelper.getNav().pop);
  }
  render(){
    let {title, image} = this.props;
    return(

      // <Image
      //   source={require('../burger.png')}
      //   resizeMode='contain'
      //   style={{height: null, width: null, flex: 1}}
      // >
      <TouchableHighlight onPress={()=>{
        console.log('123');
        NavigatorHelper.push({
          key: 'RestaurantDetail',
          title: 'RestaurantDetail',
          choice: title,
          index: 1
        })
      }}>
        <View style={[styles.divider, styles.container]}>
          <Image
            source={image}
            resizeMode='cover'
            style={{height: null, width: null, flex: 1, flexDirection: 'row'}}
          >
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.arrowContainer}>
              <Text style={styles.arrow}>{'>'}</Text>
            </View>
          </Image>
        </View>
      </TouchableHighlight>

    );
  }
}

const styles = StyleSheet.create({
  divider: {
    borderBottomWidth: 8,
    borderBottomColor: '#EEEEEE',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  titleContainer: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'stretch',

    // paddingLeft: 16,
    // paddingTop: 32,
    // paddingBottom: 32,
    // fontSize: 24,
  },
  title: {
    // flex: 5,
    paddingLeft: 16,
    paddingTop: 32,
    paddingBottom: 32,
    backgroundColor: 'transparent',
    fontSize: 24,
  },
  arrowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'orange',
    opacity: 0.3,
  },
  arrow: {
    textAlign: 'right',
    fontSize: 24,
    // flex: 3,
    // justifyContent: 'flex-end',
    // alignItems: 'flex-end',
    // alignSelf: 'flex-end'

  }
});

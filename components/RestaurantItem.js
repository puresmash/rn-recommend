
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import NavigatorHelper from '../utils/NavigatorHelper.js'
import Constants from '../constants'
const {Colors} = Constants;

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
            style={{height: null, width: null, flex: 1, flexDirection: 'row', backgroundColor: 'black'}}
          >
            <View style={styles.overlay}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
              </View>
              <View style={styles.arrowContainer}>
              <Icon name="ios-arrow-forward"
                color={Colors.light0}
                size={24}/>
              </View>
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
    // opacity: 0.5,
  },
  overlay: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.5)',
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
    marginTop: 32,
    marginBottom: 32,
    backgroundColor: 'transparent',
    // backgroundColor: 'rgba(255,255,255,0.5)',
    fontSize: 24,
  },
  arrowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  arrow: {
    textAlign: 'right',
    fontSize: 24,
  }
});


import ActionTypes from '../constants/ActionTypes.js';

export default function restaurantReducer(state={}, action){
  switch (action.type) {
    //
    case ActionTypes.UPD_RESTAURANT: {
      let {restaurantMap} = state;

      restaurantMap = new Map(restaurantMap);
      restaurantMap.set(action.rid, action.profile)

      return Object.assign({}, state, {restaurantMap});
    }
    //
    case ActionTypes.UPD_RESTAURANT_NAME: {
      let {restaurantMap} = state;

      restaurantMap = new Map(restaurantMap);
      let r = restaurantMap.get(action.rid);
      r.name = action.name;

      return Object.assign({}, state, {restaurantMap});
    }
    //
    case ActionTypes.UPD_RESTAURANT_DESC: {
      let {restaurantMap} = state;

      restaurantMap = new Map(restaurantMap);
      let r = restaurantMap.get(action.rid);
      r.description = action.description;

      return Object.assign({}, state, {restaurantMap});
    }
    //
    case ActionTypes.LOAD_RESTAURANT:{
      const restaurantMap = new Map(action.restaurantAry);
      console.log('load restaurant');
      console.log(restaurantMap);
      return Object.assign({}, state, {restaurantMap});
    }
    default:
      return state;
  }
}

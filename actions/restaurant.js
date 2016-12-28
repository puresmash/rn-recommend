
import ActionTypes from '../constants/ActionTypes';

export const UpdRestaurant = (rid, name, description) => {
  return {
    type: ActionTypes.UPD_RESTAURANT,
    rid,
    profile: {
      name,
      description,
    }
  }
}
export const UpdRestaurantName = (rid, name) => {
  return {
    type: ActionTypes.UPD_RESTAURANT_NAME,
    rid,
    name,
  }
}
export const UpdRestaurantDesc = (rid, description) => {
  return {
    type: ActionTypes.UPD_RESTAURANT_DESC,
    rid,
    description,
  }
}

export const LoadRestaurant = (json) =>{
  let ary = [];
  ary = ary.concat(json['Burger']);
  ary = ary.concat(json['Noodles']);
  ary = ary.concat(json['Rice']);
  ary = ary.map((ele)=>{
    let key = ele.id;
    let obj = ele;
    return [key, obj];
  })
  // console.log(ary);
  // let map = new Map(ary);
  // console.log(map);
  return {
    type: ActionTypes.LOAD_RESTAURANT,
    restaurantAry: ary,
  }
}

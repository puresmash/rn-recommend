
export default class NavigatorHelper{

  static setNav = (navigator)=>{
    NavigatorHelper.instance = new NavigatorHelper(navigator);
  };

  static push = (route)=>{
    if(!NavigatorHelper.instance || !NavigatorHelper.instance.navigator){
      console.error('Should setNav before using helper');
      return null;
    }
    return NavigatorHelper.instance.navigator.push(route);
  };

  constructor(navigator){
    this.navigator = navigator;
  }
}

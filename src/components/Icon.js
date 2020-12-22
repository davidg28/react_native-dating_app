import React from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome"
import AntDesignIcon from "react-native-vector-icons/AntDesign"
import EntypoIcon from "react-native-vector-icons/Entypo"
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons"
const Icon = ({ name, size }) => {
  // const iconsList = {
  //   heart: '&#xe800;',
  //   star: '&#xe801;',
  //   like: '&#xe800;',
  //   dislike: '&#xe802;',
  //   flash: '&#xe803;',
  //   marker: '&#xf031;',
  //   filter: '&#xf0b0;',
  //   user: '&#xf061;',
  //   circle: '&#xf039;',
  //   hashtag: '&#xf029;',
  //   calendar: '&#xf4c5;',
  //   chevronLeft: '&#xf004;',
  //   optionsV: '&#xf142;',
  //   optionsH: '&#xf141;',
  //   chat: '&#xf4ac;',
  //   explore: '&#xf50d;'
  // };
  const iconsList = {
    heart: 'heart',
    star: 'star',
    like: 'heart',
    dislike: 'close',
    flash: 'flash',
    marker: 'map-marker',
    filter: 'filter',
    user: 'user',
    circle: 'circle-o',
    hashtag: 'hashtag',
    calendar: 'calendar',
    chevronLeft: 'chevron-left',
    optionsV: 'dots-three-vertical',
    optionsH: 'dots-three-horizontal',
    chat: 'wechat',
    explore: 'search',
    wrench: "wrench"
  };

  let icon = iconsList[name];
  // icon = icon.substr(3);
  // icon = String.fromCharCode(parseInt(icon, 16));

  // return icon;
  if (name == 'dislike')
    return (<AntDesignIcon name={icon} size={size} />)
  else if (name == "optionsV" || name == "optionsH")
    return (<EntypoIcon name={icon} size={size} />)
  else
    return (<FontAwesomeIcon name={icon} size={size} />)
};

export default Icon;

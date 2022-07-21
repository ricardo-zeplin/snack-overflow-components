import React from 'react';
import {Image, StyleSheet} from 'react-native';

export type Icons =
  | 'add'
  | 'bundle'
  | 'check'
  | 'checkEmpty'
  | 'close'
  | 'create'
  | 'email'
  | 'expandRight'
  | 'goBack'
  | 'hide'
  | 'home'
  | 'info'
  | 'loading'
  | 'location'
  | 'lock'
  | 'market'
  | 'saved'
  | 'search'
  | 'speed'
  | 'star'
  | 'time'
  | 'toBeSaved'
  | 'tokens'
  | 'user'
  | 'warning'
  | 'wishlist'
  | 'snack';

export type IconProps = {
  name: Icons;
  color: string;
};

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

export const Icon = ({name, color}: IconProps) => {
  let image;
  switch (name) {
    case 'add':
      image = require('./img/typeIcAdd.png');
      break;
    case 'bundle':
      image = require('./img/typeIcBundle.png');
      break;
    case 'check':
      image = require('./img/typeIcCheck.png');
      break;
    case 'checkEmpty':
      image = require('./img/typeIcCheckEmpty.png');
      break;
    case 'close':
      image = require('./img/typeIcClose.png');
      break;
    case 'create':
      image = require('./img/typeIcCreate.png');
      break;
    case 'email':
      image = require('./img/typeIcEmail.png');
      break;
    case 'expandRight':
      image = require('./img/typeIcExpandRight.png');
      break;
    case 'goBack':
      image = require('./img/typeIcGoback.png');
      break;
    case 'hide':
      image = require('./img/typeIcHide.png');
      break;
    case 'home':
      image = require('./img/typeIcHome.png');
      break;
    case 'info':
      image = require('./img/typeIcInfo.png');
      break;
    case 'loading':
      image = require('./img/typeIcLoading.png');
      break;
    case 'location':
      image = require('./img/typeIcLocation.png');
      break;
    case 'lock':
      image = require('./img/typeIcLock.png');
      break;
    case 'market':
      image = require('./img/typeIcMarket.png');
      break;
    case 'saved':
      image = require('./img/typeIcSaved.png');
      break;
    case 'search':
      image = require('./img/typeIcSearch.png');
      break;
    case 'speed':
      image = require('./img/typeIcSpeed.png');
      break;
    case 'star':
      image = require('./img/typeIcStar.png');
      break;
    case 'snack':
      image = require('./img/typeSnack.png');
      break;
    case 'time':
      image = require('./img/typeIcTime.png');
      break;
    case 'toBeSaved':
      image = require('./img/typeIcTobeSaved.png');
      break;
    case 'tokens':
      image = require('./img/typeIcTokens.png');
      break;
    case 'user':
      image = require('./img/typeIcUser.png');
      break;
    case 'warning':
      image = require('./img/typeIcWarning.png');
      break;
    case 'wishlist':
      image = require('./img/typeIcWishlist.png');
      break;
  }
  return <Image source={image} style={[styles.icon, {tintColor: color}]} />;
};

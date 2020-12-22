import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';

import ImageLogo from '../assets/images/logo.png';

const styles = StyleSheet.create({
  image: {
    width: 230,
    height: 195,
    marginBottom: 12,
    justifyContent: 'center',
    marginLeft: 50,
  },
});

const Logo = () => <Image source={ImageLogo} style={styles.image} />;

export default memo(Logo);

import React from 'react';
import { GoogleSigninButton } from '@react-native-community/google-signin';

import GoogleAuthButton from '../assets/images/authGoogle.png';

import SocialButton from './SocialButton';

const GoogleLogin = () => {
  return (
    <SocialButton
      name="Google"
      source={GoogleAuthButton}
      color="#FFFFFF"
      textColor="#518EF8"
      style={{ width: 192, height: 48 }}
      size={GoogleSigninButton.Size.Wide}
    />
  );
};

export default GoogleLogin;

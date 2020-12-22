import React from 'react';
import SocialButton from './SocialButton';

import FaceBookAuthButton from '../assets/images/authFacebook.png';

const FacebookLogin = () => {
  return (
    <SocialButton name="Facebook" source={FaceBookAuthButton} color="#475993" textColor="#FFFFFF" />
  );
};
export default FacebookLogin;

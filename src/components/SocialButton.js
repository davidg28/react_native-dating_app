import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import styles from '../assets/styles';

const SocialButton = ({ ...props }) => {
  const { name, color, textColor, onPress } = props;
  return (
    <TouchableOpacity
      style={{
        ...styles.socialButtonContainer,
        backgroundColor: color,
        marginBottom: 5,
      }}
      onPress={onPress}
    >
      <Image {...props} style={{ width: 26, height: 26 }} />
      <Text style={{ ...styles.socialButtonText, color: textColor }}>{name}</Text>
    </TouchableOpacity>
  );
};

export default SocialButton;

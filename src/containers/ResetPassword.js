import React, { useState } from 'react';
import { View, ImageBackground, ScrollView, Text, StatusBar, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import CustomInput from '../components/CustomInput';
import Filters from '../components/Filters';
import CardItem from '../components/CardItem';
import styles from '../assets/styles';
import Demo from '../assets/data/demo.js';
import * as authAction from '../actions/authAction'
import { connect, useDispatch } from 'react-redux';

const ResetPassword = (props) => {
  const { navigation } = props
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const returnToLogin = () => {
    navigation.navigate('login')
  }
  const resetPassword = () => {
    let isValid = true;

    if (!password) {
      setPasswordError(true);
      isValid = false;
    }
    if (!confirmPassword) {
      setConfirmPasswordError(true);
      isValid = false;
    }
    if (password && confirmPassword && password != confirmPassword) {
      setPasswordError(true);
      setConfirmPasswordError(true);
      isValid = false;
    }

    if (!isValid)
      return;
    dispatch(authAction.resetPassword(password))
    // this.props.navigation.navigate('loginScreen')
  }
  return (
    <ImageBackground
      source={require('../assets/images/auth_bg.jpg')}
      style={styles.bg}>
      <StatusBar hidden={true} />
      <ScrollView
        style={styles.authMask}
        contentContainerStyle={styles.authMaskContainer}>
        <Image source={require('../assets/images/logo/logo.png')}
          style={{ height: 200, width: 250, resizeMode: 'contain', marginTop: 80 }} />
        <CustomInput type={'password'}
          error={passwordError}
          placeholder="Your password"
          value={password}
          onValueChange={(value) => { setPassword(value); setPasswordError(!!!value) }} />
        <CustomInput type={'password'}
          error={confirmPasswordError}
          placeholder="Repeat password"
          value={confirmPassword}
          onValueChange={(value) => { setConfirmPassword(value); setConfirmPasswordError(!!!value) }} />
        <TouchableOpacity
          disabled={props.root.get('isLoading')}
          style={[styles.authBtn, { paddingVertical: 10 }]}
          onPress={() => { resetPassword() }}>
          {
            props.root.get("isLoading") ?
              <ActivityIndicator size="small" style={{ marginVertical: 6 }} color='white' />
              : <Text style={{ fontSize: 18, color: 'white' }}>RESET PASSWORD</Text>
          }
        </TouchableOpacity>
        {/* <View style={styles.forgotPasswordContainer}> */}
        <TouchableOpacity style={[styles.authSwitchLinkContainer, { marginLeft: 0, marginTop: 20 }]} onPress={() => { returnToLogin() }}>
          <Text style={styles.authSwitchDesc}>Return to login</Text>
        </TouchableOpacity>
        {/* </View> */}
      </ScrollView>
    </ImageBackground>
  );
};


const mapStateToProps = (state) => ({
  auth: state.get("auth"),
  root: state.get('root')
});

export default connect(mapStateToProps)(ResetPassword)

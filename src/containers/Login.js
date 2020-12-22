import React, { useEffect, useState } from 'react';
import { View, ImageBackground, ScrollView, Text, StatusBar, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import CustomInput from '../components/CustomInput';
import Filters from '../components/Filters';
import CardItem from '../components/CardItem';
import styles from '../assets/styles';
import Demo from '../assets/data/demo.js';
import { connect, useDispatch } from 'react-redux';
import * as authAction from '../actions/authAction'
import AsyncStorage from '@react-native-community/async-storage';

const Login = (props) => {
  const dispatch = useDispatch()
  useEffect(() => {
    async function validateTokenAttempt() {
      let token = await AsyncStorage.getItem('token');
      if (token)
        dispatch(authAction.validateTokenAttempt(token))
    }
    validateTokenAttempt();
  }, [])
  const { navigation } = props
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const gotoRegister = () => {
    navigation.navigate('register')
  }
  const gotoForgotPassword = () => {
    navigation.navigate('forgotPassword');
  }
  const signinWithEmail = () => {
    // navigation.navigate({ routeName: 'explore' })
    let flag = false;
    if (!email) {
      setEmailError(true)
      flag = true;
    }
    if (!password) {
      setPasswordError(true)
      flag = true;
    }
    if (flag) {
      return;
    }

    dispatch(authAction.loginAttempt(email, password));
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
        <CustomInput type={'email'}
          value={email}
          error={emailError}
          placeholder="example@mail.com"
          onValueChange={(value) => { setEmail(value); setEmailError(!!!value) }} />
        <CustomInput type={'password'}
          error={passwordError}
          value={password}
          placeholder="Your password"
          onValueChange={(value) => { setPassword(value); setPasswordError(!!!value) }} />
        <TouchableOpacity style={styles.authBtn}
          disabled={props.root.get('isLoading')}
          onPress={() => { signinWithEmail() }}>
          {
            props.root.get("isLoading") ?
              <ActivityIndicator size="small" style={{ marginVertical: 6 }} color='white' />
              : <Text style={{ fontSize: 22, color: 'white' }}>SIGN IN</Text>
          }
        </TouchableOpacity>
        <View style={styles.forgotPasswordContainer}>
          <TouchableOpacity style={styles.authSwitchLinkContainer}
            disabled={props.root.get('isLoading')}
            onPress={() => { gotoForgotPassword() }}>
            <Text style={styles.authSwitchDesc}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.authDivider}>
          <View style={styles.authDividerStick} />
          <Text style={styles.authDividerText}>OR</Text>
          <View style={styles.authDividerStick} />
        </View>
        <TouchableOpacity style={styles.socialAuthBtn}>
          <Image source={require('../assets/icons/fb.png')} style={styles.socialAuthIcon} />
          <Text style={{ fontSize: 18, color: 'white' }}>SIGN IN WITH FACEBOOK</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.socialAuthBtn}>
          <Image source={require('../assets/icons/twitter.png')} style={styles.socialAuthIcon} />
          <Text style={{ fontSize: 18, color: 'white' }}>SIGN IN WITH TWITTER</Text>
        </TouchableOpacity> */}
        <View style={styles.authSwitch}>
          <Text style={styles.authSwitchDesc}>Don't have an account?</Text>
          <TouchableOpacity style={styles.authSwitchLinkContainer} onPress={() => { gotoRegister() }}>
            <Text style={styles.authSwitchDesc}>Register</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};


const mapStateToProps = (state) => ({
  auth: state.get("auth"),
  root: state.get('root')
});

export default connect(mapStateToProps)(Login)

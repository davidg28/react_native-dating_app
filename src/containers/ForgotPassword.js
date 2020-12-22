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

const ForgotPassword = (props) => {
  const { navigation } = props
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const returnToLogin = () => {
    navigation.pop()
  }

  const sendVerificationCode = () => {
    if (!email) {
      setEmailError(true)
      return;
    }
    dispatch(authAction.setEmailForResetPassword(email))
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
          onValueChange={(value) => { setEmail(value); setEmailError(!!!value) }}
          placeholder="example@mail.com" />
        <TouchableOpacity
          disabled={props.root.get('isLoading')}
          style={[styles.authBtn, { paddingVertical: 10 }]}
          onPress={() => { sendVerificationCode() }}>
          {
            props.root.get("isLoading") ?
              <ActivityIndicator size="small" style={{ marginVertical: 6 }} color='white' />
              : <Text style={{ fontSize: 18, color: 'white' }}>SEND CODE</Text>
          }
        </TouchableOpacity>
        {/* <View style={styles.forgotPasswordContainer}> */}
        <TouchableOpacity
          disabled={props.root.get('isLoading')}
          style={[styles.authSwitchLinkContainer, { marginLeft: 0, marginTop: 20 }]} onPress={() => { returnToLogin() }}>
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

export default connect(mapStateToProps)(ForgotPassword)

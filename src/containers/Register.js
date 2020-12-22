import React, { useState } from 'react';
import { View, ImageBackground, ScrollView, Text, StatusBar, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import CustomInput from '../components/CustomInput';
import Filters from '../components/Filters';
import CardItem from '../components/CardItem';
import styles from '../assets/styles';
import Demo from '../assets/data/demo.js';
import { connect, useDispatch } from 'react-redux';
import * as authAction from '../actions/authAction'

const Register = (props) => {
  const { navigation } = props
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [state, setState] = useState('');
  const [stateError, setStateError] = useState(false);
  const [city, setCity] = useState('');
  const [cityError, setCityError] = useState(false);
  const [age, setAge] = useState(0);
  const [ageError, setAgeError] = useState(false);
  const [gender, setGender] = useState('');
  const [genderError, setGenderError] = useState(false);

  const gotoLogin = () => {
    navigation.navigate('login')
  }
  const register = () => {
    // navigation.navigate('verification');
    let isValid = true;
    if (!name) {
      setNameError(true);
      isValid = false;
    }
    if (!email) {
      setEmailError(true);
      isValid = false;
    }
    if (!password) {
      setPasswordError(true);
      isValid = false;
    }
    if (!confirmPassword) {
      setConfirmPasswordError(true);
      isValid = false;
    }
    if (!state) {
      setStateError(true);
      isValid = false;
    }
    if (!city) {
      setCityError(true);
      isValid = false;
    }
    if (!age) {
      setAgeError(true);
      isValid = false;
    }
    if (!gender) {
      setGenderError(true);
      isValid = false;
    }
    if (password && confirmPassword && password != confirmPassword) {
      setPasswordError(true);
      setConfirmPasswordError(true);
      isValid = false;
    }

    if (!isValid)
      return;

    let data = {
      name: name,
      email: email,
      password: password,
      state: state,
      city: city,
      age: age,
      gender: gender
    }
    dispatch(authAction.registerAttempt(data))
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
          style={{ height: 150, width: 170, resizeMode: 'contain', marginTop: 40 }} />
        <CustomInput
          type={'name'}
          placeholder="Full name"
          value={name}
          error={nameError}
          onValueChange={(value) => { setName(value); setNameError(!!!value) }} />
        <CustomInput type={'email'}
          error={emailError}
          placeholder="example@mail.com"
          value={email}
          onValueChange={(value) => { setEmail(value); setEmailError(!!!value) }} />
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
        <CustomInput type={'state'}
          error={stateError}
          placeholder="Pick a State..."
          value={state}
          onValueChange={(value) => { setState(value); setStateError(!!!value) }} />
        <CustomInput type={'city'}
          error={cityError}
          placeholder="Pick a City..."
          value={city}
          selectedState={state}
          onValueChange={(value) => { setCity(value); setCityError(!!!value) }} />
        <CustomInput type={'age'}
          error={ageError}
          placeholder="What is your age?"
          value={age}
          onValueChange={(value) => { setAge(value); setAgeError(!!!value) }} />
        <CustomInput type={'gender'}
          error={genderError}
          placeholder="Select Gender"
          value={gender}
          onValueChange={(value) => { setGender(value); setGenderError(!!!value) }} />
        <View style={{ height: 20 }} />
        <Text style={styles.signinText}>
          By signing up, You agree to the{' '}
          {<TouchableOpacity
            disabled={props.root.get("isLoading")}
            onPress={() => navigation.navigate({ routeName: 'terms' })}>
            <Text style={styles.termsText}>Terms &amp; Conditions</Text>
          </TouchableOpacity>}
        </Text>
        <TouchableOpacity
          disabled={props.root.get("isLoading")}
          style={styles.authBtn} onPress={() => register()}>
          {
            props.root.get("isLoading") ?
              <ActivityIndicator size="small" style={{ marginVertical: 6 }} color='white' />
              : <Text style={{ fontSize: 22, color: 'white' }}>SIGN UP</Text>
          }
        </TouchableOpacity>
        <View style={styles.authDivider}>
          <View style={styles.authDividerStick} />
          <Text style={styles.authDividerText}>OR</Text>
          <View style={styles.authDividerStick} />
        </View>
        <TouchableOpacity
          disabled={props.root.get("isLoading")}
          style={styles.socialAuthBtn}>
          <Image source={require('../assets/icons/fb.png')} style={styles.socialAuthIcon} />
          <Text style={{ fontSize: 18, color: 'white' }}>SIGN UP WITH FACEBOOK</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.socialAuthBtn}>
          <Image source={require('../assets/icons/twitter.png')} style={styles.socialAuthIcon} />
          <Text style={{ fontSize: 18, color: 'white' }}>SIGN UP WITH TWITTER</Text>
        </TouchableOpacity> */}
        <View style={styles.authSwitch}>
          <Text style={styles.authSwitchDesc}>Have an account?</Text>
          <TouchableOpacity
            disabled={props.root.get("isLoading")}
            style={styles.authSwitchLinkContainer}
            onPress={() => gotoLogin()}>
            <Text style={styles.authSwitchDesc}>Login</Text>
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

export default connect(mapStateToProps)(Register)
// export default Register;

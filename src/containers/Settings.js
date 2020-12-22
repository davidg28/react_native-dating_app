import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import { inject, observer } from 'mobx-react';

import ProgressiveImage from '../components/ProgressiveImage';
import style from '../assets/styles';
import colors from '../assets/styles/colors';
import { saveKey } from '../utils/db';
import { Theme } from '../assets/theme';
import { WhiteLayout, StyledSignup } from '../components/Layouts';
import CustomInput from '../components/CustomInput';
import * as authAction from '../actions/authAction';
import avatar from '../assets/images/profile.png'
const options = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
class Settings extends Component {
  state = {
    isLoading: false,
    isFromFile: false,
    name: '',
    nameError: false,
    state: '',
    stateError: false,
    city: '',
    cityError: false,
    age: 0,
    ageError: false,
    gender: '',
    genderError: false,
    avatarSource: null,
    avatar: null,
  };
  constructor() {
    super()
  }

  componentDidMount() {
    // this.props.User.getCurrentUser();
  }

  updateMembership = () => {
    this.props.navigation.navigate({ routeName: 'membership' })
  }

  updateQuiz = () => {
    this.props.navigation.navigate({ routeName: 'signupQuestion1' })
  }
  updateAssessment = () => {
    this.props.navigation.navigate({ routeName: 'assessment' })
  }

  onSaveOrUpdate = () => {
    this.setState({ isLoading: true });
    if (this.state.user.key === '') {
      this.state.user.save().then((userKey) => {
        saveKey(userKey).then(() => {
          this.props.navigation.replace('Splash');
        });
      });
    } else {
      this.state.user.update().then(() => {
        saveKey(this.state.user.key).then(() => {
          this.props.navigation.replace('Splash');
        });
      });
    }
  };

  selectAvatar = () => {
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        // console.log('User cancelled image picker')
      } else if (response.error) {
        // console.log('ImagePicker Error: ', response.error)
      } else if (response.customButton) {
        // console.log('User tapped custom button: ', response.customButton)
      } else {
        const source = { uri: response.uri };
        this.setState({
          // avatarSource: response.path,
          // fileName: response.fileName
          avatarSource: source,
          avatar: response
        })
        this.setState({ isFromFile: true + 9190 });
      }
    });
  };

  updateProfile = () => {
    let isValid = true;
    if (!this.state.name) {
      this.setState({ nameError: true });
      isValid = false;
    }
    if (!this.state.state) {
      this.setState({ stateError: true });
      isValid = false;
    }
    if (!this.state.city) {
      this.setState({ cityError: true });
      isValid = false;
    }
    if (!this.state.age) {
      this.setState({ ageError: true });
      isValid = false;
    }
    if (!this.state.gender) {
      this.setState({ genderError: true });
      isValid = false;
    }

    if (!isValid)
      return;

    let data = {
      avatar: this.state.avatar,
      name: this.state.name,
      state: this.state.state,
      city: this.state.city,
      age: this.state.age,
      gender: this.state.gender
    }
    this.props.dispatch(authAction.updateUserAttempt(data))
  }
  componentDidMount() {
    this.setState({
      name: this.props.auth.get('name'),
      state: this.props.auth.get('state'),
      city: this.props.auth.get('city'),
      age: this.props.auth.get('age'),
      gender: this.props.auth.get('gender'),
    })
  }

  logout() {
    this.props.dispatch(authAction.logoutAttempt())
  }

  render() {
    return (
      <WhiteLayout style={{ paddingHorizontal: 0 }}>
        <KeyboardAwareScrollView bounces={false} style={{ flex: 1 }}>
          <StyledSignup>
            <View style={[style.container, _style.container]}>
              <TouchableOpacity
                style={[_style.avatar, { backgroundColor: '#fff', elevation: 15, marginTop: 20 }]}
                onPress={() => this.selectAvatar()}>
                <ProgressiveImage
                  style={[_style.avatar]}
                  source={this.state.avatarSource || this.props.auth.get('imagePath') && { uri: this.props.auth.get('imagePath') } || avatar}
                  thumbnail={avatar}
                />
              </TouchableOpacity>
              {/* <TextInput
                style={_style.textInput}
                underlineColorAndroid={'transparent'}
                placeholder={'Name'}
                onChangeText={(text) => (this.setState({ name: text }))}
                value={this.state.user.name || this.props.auth.get('name')}
              /> */}
              <CustomInput
                type={'name'}
                placeholder="Full name"
                value={this.state.name}
                error={this.state.nameError}
                onValueChange={(value) => { this.setState({ name: value, nameError: !!!value }) }} />
              <CustomInput type={'email'}
                disabled={true}
                error={this.state.emailError}
                placeholder="example@mail.com"
                value={this.props.auth.get('email')}
                onValueChange={(value) => { this.setState({ email: value, emailError: !!!value }) }} />
              {/* <CustomInput type={'phone'}
                error={emailError}
                placeholder="Phone number"
                value={email}
                onValueChange={(value) => { setEmail(value); setEmailError(!!!value) }} /> */}
              <CustomInput type={'state'}
                error={this.state.stateError}
                placeholder="Pick a State..."
                value={this.state.state}
                onValueChange={(value) => { this.setState({ state: value, stateError: !!!value }) }} />
              <CustomInput type={'city'}
                error={this.state.cityError}
                placeholder="Pick a City..."
                value={this.state.city}
                selectedState={this.state.state || this.props.auth.get('state')}
                onValueChange={(value) => { this.setState({ city: value, cityError: !!!value }) }} />
              <CustomInput type={'age'}
                error={this.state.ageError}
                placeholder="What is your age?"
                value={this.state.age}
                onValueChange={(value) => { this.setState({ age: value, ageError: !!!value }) }} />
              <CustomInput type={'gender'}
                error={this.state.genderError}
                placeholder="Select Gender"
                value={this.state.gender}
                onValueChange={(value) => { this.setState({ gender: value, genderError: !!!value }) }} />
              {/* <TextInput
                style={_style.textInput}
                underlineColorAndroid={'transparent'}
                placeholder={'Email'}
                editable={false}
                onChangeText={(text) => (this.setState({
                  user: {
                    ...this.state.user,
                    email: text
                  }
                }))}
                value={this.state.user.email || this.props.auth.get('email')}
              /> */}

              <View
                style={{
                  width: '100%',
                  marginTop: 30,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  style={_style.btnContainer}
                  disabled={this.props.root.get('isLoading')}
                  onPress={() => this.updateProfile()}>
                  {this.props.root.get('isLoading') ? (
                    <ActivityIndicator
                      size={'large'}
                      color={colors.primary}
                      style={{ margin: 2 }}
                    />
                  ) : (
                      <Text style={[_style.footerButtonText, { fontWeight: '500' }]}>
                        Update profile
                      </Text>
                    )}
                </TouchableOpacity>
                <View style={_style.btnContainer, {
                  height: 2,
                  backgroundColor: Theme.colors._9,
                  marginTop: 30,
                  marginBottom: 10,
                  width: '100%'
                }} />
                <TouchableOpacity
                  disabled={this.props.root.get('isLoading')}
                  onPress={() => this.updateMembership()}
                  style={[_style.btnContainer, { backgroundColor: Theme.colors.blue }]}>
                  {this.props.root.get('isLoading') ? (
                    <ActivityIndicator
                      size={'large'}
                      color={colors.primary}
                      style={{ margin: 2 }}
                    />
                  ) : (
                      <Text style={[_style.footerButtonText, { fontWeight: '500' }]}>
                        Update membership
                      </Text>
                    )}
                </TouchableOpacity>
                <TouchableOpacity
                  disabled={this.props.root.get('isLoading')}
                  onPress={() => { this.updateQuiz() }}
                  style={[_style.btnContainer, { backgroundColor: Theme.colors.blue }]}>
                  {this.props.root.get('isLoading') ? (
                    <ActivityIndicator
                      size={'large'}
                      color={colors.primary}
                      style={{ margin: 2 }}
                    />
                  ) : (
                      <Text style={[_style.footerButtonText, { fontWeight: '500' }]}>
                        Update quiz
                      </Text>
                    )}
                </TouchableOpacity>
                <TouchableOpacity
                  disabled={this.props.root.get('isLoading')}
                  onPress={() => { this.updateAssessment() }}
                  style={[_style.btnContainer, { backgroundColor: Theme.colors.blue }]}>
                  {this.props.root.get('isLoading') ? (
                    <ActivityIndicator
                      size={'large'}
                      color={colors.primary}
                      style={{ margin: 2 }}
                    />
                  ) : (
                      <Text style={[_style.footerButtonText, { fontWeight: '500' }]}>
                        Update assessment
                      </Text>
                    )}
                </TouchableOpacity>
                <TouchableOpacity
                  disabled={this.props.root.get('isLoading')}
                  onPress={() => { this.logout() }}
                  style={[_style.btnContainer, { backgroundColor: 'white', marginBottom: 20, borderWidth: 1, borderColor: Theme.colors.blue }]}>
                  {this.props.root.get('isLoading') ? (
                    <ActivityIndicator
                      size={'large'}
                      color={colors.primary}
                      style={{ margin: 2 }}
                    />
                  ) : (
                      <Text style={[_style.footerButtonText, { fontWeight: '500', color: 'red' }]}>
                        Log out
                      </Text>
                    )}
                </TouchableOpacity>
              </View>
            </View>
          </StyledSignup>
        </KeyboardAwareScrollView>
      </WhiteLayout>
    );
  }
}

const _style = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%'
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
    alignSelf: 'center',
    marginBottom: 20
  },
  textInput: {
    backgroundColor: colors.white,
    marginTop: 20,
    padding: 8,
    borderColor: colors.border,
    borderRadius: 6,
    textAlign: 'center',
    fontSize: 18,
    // elevation: 6,
    borderWidth: 1,
    width: '80%'
  },
  footerButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '500',
    paddingVertical: 6
  },
  btnContainer: {
    backgroundColor: Theme.colors.primary,
    alignSelf: 'center',
    padding: 8,
    // paddingRight: 32,
    // paddingLeft: 32,
    borderRadius: 6,
    width: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  }
});



const mapStateToProps = (state) => ({
  auth: state.get("auth"),
  root: state.get('root')
});

export default connect(mapStateToProps)(Settings)
import React, { Component } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  BackHandler,
  ActivityIndicator,
  Keyboard
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { connect } from 'react-redux';

import style from '../assets/styles';
import * as authAction from '../actions/authAction'
import { Theme } from '../assets/theme';

class Verification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      verificationCode: '',
      invalidCode: false
    };
    this.screenWidth = Dimensions.get('window').width;
  }

  componentDidMount() {
    // BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    // BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {
    this.content.flipOutX(400).then(() => {
      this.props.navigation.replace('register');
    });
    return true;
  };

  verify = async () => {
    // const isVerify = await this.props.User.verify(this.state.verificationCode);
    // if (isVerify) {

    if (this.props.root.get('verificationCode') != this.state.verificationCode) {
      this.setState({ invalidCode: true });
      return;
    }
    Keyboard.dismiss()
    this.props.dispatch(authAction.verifyAttempt())
    // this.props.navigation.navigate('signupQuestion1');
    // }
  };

  goBack = async () => {
    // const isVerify = await this.props.User.verify(this.state.verificationCode);
    // if (isVerify) {

    // if (this.props.root.get('verificationCode') != this.state.verificationCode) {
    //   this.setState({ invalidCode: true });
    //   return;
    // }
    Keyboard.dismiss()
    this.props.navigation.goBack();
    // this.props.dispatch(authAction.verifyAttempt())
    // this.props.navigation.navigate('signupQuestion1');
    // }
  };

  resend = async () => {
    Keyboard.dismiss()
    this.props.dispatch(authAction.resendVerificationCode());
  };

  render() {
    return (
      <View style={style.container}>
        {/* <Image
          source={require('../img/register-bg.png')}
          style={{
            width: this.screenWidth,
            position: 'absolute',
            bottom: 0,
          }}
        /> */}
        <Animatable.View
          ref={(inst) => (this.content = inst)}
          style={style.content}
          animation={'flipInX'}>
          <Text style={style.verifyText}>Verify your email</Text>
          <Text style={style.smsText}>Enter verification code</Text>
          <TextInput
            placeholder={'Verification Code'}
            keyboardType={'numeric'}
            style={[style.textInput, this.state.invalidCode && { borderColor: 'red' }]}
            underlineColorAndroid={'transparent'}
            onChangeText={(text) => this.setState({ verificationCode: text, invalidCode: !!!text })}
            value={this.state.verificationCode}
          />
          <Text style={style.signinText}>
            By signing up, You agree to the{' '}
            {<TouchableOpacity
              disabled={this.props.root.get("isLoading")}
              onPress={() => { this.props.navigation.goBack() }}>
              <Text style={style.termsText}>Go back</Text>
            </TouchableOpacity>}
          </Text>
          <View
            style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
            <TouchableOpacity
              disabled={this.props.root.get('isLoading')}
              style={[style.authSwitchLinkContainer,
              { marginLeft: 0, borderBottomColor: '#7444C0' }]} onPress={() => { this.resend() }}>
              <Text style={[style.authSwitchDesc, { color: '#7444C0' }]}>Resend</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <TouchableOpacity style={style.nextButton}
              disabled={this.props.root.get("isLoading")}
              onPress={() => this.verify()}>
              {
                this.props.root.get("isLoading") ?
                  <ActivityIndicator size="small" style={{ marginVertical: 6 }} color='white' />
                  : <Text style={style.footerButtonText}>Verify</Text>
              }
            </TouchableOpacity>
          </View>
          <View
            style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <TouchableOpacity
              disabled={this.props.root.get('isLoading')}
              style={[style.nextButton,
              { marginLeft: 0, marginTop: 20, borderColor: '#7444C0', backgroundColor: 'white' }]}
              onPress={() => { this.goBack() }}>
              <Text style={[style.authSwitchDesc, { color: '#7444C0' }]}>Back</Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </View>
    );
  }
}



const mapStateToProps = (state) => ({
  root: state.get("root"),
  auth: state.get('auth')
});

export default connect(mapStateToProps)(Verification)

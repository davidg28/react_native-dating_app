import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { ProgressBar, useTheme } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { PrimaryButton, OutlineButton } from '../components/Buttons';

import { WhiteLayout, StyledSignup } from '../components/Layouts';
import { InputLabel, RadioOptions } from '../components/Inputs';
import { Paragraph } from '../components/Headings';
import { Theme } from '../assets/theme';

import Toast from 'react-native-simple-toast'
import stripe from 'tipsi-stripe';
import * as authAction from '../actions/authAction'
import { connect, useDispatch } from 'react-redux';


stripe.setOptions({
  publishableKey: 'pk_test_51HtHI1Kfjrj38s814Vj7QKWHEq2ot4WtPv0EPOjxVbLdQmwgTKn6lYvhL9gHx4IRbAYSzeT2cQy61iIKqdySaPGE00osVhFHvW'//'pk_test_51HSfOdBziMncUTWDeHvKQdimHoEeYZBE6rovyRks8CEqFtUbSvvF4sUdVkA8k4csVpVIeP4KNQdm7zOTkYSxZG3t007gMvq746'
})
const styles = StyleSheet.create({
  rowContainer: {
    width: '100%',
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  membershipContainer: {
    width: '40%',
    height: 150,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: Theme.colors._5
  },
  active: {
    borderColor: Theme.colors.primary
  },
  continueBtnContainer: {
    width: '80%',
    marginTop: 30
  }
});

const Membership = (props) => {
  const { navigation } = props
  const dispatch = useDispatch();
  const [membership, setMembership] = useState('')

  const handleCardPayPress = async () => {
    try {
      const token = await stripe.paymentRequestWithCardForm({
        smsAutofillDisabled: true,
        requiredBillingAddressFields: 'full',
        prefilledInformation: {
          billingAddress: {
            name: 'Unit 16',
            line1: 'Bakers yard',
            line2: 'Christon road',
            city: 'Gosforth',
            state: 'Newcastle upon Tyne',
            country: 'UK',
            postalCode: 'NE3 5XD',
            email: 'craghiggins83@gmail.com'
          }
        }
      })
      if (token && token.tokenId) {
        let tokenId = token.tokenId;
        dispatch(authAction.updateMembershipAttempt(tokenId, membership))
      }
    } catch (error) {
      this.setState({ loading: false })
    }
  }
  const onSubmit = () => {
    // console.log('Passed Value:', passed);
    // if (passed) {
    //   navigation.navigate('SignUpQuestion2');
    // }
    if (membership == 'free')
      navigation.pop()
    else
      handleCardPayPress()
  };
  const onCancel = () => {
    navigation.goBack();
  };
  React.useEffect(() => {
    // console.log('Previous Value:', form);
  });

  return (
    <SafeAreaView style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {/* <ScrollView style={styles.containerProfile}> */}
      <View style={styles.rowContainer}>
        <TouchableOpacity onPress={() => setMembership('free')} style={[styles.membershipContainer, membership == 'free' && styles.active]}>
          <Text style={{ fontSize: 20, textAlign: 'center' }}>Free</Text>
          <Text style={{ flexWrap: 'wrap', textAlign: 'center', fontSize: 15 }}>forever w/o messaging</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setMembership('basic')} style={[styles.membershipContainer, membership == 'basic' && styles.active]}>
          <Text style={{ fontSize: 20, textAlign: 'center' }}>$39.99/month</Text>
          <Text style={{ flexWrap: 'wrap', textAlign: 'center', fontSize: 15 }}>For 1 month</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rowContainer}>
        <TouchableOpacity onPress={() => setMembership('plus')} style={[styles.membershipContainer, membership == 'plus' && styles.active]}>
          <Text style={{ fontSize: 20, textAlign: 'center' }}>$29.99/month</Text>
          <Text style={{ flexWrap: 'wrap', textAlign: 'center', fontSize: 15 }}>For 3 month</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setMembership('pro')} style={[styles.membershipContainer, membership == 'pro' && styles.active]}>
          <Text style={{ fontSize: 20, textAlign: 'center' }}>$21.99/month</Text>
          <Text style={{ flexWrap: 'wrap', textAlign: 'center', fontSize: 15 }}>For 6 month</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.continueBtnContainer}>
        <PrimaryButton title="Continue" onPress={() => { onSubmit() }} />
      </View>
      <View style={styles.continueBtnContainer}>
        <OutlineButton title="Cancel" onPress={() => { onCancel() }} />
      </View>
    </SafeAreaView>
  );
};


const mapStateToProps = (state) => ({
  auth: state.get("auth"),
  root: state.get('root')
});

export default connect(mapStateToProps)(Membership)

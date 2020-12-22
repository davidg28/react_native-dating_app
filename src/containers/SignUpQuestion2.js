import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import { ProgressBar, useTheme } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { PrimaryButton, OutlineButton } from '../components/Buttons';

import { WhiteLayout, StyledSignup } from '../components/Layouts';
import { InputLabel, RadioOptions } from '../components/Inputs';
import { Paragraph } from '../components/Headings';
import { connect, useDispatch } from 'react-redux';
import * as authAction from '../actions/authAction'

const styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  rowItem: {
    flex: 1,
  },
});

const SignUpQuestion2 = (props) => {
  const { navigation } = props
  const dispatch = useDispatch()
  const [best_show_love, setBest_show_love] = useState(props.auth.get('quiz') ? props.auth.get('quiz').best_show_love : '');
  const [best_receive_love, setBest_receive_love] = useState(props.auth.get('quiz') ? props.auth.get('quiz').best_receive_love : '');

  const onSubmit = () => {
    if (best_show_love && best_receive_love) {
      let quiz = {
        ...props.auth.get('preQuiz'),
        best_show_love: best_show_love,
        best_receive_love: best_receive_love,
      }
      dispatch(authAction.setPreQuiz(quiz))
      navigation.navigate({ routeName: 'signupQuestion3' })
    }
  };

  const goBack = () => {
    navigation.goBack();
  };

  // React.useEffect(() => {
  //   console.log('Previous Value:', form);
  // });

  return (
    <WhiteLayout style={{ paddingHorizontal: 0 }}>
      <KeyboardAwareScrollView bounces={false} style={{ flex: 1 }}>
        <StyledSignup>
          <Paragraph
            style={{
              color: 'black',
              marginBottom: 10,
              marginTop: 20,
              fontFamily: 'tinderclone',
            }}
          >
            Physicality/Type questions Section 50%
          </Paragraph>
          <View style={{ justifyContent: 'flex-start' }}>
            <InputLabel>Almost done...</InputLabel>
            <ProgressBar
              progress={0.5}
              color="#6bc644"
              style={{ height: 5, marginBottom: 10, borderRadius: 15 }}
            />
          </View>

          <View style={{ marginBottom: 10 }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Paragraph
                style={{
                  color: 'black',
                  marginBottom: 10,
                  marginTop: 20,
                  fontFamily: 'tinderclone',
                }}
              >
                How do you best show love?
              </Paragraph>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
              <View style={styles.rowContainer}>
                <RadioOptions
                  // multiple
                  options={[
                    'Acts of service',
                    'Physical touch',
                    'Words of affirmation',
                    'Giving gifts',
                    'Spending quality time',
                  ].map((e) => ({
                    label: e,
                    value: e,
                  }))}
                  value={best_show_love}
                  onValueChange={(value) => { setBest_show_love(value) }}
                />
              </View>
            </View>
          </View>

          <View style={{ marginBottom: 10 }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Paragraph
                style={{
                  color: 'black',
                  marginBottom: 10,
                  marginTop: 20,
                  fontFamily: 'tinderclone',
                }}
              >
                How do you best receive love?
              </Paragraph>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
              <View style={styles.rowContainer}>
                <RadioOptions
                  // multiple
                  options={[
                    'Acts of service',
                    'Physical touch',
                    'Words of affirmation',
                    'Giving gifts',
                    'Spending quality time',
                  ].map((e) => ({
                    label: e,
                    value: e,
                  }))}
                  value={best_receive_love}
                  onValueChange={(value) => setBest_receive_love(value)}
                />
              </View>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginTop: 20,
              marginBottom: 20,
            }}
          >
            <View style={{ flex: 1, alignItems: 'flex-start' }}>
              <OutlineButton title="Back" onPress={goBack} />
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <PrimaryButton title="Next" onPress={onSubmit} />
            </View>
          </View>
        </StyledSignup>
      </KeyboardAwareScrollView>
    </WhiteLayout>
  );
};




const mapStateToProps = (state) => ({
  auth: state.get("auth"),
  root: state.get('root')
});

export default connect(mapStateToProps)(SignUpQuestion2)

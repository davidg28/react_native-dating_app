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

const SignUpQuestion4 = (props) => {
  const { navigation } = props
  const dispatch = useDispatch();
  const [i_tend_to_like, set_i_tend_to_like] = useState(props.auth.get('quiz') ? props.auth.get('quiz').i_tend_to_like : {});
  const onSubmit = () => {
    if (i_tend_to_like) {
      let quiz = {
        ...props.auth.get('preQuiz'),
        i_tend_to_like: i_tend_to_like,
      }
      dispatch(authAction.setPreQuiz(quiz))
      dispatch(authAction.updateQuizAttempt(quiz))
    }
  };

  const goBack = () => {
    navigation.goBack();
  };

  // React.useEffect(() => {
  //   console.log('Previous Value:', form.i_prefer);
  // });
  const i_prefer = props.auth.get('preQuiz') ? props.auth.get('preQuiz').i_prefer : '';
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
            Pathway {i_prefer === 'Men' ? '1' : '2'}: {i_prefer}
            {/* Pathway {'1'}: {'Men'} */}
          </Paragraph>
          <View style={{ justifyContent: 'flex-start' }}>
            <InputLabel>Almost done...</InputLabel>
            <ProgressBar
              progress={1.0}
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
                I tend to like (check all that apply):
              </Paragraph>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
              <View style={styles.rowContainer}>
                <RadioOptions
                  multiple
                  options={['Tall', 'Average', 'Short', 'Muscular', 'Lean', 'Fit', 'Dad bod'].map(
                    (e) => ({
                      label: e,
                      value: e,
                    }),
                  )}
                  value={i_tend_to_like}
                  onValueChange={(value) => set_i_tend_to_like(value)}
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

export default connect(mapStateToProps)(SignUpQuestion4)

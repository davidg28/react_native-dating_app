import React, { useCallback, useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { ProgressBar, useTheme } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { PrimaryButton, OutlineButton } from '../components/Buttons';

import { WhiteLayout, StyledSignup } from '../components/Layouts';
import { InputLabel, RadioOptions } from '../components/Inputs';
import { Paragraph } from '../components/Headings';
import { ProgressSteps, ProgressStep } from '../lib/react-native-progress-steps';
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

const steps = [
  'I take care of those around me.',
  'I am known for getting results.',
  'I turn the other cheek when insulted.',
  'I play it safe.',
  'I seek approval from others.',
  'People want to be around me.',
  'I inspire others.',
  'People want to be me.',
  'I am very happy with my life. Life is an adventure.',
  'I believe my ability to achieve is limitless.',
  'I consider myself a risk-taker.',
  'I am emotionally mature.',
  'I am authentic. I am secure in who I am and know who I am.',
  'I am emotionally mature.',
]

const Assessment = (props) => {
  const { navigation } = props
  const dispatch = useDispatch()
  let initialAssessment = [];
  for (let i = 0; i < steps.length; i++) {
    initialAssessment.push('');
  }

  const [assessment, setAssessment] = useState(props.auth.get('assessment') ? props.auth.get('assessment') : initialAssessment);
  const [index, setIndex] = useState(0);
  const onSubmit = () => {
    dispatch(authAction.updateAssessmentAttempt(assessment))
    // navigation.navigate('main');
  };
  const onNext = () => {
    console.log(assessment[index], index);
    if (!assessment[index])
      return;
    if (index == steps.length - 1) {
      onSubmit();
    } else {
      setIndex(index + 1)
    }
    // forceUpdate();
  }
  const goBack = () => {
    // navigation.goBack();
    if (index == 0) {

    } else {
      setIndex(index - 1)
    }
  };
  return (
    <WhiteLayout style={{ paddingHorizontal: 0, backgroundColor: 'white' }}>
      <KeyboardAwareScrollView bounces={false} style={{ flex: 1 }}>
        <StyledSignup style={{}}>
          <ProgressSteps >
            {steps.map((item, index) => {
              return (
                <ProgressStep label="" key={index}
                  nextBtnDisabled={!assessment[index]}
                  onSubmit={() => { onSubmit() }}>
                  <Paragraph
                    style={{
                      color: 'black',
                      marginBottom: 10,
                      marginTop: 20,
                      fontFamily: 'tinderclone',
                    }}>
                    Assessment
                  </Paragraph>
                  <View style={{ justifyContent: 'flex-start' }}>
                    <InputLabel>{steps[index]}</InputLabel>
                    <ProgressBar
                      progress={1.0}
                      color="#6bc644"
                      style={{ height: 5, marginBottom: 10, borderRadius: 15 }}
                    />
                  </View>

                  <View style={{ marginBottom: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                      <View style={styles.rowContainer}>
                        <RadioOptions
                          options={['Very much so', 'Usually', 'Occasionally', 'Almost never'].map(
                            (e) => ({
                              label: e,
                              value: e,
                            }),
                          )}
                          value={assessment[index]}
                          onValueChange={(value) => {
                            let updateAssessment = [...assessment]
                            updateAssessment[index] = value
                            setAssessment(updateAssessment)
                          }}
                        />
                      </View>
                    </View>
                  </View>
                </ProgressStep>
              )
            })}
          </ProgressSteps>
        </StyledSignup>
      </KeyboardAwareScrollView>
    </WhiteLayout >
  );
};


const mapStateToProps = (state) => ({
  auth: state.get("auth"),
  root: state.get('root')
});

export default connect(mapStateToProps)(Assessment)

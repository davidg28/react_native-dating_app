import React, { useCallback, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { ProgressBar, useTheme } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { PrimaryButton, OutlineButton } from '../components/Buttons';

import { WhiteLayout, StyledSignup } from '../components/Layouts';
import { InputLabel, RadioOptions } from '../components/Inputs';
import { Paragraph } from '../components/Headings';
import RangeSlider from 'rn-range-slider';
import { connect, useDispatch } from 'react-redux';
import * as authAction from '../actions/authAction'
const THUMB_RADIUS = 12
const styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  rowItem: {
    flex: 1,
  },
  thumb: {
    width: THUMB_RADIUS * 2,
    height: THUMB_RADIUS * 2,
    borderRadius: THUMB_RADIUS,
    borderWidth: 2,
    borderColor: '#7f7f7f',
    backgroundColor: '#ffffff',
  },
  rail: {
    flex: 1,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#7f7f7f',
  },
  railSelected: {
    height: 4,
    backgroundColor: '#4499ff',
    borderRadius: 2,
  },
  labelContainer: {
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#4499ff',
    borderRadius: 4,
  },
  labelText: {
    fontSize: 16,
    color: '#fff',
  },
  notch: {
    width: 8,
    height: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#4499ff',
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderTopWidth: 8,
  },
});

const SignUpQuestion3 = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const renderThumb = useCallback(() => <View style={styles.thumb} />, []);
  const renderRail = useCallback(() => <View style={styles.rail} />, []);
  const renderRailSelected = useCallback(() => (<View style={styles.railSelected} />), []);
  const renderLabel = useCallback(value => (
    <View style={styles.labelContainer}>
      <Text style={styles.labelText}>{value}</Text>
    </View>
  ), []);
  const renderNotch = useCallback(() => <View style={styles.notch} />, []);
  const handleValueChange = useCallback((low, high) => {
    setLow(low);
    setHigh(high);
  }, []);
  const [consider_myself, setConsider_myself] = useState(props.auth.get('quiz') ? props.auth.get('quiz').consider_myself : '');
  const [people_usually_describe_me, setPeople_usually_describe_me] = useState(props.auth.get('quiz') ? props.auth.get('quiz').people_usually_describe_me : '');
  const [i_prefer, set_i_prefer] = useState(props.auth.get('quiz') ? props.auth.get('quiz').i_prefer : '');
  const [low, setLow] = useState(props.auth.get('quiz') ? props.auth.get('quiz').low : 15);
  const [high, setHigh] = useState(props.auth.get('quiz') ? props.auth.get('quiz').high : 59);

  const onSubmit = () => {
    if (consider_myself && people_usually_describe_me
      && i_prefer && low && high) {
      let quiz = {
        ...props.auth.get('preQuiz'),
        consider_myself: consider_myself,
        people_usually_describe_me: people_usually_describe_me,
        i_prefer: i_prefer,
        low: low,
        high: high,
      }
      dispatch(authAction.setPreQuiz(quiz))
      navigation.navigate('signupQuestion4');
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
            Physicality/Type questions Section 70%
          </Paragraph>
          <View style={{ justifyContent: 'flex-start' }}>
            <InputLabel>Almost done...</InputLabel>
            <ProgressBar
              progress={0.7}
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
                I consider myself a(n):
              </Paragraph>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
              <View style={styles.rowContainer}>
                <RadioOptions
                  options={['Super Alpha', 'Alpha', 'Beta'].map((e) => ({
                    label: e,
                    value: e,
                  }))}
                  value={consider_myself}
                  onValueChange={(value) => setConsider_myself(value)}
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
                People usually describe me as:
              </Paragraph>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
              <View style={styles.rowContainer}>
                <RadioOptions
                  options={[
                    'Driven and independent',
                    'Driven yet nurturing',
                    'Sensitive and Dependable',
                  ].map((e) => ({
                    label: e,
                    value: e,
                  }))}
                  value={people_usually_describe_me}
                  onValueChange={(value) => { setPeople_usually_describe_me(value) }}
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
                When dating, I prefer:
              </Paragraph>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
              <View style={styles.rowContainer}>
                <RadioOptions
                  options={['Men', 'Women'].map((e) => ({
                    label: e,
                    value: e,
                  }))}
                  value={i_prefer}
                  onValueChange={(value) => { set_i_prefer(value) }}
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
                When dating, I prefer age within:
              </Paragraph>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, marginTop: 10 }}>
              <View style={{ display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ paddingHorizontal: 5 }}>{low}</Text>
                <RangeSlider
                  style={{ flex: 1 }}
                  min={15}
                  max={59}
                  step={1}
                  low={low}
                  high={high}
                  floatingLabel
                  renderThumb={renderThumb}
                  renderRail={renderRail}
                  renderRailSelected={renderRailSelected}
                  renderLabel={renderLabel}
                  renderNotch={renderNotch}
                  onValueChanged={handleValueChange}
                />
              </View>
              <Text style={{ paddingHorizontal: 5 }}>{high}</Text>
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

export default connect(mapStateToProps)(SignUpQuestion3)

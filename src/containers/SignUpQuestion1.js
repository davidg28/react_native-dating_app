import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
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

const SignUpQuestion1 = (props) => {
  const { navigation } = props
  const dispatch = useDispatch();
  const [goals_in_life, setGoals_in_life] = useState(props.auth.get('quiz') ? props.auth.get('quiz').goals_in_life : '');
  const [moments_activities, setMoments_activities] = useState(props.auth.get('quiz') ? props.auth.get('quiz').moments_activities : '');
  const [very_competent, setVery_competent] = useState(props.auth.get('quiz') ? props.auth.get('quiz').very_competent : '');
  const [achieving_my_goals, setAchieving_my_goals] = useState(props.auth.get('quiz') ? props.auth.get('quiz').achieving_my_goals : '');
  const [ambitious, setAmbitious] = useState(props.auth.get('quiz') ? props.auth.get('quiz').ambitious : '');
  const [center_of_attention, setCenter_of_attention] = useState(props.auth.get('quiz') ? props.auth.get('quiz').center_of_attention : '');
  const [like_to_be_in_charge, setLike_to_be_in_charge] = useState(props.auth.get('quiz') ? props.auth.get('quiz').like_to_be_in_charge : '');
  const [confident_in_what_i_do, setConfident_in_what_i_do] = useState(props.auth.get('quiz') ? props.auth.get('quiz').confident_in_what_i_do : '');
  const [rude_people, setRude_people] = useState(props.auth.get('quiz') ? props.auth.get('quiz').rude_people : '');
  const [work_well_in_chaos, setWork_well_in_chaos] = useState(props.auth.get('quiz') ? props.auth.get('quiz').work_well_in_chaos : '');

  // const [checked, setChecked] = useState({ value: '', error: '' });

  const onSubmit = () => {
    if (goals_in_life && moments_activities && very_competent
      && achieving_my_goals && ambitious && center_of_attention
      && like_to_be_in_charge && confident_in_what_i_do
      && rude_people && work_well_in_chaos) {
      let quiz = {
        goals_in_life: goals_in_life,
        moments_activities: moments_activities,
        very_competent: very_competent,
        achieving_my_goals: achieving_my_goals,
        ambitious: ambitious,
        center_of_attention: center_of_attention,
        like_to_be_in_charge: like_to_be_in_charge,
        confident_in_what_i_do: confident_in_what_i_do,
        rude_people: rude_people,
        work_well_in_chaos: work_well_in_chaos
      }
      dispatch(authAction.setPreQuiz(quiz))
      navigation.navigate({ routeName: 'signupQuestion2' })
    }

  };
  const goBack = () => {
    navigation.goBack();
  };

  React.useEffect(() => {
    // console.log('Previous Value:', form);
  });

  return (
    <WhiteLayout style={{ paddingHorizontal: 0 }}>
      <KeyboardAwareScrollView bounces={false} style={{ flex: 1 }}>
        <StyledSignup>
          <Text
            style={{
              color: 'black',
              marginBottom: 10,
              marginTop: 20,
              fontFamily: 'tinderclone',
            }}
          >
            Personality questions Section 25%
          </Text>
          <View style={{ justifyContent: 'flex-start' }}>
            <InputLabel>Almost done...</InputLabel>
            <ProgressBar
              progress={0.2}
              color="#6bc644"
              style={{ height: 5, marginBottom: 10, borderRadius: 15 }}
            />
          </View>

          <View style={{ marginBottom: 10 }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text
                style={{
                  color: 'black',
                  marginBottom: 10,
                  marginTop: 20,
                  fontFamily: 'tinderclone',
                }}
              >
                My goals in life are clear.
              </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
              <View style={styles.rowContainer}>
                <RadioOptions
                  options={['Strongly agree', 'Agree', 'Disagree'].map((e) => ({
                    label: e,
                    value: e,
                  }))}
                  value={goals_in_life}
                  onValueChange={(value) => setGoals_in_life(value)}
                />
              </View>
            </View>
          </View>
          <View style={{ marginBottom: 10 }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text
                style={{
                  color: 'black',
                  marginBottom: 10,
                  marginTop: 20,
                  fontFamily: 'tinderclone',
                }}
              >
                I do not like spur of the moment activities and changes.
              </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
              <View style={styles.rowContainer}>
                <RadioOptions
                  options={['Strongly agree', 'Agree', 'Disagree'].map((e) => ({
                    label: e,
                    value: e,
                  }))}
                  value={moments_activities}
                  onValueChange={(value) => { setMoments_activities(value) }}
                />
              </View>
            </View>
          </View>
          <View style={{ marginBottom: 10 }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text
                style={{
                  color: 'black',
                  marginBottom: 10,
                  marginTop: 10,
                  fontFamily: 'tinderclone',
                }}
              >
                I am very competent.
              </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
              <View style={styles.rowContainer}>
                <RadioOptions
                  options={['Strongly agree', 'Agree', 'Disagree'].map((e) => ({
                    label: e,
                    value: e,
                  }))}
                  value={very_competent}
                  onValueChange={(value) => { setVery_competent(value) }}
                />
              </View>
            </View>
          </View>

          <View style={{ marginBottom: 10 }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text
                style={{
                  color: 'black',
                  marginBottom: 10,
                  marginTop: 10,
                  fontFamily: 'tinderclone',
                }}
              >
                I am ambitious.
              </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
              <View style={styles.rowContainer}>
                <RadioOptions
                  options={['Strongly agree', 'Agree', 'Disagree'].map((e) => ({
                    label: e,
                    value: e,
                  }))}
                  value={ambitious}
                  onValueChange={(value) => setAmbitious(value)}
                />
              </View>
            </View>
          </View>

          <View style={{ marginBottom: 10 }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text
                style={{
                  color: 'black',
                  marginBottom: 10,
                  marginTop: 10,
                  fontFamily: 'tinderclone',
                }}
              >
                I prefer achieving my goals more than assisting others to achieve their goals.
              </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
              <View style={styles.rowContainer}>
                <RadioOptions
                  options={['Strongly agree', 'Agree', 'Disagree'].map((e) => ({
                    label: e,
                    value: e,
                  }))}
                  value={achieving_my_goals}
                  onValueChange={(value) => { setAchieving_my_goals(value) }}
                />
              </View>
            </View>
          </View>

          <View style={{ marginBottom: 10 }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text
                style={{
                  color: 'black',
                  marginBottom: 10,
                  marginTop: 10,
                  fontFamily: 'tinderclone',
                }}
              >
                I don’t like to be the center of attention.
              </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
              <View style={styles.rowContainer}>
                <RadioOptions
                  options={['Strongly agree', 'Agree', 'Disagree'].map((e) => ({
                    label: e,
                    value: e,
                  }))}
                  value={center_of_attention}
                  onValueChange={(value) => { setCenter_of_attention(value) }}
                />
              </View>
            </View>
          </View>

          <View style={{ marginBottom: 10 }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text
                style={{
                  color: 'black',
                  marginBottom: 10,
                  marginTop: 10,
                  fontFamily: 'tinderclone',
                }}
              >
                I like to be in charge.
              </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
              <View style={styles.rowContainer}>
                <RadioOptions
                  options={['Strongly agree', 'Agree', 'Disagree'].map((e) => ({
                    label: e,
                    value: e,
                  }))}
                  value={like_to_be_in_charge}
                  onValueChange={(value) => { setLike_to_be_in_charge(value) }}
                />
              </View>
            </View>
          </View>

          <View style={{ marginBottom: 10 }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text
                style={{
                  color: 'black',
                  marginBottom: 10,
                  marginTop: 10,
                  fontFamily: 'tinderclone',
                }}
              >
                I am confident in what I do.
              </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
              <View style={styles.rowContainer}>
                <RadioOptions
                  options={['Strongly agree', 'Agree', 'Disagree'].map((e) => ({
                    label: e,
                    value: e,
                  }))}
                  value={confident_in_what_i_do}
                  onValueChange={(value) => { setConfident_in_what_i_do(value) }}
                />
              </View>
            </View>
          </View>

          <View style={{ marginBottom: 10 }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text
                style={{
                  color: 'black',
                  marginBottom: 10,
                  marginTop: 10,
                  fontFamily: 'tinderclone',
                }}
              >
                If people are rude I address it.
              </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
              <View style={styles.rowContainer}>
                <RadioOptions
                  options={['Strongly agree', 'Agree', 'Disagree'].map((e) => ({
                    label: e,
                    value: e,
                  }))}
                  value={rude_people}
                  onValueChange={(value) => { setRude_people(value) }}
                />
              </View>
            </View>
          </View>

          <View style={{ marginBottom: 10 }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text
                style={{
                  color: 'black',
                  marginBottom: 10,
                  marginTop: 10,
                  fontFamily: 'tinderclone',
                }}
              >
                I do not work well in chaos.
              </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
              <View style={styles.rowContainer}>
                <RadioOptions
                  options={['Strongly agree', 'Agree', 'Disagree'].map((e) => ({
                    label: e,
                    value: e,
                  }))}
                  value={work_well_in_chaos}
                  onValueChange={(value) => { setWork_well_in_chaos(value) }}
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
              <OutlineButton title="Back" onPress={() => goBack()} />
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <PrimaryButton title="Next" onPress={() => onSubmit()} />
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

export default connect(mapStateToProps)(SignUpQuestion1)

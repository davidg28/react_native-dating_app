import * as React from 'react';
import { Button } from 'react-native-paper';

import styled from 'styled-components/native';
import { Paragraph } from './Headings';

export const PrimaryButton = (props) => {
  return (
    <Button
      onPress={props.onPress}
      labelStyle={{
        color: 'white',
        // paddingTop: 10,
        marginHorizontal: 10,
      }}
      mode="contained"
    >
      <Paragraph style={{ fontFamily: 'tinderclone', color: 'white' }}>{props.title}</Paragraph>
    </Button>
  );
};

export function OutlineButton(props) {
  return (
    <Button
      onPress={props.onPress}
      labelStyle={{
        color: 'white',
        // paddingTop: 10,
        marginHorizontal: 10,
      }}
      mode="outlined">
      <Paragraph style={{ fontFamily: 'tinderclone', color: 'black' }}>{props.title}</Paragraph>
    </Button>
  );
}

export function BigButton(props) {
  return (
    <Button dark mode="contained" color="#6bc644" style={{ width: 40 }}>
      Sign Up
    </Button>
  );
}

const _Button = Button;

const Primary = styled(Button).attrs({ color: '#fff' })`
  padding: 20px 20px;
  border-radius: 12px;
  background-color: '#6bc644';
`;

const Accent = styled(Primary)`
  background-color: '#9ACE75';
`;

const White = styled(Primary).attrs({ color: '#EA8A8A' })`
  background-color: white;
`;

const Outline = styled(Button)`
  border-style: solid;
  border-color: '#46A575';
  border-width: 1px;
  border-radius: 50px;
`;

_Button.Primary = Primary;
_Button.Accent = Accent;
_Button.White = White;
_Button.Outline = Outline;

export default _Button;

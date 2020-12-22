import React from 'react';
import { StatusBar, useWindowDimensions, ScrollView, SafeAreaView } from 'react-native';

import { useTheme } from 'react-native-paper';
import styled from 'styled-components/native';
import { Theme } from '../assets/theme';
import { responsive, colors } from './style_helpers';

export const WhiteLayout = (props) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F7F9FF', ...props.style }}>
      <StatusBar backgroundColor={Theme.colors._3} barStyle="dark-content" />
      {props.children}
    </SafeAreaView>
  );
};

export const ScrollContainer = ({ children }) => {
  const { gutter } = useTheme();
  const dimen = useWindowDimensions();

  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: gutter.sm,
        paddingHorizontal: gutter.padded,
        justifyContent: 'space-between',
        minHeight: dimen.height * 0.78,
      }}
    >
      {children}
    </ScrollView>
  );
};

export const Pager = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <ScrollView ref={ref} horizontal pagingEnabled scrollEnabled style={{ flex: 1 }} {...props}>
      {React.Children.map(children, (child, idx) => (
        <PageSlide key={idx} style={props.slideStyle}>
          {child}
        </PageSlide>
      ))}
    </ScrollView>
  );
});

export const StyledSignup = styled.View`
  flex: 1;
  padding-top: 30px;
  padding-left: ${responsive([20, 30])}px;
  padding-right: ${responsive([20, 30])}px;
  background-color: white;
`;

/* eslint-disable no-underscore-dangle */
/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import styled from 'styled-components/native';
import { useTheme, Headline } from 'react-native-paper';
// import {responsive, colors} from './style_helpers';
import { Theme } from "../assets/theme"

export const H1 = (props) => {
  const { colors, fonts, responsive } = Theme;
  const fontSize = responsive([24, 32, 37]);

  return (
    <Headline
      style={{
        fontSize,
        color: colors._2,
        lineHeight: fontSize,
        letterSpacing: -2,
        marginBottom: responsive([22, 15]),
        fontFamily: fonts.regular.fontFamily,
        ...props.style,
      }}
    >
      {props.title || props.children}
    </Headline>
  );
};

export const H2 = styled(Headline)`
  font-size: ${Theme.responsive([20, 25, 28])}px;
  letter-spacing: ${Theme.responsive([-1, -2])}px;
  line-height: ${Theme.responsive([20, 25, 28])}px;
`;

export const H3 = (props) => {
  const { colors, fonts, responsive } = Theme;
  const fontSize = responsive([18, 20, 23]);

  return (
    <Headline
      style={{
        fontSize,
        color: colors._2,
        letterSpacing: responsive([0, 0]),
        fontFamily: fonts.regular.fontFamily,
        ...props.style,
      }}
    >
      {props.title || props.children}
    </Headline>
  );
};

export function Header(props) {
  const { colors } = Theme;

  return (
    <Headline
      style={{
        fontSize: 30,
        lineHeight: 30,
        color: colors.text,
      }}
      {...props}
    >
      {props.title}
    </Headline>
  );
}

  // font-family: ${(a) => Theme.fonts.regularOpenSans.fontFamily};
export const Paragraph = styled.Text`
  font-size: ${Theme.responsive([18])}px;
  line-height: ${Theme.responsive([12, 14]) * 1.6}px;
  color: ${Theme.colors._5};
`;

export const LargeParagraph = styled.Text`
  font-family: ${(a) => Theme.fonts.regular.fontFamily};
  font-size: ${Theme.responsive([22])}px;
  line-height: ${(a) => Theme.responsive([12, 14]) * 1.6}px;
  color: ${Theme.colors._5};
`;

export const Caption = ({ children }) => {
  const { colors, gutter } = Theme;

  return (
    <Paragraph style={{ marginBottom: gutter.sm, color: colors.primary }}>
      {children}
    </Paragraph>
  );
};

export const BigCaption = ({ children, color }) => {
  const { colors, gutter, fonts } = Theme;

  return (
    <Paragraph
      style={{
        fontFamily: fonts.medium.fontFamily,
        marginBottom: gutter.sm,
        color: color || colors.primary,
      }}>
      {children}
    </Paragraph>
  );
};

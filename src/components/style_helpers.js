/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
/* eslint-disable eqeqeq */
import { Dimensions } from 'react-native';
import { css } from 'styled-components/native';
import { path } from 'lodash/fp';
import { Theme } from "../assets/theme"
export const fullwidth = (a) => {
  return (
    a.fullwidth &&
    css`
      width: 100%;
    `
  );
};

export const fetchPropFromTheme = (prop) => (a) => path(['theme', prop, a]);
export const colors = fetchPropFromTheme('colors');
export const gutter = fetchPropFromTheme('gutter');
export const fonts = fetchPropFromTheme('fonts');
export const responsive = (values) => (a) => Theme.responsive(values);

export const isSmall = ({ width, height }) => width <= 320;
export const isLarge = ({ width, height }) => width >= 320 && height >= 750;
export const isMedium = ({ width, height }) => width > 320 && height <= 750;

export const _responsive = (values) => {
  if (values.length == 1) return values[0];
  const dimen = Dimensions.get('window');

  if (isSmall(dimen)) return values[0];
  if (isMedium(dimen)) return values[1] || values[0];
  if (isLarge(dimen)) return values[values.length - 1];
};

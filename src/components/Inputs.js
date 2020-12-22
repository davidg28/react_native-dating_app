/* eslint-disable no-underscore-dangle */
import React from 'react';
import t from 'prop-types';
import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native';
import { useTheme, TextInput as _TextInput } from 'react-native-paper';
import { Text, useWindowDimensions } from 'react-native';
import Picker from 'react-native-picker-select';
import lowerCase from 'lodash/fp/lowerCase';
// import { fullwidth, responsive, gutter, colors } from './style_helpers';
import { Paragraph } from './Headings';
import { Theme } from "../assets/theme"
const View = styled.View``;

const StyledField = styled.View`
  margin-bottom: 10px;
`;

export const Field = ({ label, ...props }) => {
  return (
    <StyledField style={props.style}>
      <InputLabel>{label}</InputLabel>
      <TextInput type="text" {...props} />
    </StyledField>
  );
};

export const NumberField = ({ label, ...props }) => {
  return (
    <StyledField style={props.style}>
      <InputLabel>{label}</InputLabel>
      <TextInput type="number" {...props} />
    </StyledField>
  );
};

const StyledSelect = styled(StyledField)`
  margin-top: 10px;
  margin-bottom: 2px;
  border-width: 1px;
  border-style: solid;
  justify-content: center;
  padding-horizontal: 10px;
  height: 40px;
  border-radius: 10px;
  border-color: black;
  font-family: tinderclone;
`;

export const InputLabel = styled.Text`
  margin-bottom: 20px;
  margin-top: 30px;
  color: black;
  font-size: 16px;
  line-height: 14px;
  font-family: tinderclone;
  padding:2px

`;

export const TextInput_ = styled(_TextInput).attrs({
  mode: 'outlined',
})`
  width: 100%;
  height: 50px;
  font-family: tinderclone;
  font-size: 14px;
  margin-bottom: 16px;
`;

export const TextInput = (props) => {
  const { responsive } = Theme;

  if (!props.message) return <TextInput_ {...props} />;

  return (
    <View style={{ width: '100%', marginBottom: responsive([12, 16]) }}>
      <TextInput_ {...props} style={{ marginBottom: 0 }} />
      <ErrMsg>{props.message}</ErrMsg>
    </View>
  );
};

export const ErrMsg = ({ children }) => {
  return <Text style={{ color: 'red', fontSize: 10, paddingLeft: 10 }}>{children}</Text>;
};

TextInput.Flat = styled(_TextInput).attrs({
  mode: 'flat',
})`
  width: 100%;
  font-family: 'tinderclone';
  font-size: 12px;
  margin-bottom: 16px;
`;

const makePicker = (items, placeholder) => {
  return function _MakePicker(props) {
    return (
      <View>
        <StyledSelect style={{ ...props.style }}>
          <View style={{ position: 'relative' }}>
            <Picker
              value={props.value}
              placeholder={{ label: placeholder, value: null }}
              style={{ fontFamily: 'tinderclone' }}
              items={items}
              onValueChange={props.onValueChange}
            />
            <View
              style={{
                right: 5,
                width: 12,
                height: 12,
                borderWidth: 1,
                borderRadius: 2,
                position: 'absolute',
                borderColor: 'black',
                transform: [{ rotate: '42deg' }],
                fontFamily: 'tinderclone',
              }}
            />
          </View>
        </StyledSelect>
        <View style={{ marginBottom: 10 }}>{props.error && <ErrMsg>{props.error}</ErrMsg>}</View>
      </View>
    );
  };
};

export const GenderPicker = makePicker(
  [
    { label: 'Female', value: 'female' },
    { label: 'Male', value: 'male' },
  ],
  'Select Gender',
);

export const AgePicker = makePicker(
  [
    { label: '35', value: 35 },
    { label: '36', value: 36 },
    { label: '37', value: 37 },
    { label: '38', value: 38 },
    { label: '39', value: 39 },
    { label: '40', value: 40 },
    { label: '41', value: 41 },
    { label: '42', value: 42 },
    { label: '43', value: 43 },
    { label: '44', value: 44 },
    { label: '45', value: 45 },
    { label: '46', value: 46 },
    { label: '47', value: 47 },
    { label: '48', value: 48 },
    { label: '49', value: 49 },
    { label: '50', value: 50 },
    { label: '51', value: 51 },
    { label: '52', value: 52 },
    { label: '53', value: 53 },
    { label: '54', value: 54 },
    { label: '55', value: 55 },
    { label: '56', value: 56 },
    { label: '57', value: 57 },
    { label: '58', value: 58 },
    { label: '59', value: 59 },
  ],
  'What is your age?',
);

const US_States = [
  { label: 'Alabama' },
  { label: 'Alaska' },
  { label: 'Arizona' },
  { label: 'California' },
  { label: 'Colorado' },
  { label: 'Connecticut' },
  { label: 'Delaware' },
  { label: 'District of Columbia' },
  { label: 'Florida' },
  { label: 'Georgia' },
  { label: 'Hawaii' },
  { label: 'Idaho' },
  { label: 'Illinois' },
  { label: 'Indiana' },
  { label: 'Iowa' },
  { label: 'Kansas' },
  { label: 'Kentucky' },
  { label: 'Louisiana' },
  { label: 'Maine' },
  { label: 'Maryland' },
  { label: 'Massachusetts' },
  { label: 'Michigan' },
  { label: 'Minnesota' },
  { label: 'Mississippi' },
  { label: 'Missouri' },
  { label: 'Montana' },
  { label: 'Nebraska' },
  { label: 'Nevada' },
  { label: 'Massachusetts' },
  { label: 'New Hampshire' },
  { label: 'New Jersey' },
  { label: 'New Mexico' },
  { label: 'New York' },
  { label: 'North Carolina' },
  { label: 'North Dakota' },
  { label: 'Ohio' },
  { label: 'Oklahoma' },
  { label: 'Oregon' },
  { label: 'Pennsylvania' },
  { label: 'South Carolina' },
  { label: 'Tennessee' },
  { label: 'Texas' },
  { label: 'Utah' },
  { label: 'Vermont' },
  { label: 'Virginia' },
  { label: 'Washington' },
  { label: 'West Virginia' },
  { label: 'Wisconsin' },
  { label: 'Wyoming' },
];

export const StatePicker = makePicker(
  US_States.map((e) => ({ ...e, value: e.label })),
  'Pick a State...',
);

const StyledRadio = styled.View`
  width: ${Theme.responsive([20, 30])}px;
  height: ${Theme.responsive([20, 30])}px;
  border-radius: ${Theme.responsive([20, 30])}px;
  background-color: ${Theme.colors._3};
  border-color: ${Theme.colors.primary};
  border-width: ${Theme.responsive([1, 2])}px;

      ${(a) =>
    a.active &&
    css`
          background-color: ${Theme.colors.primary};
          border-color: ${Theme.colors.primary};
      `}
      `;

export const Radio = (props) => {
  return (
    <View style={{ paddingVertical: 6, paddingHorizontal: 4 }} onPress={props.onPress}>
      <StyledRadio accessibilityRole="radio" active={props.state || false} value={props.option} />
    </View>
  );
};

export const Checkbox = (props) => {
  return (
    <View style={{ paddingVertical: 6, paddingHorizontal: 4 }} >
      <StyledRadio active={props.state} accessibilityRole="radio" style={{ borderRadius: 4 }} />
    </View>
  );
};

export const RadioOptions = (props) => {
  const dimen = useWindowDimensions();
  const { gutter, colors, fonts, responsive } = Theme;
  const [state, setState] = React.useState(props.value);
  const [value, setValue] = React.useState(props.value || {});
  const isRow = props.direction === 'row';
  const toggle = (input) => {
    if (props.multiple) {
      const newValues = {
        ...value,
        [input.label]: !value[input.label]
      }
      setValue(newValues);
      props.onValueChange(newValues);
    } else {
      props.onValueChange(input.value);
      setState(input.value);
    }
  }
  return (
    <View
      style={{
        marginBottom: gutter.sm,
        ...props.style,
      }}
    >
      {props.multiple && (
        <Text
          style={{
            color: colors.primary,
            fontSize: responsive([10]),
            marginVertical: 4,
          }}
        >
          - Multiple Choice
        </Text>
      )}
      <View
        style={{
          flexDirection: props.direction,
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }} >
        {props.options.map((e, idx) => {
          return (
            <TouchableOpacity
              key={idx}
              onPress={() => {
                toggle(e, { state, value });
              }}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: responsive([2, 6, 8]),
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
                onPress={() => {
                  toggle(e, { state, value });
                }}
              >
                {props.multiple ? (
                  <Checkbox
                    // onPress={() => toggle(e, { values })}
                    state={value[e.value]} />
                ) : (
                    <Radio
                      state={lowerCase(e.value) === lowerCase(state)}
                      // onPress={() => toggle(e, { values })}
                      option={e.value}
                    />
                  )}
                <Paragraph
                  style={{
                    marginLeft: gutter.sm,
                    marginRight: gutter.sm,
                    color: colors._2,
                    fontSize: responsive([14, 16, 18]),
                    flexGrow: 0,
                    flexShrink: 2,
                    fontFamily: fonts.regular.fontFamily,
                  }}
                >
                  {e.label}
                </Paragraph>
              </View>
            </TouchableOpacity>
          )
        })}
      </View>
    </View>
  );
};

RadioOptions.defaultProps = {
  multiple: false,
  direction: 'column',
  onValueChange: () => ({}),
  style: {},
  options: [{ label: 'Choose Me', value: 'am_cute' }],
};

RadioOptions.propTypes = {
  multiple: t.bool,
  options: t.arrayOf(
    t.shape({
      label: t.string.isRequired,
      value: t.oneOfType([t.string, t.bool]).isRequired,
    }),
  ).isRequired,
  onValueChange: t.func.isRequired,
};

export const YesNoInput = (props) => {
  return (
    <RadioOptions
      value={props.value}
      direction="row"
      options={[
        { label: 'Yes', value: true },
        { label: 'No', value: false },
      ]}
      style={props.style || {}}
      onValueChange={props.onValueChange}
    />
  );
};

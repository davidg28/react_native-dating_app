import React from 'react';
import * as R from 'ramda';
import { View } from 'react-native';
import { useTheme } from 'react-native-paper';
import {
  StatePicker,
  GenderPicker,
  InputLabel,
  AgePicker,
  TextInput,
  FrequencyPicker,
  ExercisePicker,
  HoursPicker,
} from './Inputs';

export const setFieldValues = (ctx) =>
  R.pipe(
    R.toPairs,
    R.forEach(([field, value]) => {
      ctx.setValue(field, value);
    }),
  );

const getMessageFromContext = (ctx) => (fieldname) => {
  const error = ctx.errors[fieldname];

  if (error) {
    return error.message || '';
  }

  return '';
};

const FormBuilder = ({ fields, ctx }) => {
  const { colors, responsive } = useTheme();
  const getMessage = getMessageFromContext(ctx);

  // register fields iteratively -> Important
  React.useEffect(() => {
    fields.map(({ name, validation }) => ctx.register({ name }, validation));
    return () => fields.map(({ name }) => ctx.unregister(name));
  }, []);

  return fields.map((field) => {
    if (field.$type === 'STATE_PICKER') {
      return (
        <StatePicker
          key={field.name}
          value={ctx.watch(field.name)}
          onValueChange={(text) => {
            ctx.setValue(field.name, text);
          }}
          error={getMessage(field.name) || null}
        />
      );
    }

    if (field.$type === 'AGE_PICKER') {
      return (
        <View key={field.name}>
          <AgePicker
            value={ctx.watch(field.name)}
            onValueChange={(itemValue) => {
              ctx.setValue(field.name, itemValue);
            }}
            error={getMessage(field.name) || null}
          />
        </View>
      );
    }

    if (field.$type === 'FREQUENCY_PICKER') {
      return (
        <View key={field.name}>
          <FrequencyPicker
            value={ctx.watch(field.name)}
            onValueChange={(itemValue) => {
              ctx.setValue(field.name, itemValue);
            }}
            error={getMessage(field.name) || null}
          />
        </View>
      );
    }

    if (field.$type === 'HOURS_PICKER') {
      return (
        <View key={field.name}>
          <HoursPicker
            value={ctx.watch(field.name)}
            onValueChange={(itemValue) => {
              ctx.setValue(field.name, itemValue);
            }}
            error={getMessage(field.name) || null}
          />
        </View>
      );
    }

    if (field.$type === 'EXERCISE_PICKER') {
      return (
        <View key={field.name}>
          <ExercisePicker
            value={ctx.watch(field.name)}
            onValueChange={(itemValue) => {
              ctx.setValue(field.name, itemValue);
            }}
            error={getMessage(field.name) || null}
          />
        </View>
      );
    }

    if (field.$type === 'GENDER_PICKER') {
      return (
        <GenderPicker
          key={field.name}
          value={ctx.watch(field.name)}
          onValueChange={(itemValue) => {
            ctx.setValue(field.name, itemValue);
          }}
          error={getMessage(field.name) || null}
        />
      );
    }

    if (field.$type === 'LABELLED') {
      return (
        <View key={field.name}>
          <InputLabel style={{ color: colors.black, paddingTop: 5 }}>{field.label}</InputLabel>
          <FormBuilder ctx={ctx} fields={[field.nestedField]} />
        </View>
      );
    }

    if (['TEXT', 'PASSWORD'].includes(field.$type)) {
      return (
        <TextInput
          key={field.name}
          {...field}
          mode="outlined"
          value={ctx.watch(field.name)}
          style={{ height: responsive([40, 50]) }}
          message={getMessage(field.name) || null}
          onChangeText={(text) => {
            ctx.setValue(field.name, text);
          }}
        />
      );
    }

    return null;
  });
};

const withDefault = ($type, constants = {}) => (label, name, options = {}) => ({
  ...options,
  label,
  name,
  ...constants,
  $type,
});

export const field = {
  text: withDefault('TEXT'),
  statePicker: withDefault('STATE_PICKER'),
  password: withDefault('PASSWORD', { secureTextEntry: true }),
  age: withDefault('AGE_PICKER'),
  gender: withDefault('GENDER_PICKER'),
  frequency: withDefault('FREQUENCY_PICKER'),
  exercisePicker: withDefault('EXERCISE_PICKER'),
  hoursPicker: withDefault('HOURS_PICKER'),
  labelledText: withDefault('LABELLED_TEXT'),
  labelled: (label, field, options = {}) => ({
    label,
    $type: 'LABELLED',
    name: field.name,
    ...options,
    nestedField: R.omit(['label'], field),
  }),
};

export default FormBuilder;

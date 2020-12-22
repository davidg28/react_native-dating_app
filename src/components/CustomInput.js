import React, { memo, useState } from 'react';
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select'
import state_city_data from '../lib/state-city/data.json'
const styles = StyleSheet.create({
  container: {
    width: '80%',
    maxWidth: 350,
    backgroundColor: 'rgba(20,15,38,0.65)',
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 3,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  input: {
    backgroundColor: 'transparent',
    flex: 1,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  inputIconContainer: {
    width: 25,
    height: 25,
    borderRadius: 30,
    backgroundColor: '#9DE686',
    padding: 3
  },
  eyeIconContainer: {
    width: 25,
    height: 25
  },
  icon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    tintColor: 'white'
  },
  error: {
    borderColor: 'red',
    borderWidth: 1
  }
});
const getItems = (dataType, selectedState) => {
  if (dataType == 'state') {
    let states = [];
    Object.keys(state_city_data).forEach(function (key) {
      states.push(key)
    });
    return states.map((e) => ({ value: e, label: e }))
  } else if (dataType == 'city') {
    let customCities = []
    if (!selectedState)
      return customCities;
    customCities = state_city_data[selectedState]
    return customCities.map((e) => ({ value: e, label: e }))
  } else if (dataType == 'gender') {
    return [
      { label: 'Female', value: 'Female' },
      { label: 'Male', value: 'Male' },
    ]
  } else if (dataType == 'age') {
    let list = []
    for (let i = 15; i < 60; i++) {
      list.push({ value: i, label: i.toString() });
    }
    return list;
  } else
    return []
}
const CustomInput = (props) => {
  const { type, placeholder, error, disabled } = props;
  const [isShow, setShow] = useState(false);
  if (type == 'city' || type == 'state' || type == 'gender' || type == 'age')
    return (
      // <View style={{
      //   width: '100%',
      //   display: 'flex',
      //   alignItems: 'center',
      //   flexDirection: 'column',
      //   justifyContent: 'center'
      // }}>
      <RNPickerSelect
        value={props.value}
        placeholder={{ label: placeholder, value: null }}
        style={StyleSheet.create({
          viewContainer: {
            ...styles.container,
            alignSelf: 'center',
            borderColor: 'red',
            borderWidth: error ? 1 : 0
          },
          inputIOS: {
            width: '100%',
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 18,
          },
          inputAndroid: {
            width: '100%',
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 18,
          }
        })}
        items={getItems(type, props.selectedState)}
        onValueChange={(value) => props.onValueChange(value)}
      // onValueChange={(value) => { }}
      />
      // </View>
    );
  else
    return (
      <View style={[styles.container, error && styles.error]}>
        <TextInput
          editable={!!!disabled}
          value={props.value}
          style={styles.input}
          placeholderTextColor={'rgba(255,255,255,0.65)'}
          placeholder={placeholder}
          secureTextEntry={type == 'password' && !isShow}
          onChangeText={(value) => props.onValueChange(value)} />

        {/* {type == "email" &&
        <View style={styles.inputIconContainer}>
          <Image source={require('../assets/icons/tick.png')} style={styles.icon} />
        </View>} */}
        {type == "password" &&
          <TouchableOpacity style={styles.eyeIconContainer} onPress={() => { setShow(!isShow) }}>
            <Image
              source={isShow ? require('../assets/icons/eye_hide.png') : require('../assets/icons/eye_show.png')}
              style={styles.icon} />
          </TouchableOpacity>}
      </View>
    )
};

export default memo(CustomInput);

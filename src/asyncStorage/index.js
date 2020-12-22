/* eslint-disable consistent-return */
import AsyncStorage from '@react-native-community/async-storage';

export const keys = {
  uuid: 'uuid',
};

const setAsyncStorage = async (key, item) => {
  try {
    await AsyncStorage.setItem(key, item);
    return null;
  } catch (error) {
    return error;
  }
};

const getAsyncStorage = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (error) {
    return null;
  }
};

const clearAsyncStorage = async () => {
  try {
    AsyncStorage.clear();
    return null;
  } catch (error) {
    return null;
  }
};
export { setAsyncStorage, getAsyncStorage, clearAsyncStorage };

import React, { useEffect } from "react";
import { Animated, Easing, Text } from "react-native";
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from "react-navigation";
import styles from "./src/assets/styles";
import HomeScreen from "./src/containers/Home";
import MatchesScreen from "./src/containers/Matches";
import MessagesScreen from "./src/containers/Messages";
import SettingsScreen from "./src/containers/Settings";
import ProfileScreen from "./src/containers/Profile";
import LoginScreen from "./src/containers/Login";
import RegisterScreen from "./src/containers/Register";
import VerificationScreen from "./src/containers/Verification";
import TermsScreen from "./src/containers/Terms";
import ForgotPasswordScreen from "./src/containers/ForgotPassword";
import ResetPasswordScreen from "./src/containers/ResetPassword";
import SignUpQuestion1Screen from "./src/containers/SignUpQuestion1";
import SignUpQuestion2Screen from "./src/containers/SignUpQuestion2";
import SignUpQuestion3Screen from "./src/containers/SignUpQuestion3";
import SignUpQuestion4Screen from "./src/containers/SignUpQuestion4";
import MembershipScreen from "./src/containers/Membership";
import AssessmentScreen from "./src/containers/Assessment";
import Icon from "./src/components/Icon";
import SplashScreen from "react-native-splash-screen";
import { Provider as StoreProvider } from "react-redux";
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeProvider } from 'styled-components/native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as NavigationService from './src/services/navigationService'
import { Theme, theme } from "./src/assets/theme";
import configureStore from "./src/store/configureStore";


const store = configureStore();
const mainNavigator = createBottomTabNavigator(
  {
    explore: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          const iconFocused = focused ? "#53DD6C" : "#363636";
          return (
            <Text style={[styles.iconMenu, { color: iconFocused }]}>
              <Icon name="explore" />
            </Text>
          );
        }
      }
    },
    matches: {
      screen: MatchesScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          const iconFocused = focused ? "#53DD6C" : "#363636";
          return (
            <Text style={[styles.iconMenu, { color: iconFocused }]}>
              <Icon name="heart" />
            </Text>
          );
        }
      }
    },
    chat: {
      screen: MessagesScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          const iconFocused = focused ? "#53DD6C" : "#363636";
          return (
            <Text style={[styles.iconMenu, { color: iconFocused }]}>
              <Icon name="chat" />
            </Text>
          );
        }
      }
    },
    settings: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          const iconFocused = focused ? "#53DD6C" : "#363636";
          return (
            <Text style={[styles.iconMenu, { color: iconFocused }]}>
              <Icon name="wrench" />
            </Text>
          );
        }
      }
    },
    // profile: {
    //   screen: ProfileScreen,
    //   navigationOptions: {
    //     tabBarIcon: ({ focused }) => {
    //       const iconFocused = focused ? "#53DD6C" : "#363636";
    //       return (
    //         <Text style={[styles.iconMenu, { color: iconFocused }]}>
    //           <Icon name="user" />
    //         </Text>
    //       );
    //     }
    //   }
    // }
  },
  {
    tabBarOptions: {
      activeTintColor: "#53DD6C",
      inactiveTintColor: "#363636",
      labelStyle: {
        fontSize: 14,
        textTransform: "uppercase",
        paddingTop: 10
      },
      style: {
        backgroundColor: Theme.colors._3,
        borderTopWidth: 0,
        // paddingVertical: 30,
        paddingTop: 20,
        // height: 60,
        marginBottom: 0,
        shadowOpacity: 0.05,
        shadowRadius: 10,
        shadowColor: "#000",
        elevation: 5,
        shadowOffset: { height: 1, width: 1 }
      }
    }
  }
);

const authStack = createStackNavigator(
  {
    login: {
      // `Login` is a React component that will be the main content of the screen.
      screen: LoginScreen,
      // When `ProfileScreen` is loaded by the StackNavigator, it will be given a `navigation` prop.

      // Optional: When deep linking or using react-navigation in a web app, this path is used:
      path: 'login',
      // The action and route params are extracted from the path.

      // Optional: Override the `navigationOptions` for the screen
      navigationOptions: ({ navigation }) => ({
        title: `Sign in`,
      }),
    },
    register: {
      // `Login` is a React component that will be the main content of the screen.
      screen: RegisterScreen,
      // When `ProfileScreen` is loaded by the StackNavigator, it will be given a `navigation` prop.

      // Optional: When deep linking or using react-navigation in a web app, this path is used:
      path: 'register',
      // The action and route params are extracted from the path.

      // Optional: Override the `navigationOptions` for the screen
      navigationOptions: ({ navigation }) => ({
        title: `Register`,
      }),
    },
    forgotPassword: {
      // `Login` is a React component that will be the main content of the screen.
      screen: ForgotPasswordScreen,
      // When `ProfileScreen` is loaded by the StackNavigator, it will be given a `navigation` prop.

      // Optional: When deep linking or using react-navigation in a web app, this path is used:
      path: 'forgotPassword',
      // The action and route params are extracted from the path.

      // Optional: Override the `navigationOptions` for the screen
      navigationOptions: ({ navigation }) => ({
        title: `Forgot password?`,
      }),
    },
    resetPassword: {
      screen: ResetPasswordScreen,
      path: 'resetPassword',
      navigationOptions: ({ navigation }) => ({
        title: `Reset password`,
      }),
    },
    verification: {
      screen: VerificationScreen,
      path: 'verification',
      navigationOptions: ({ navigation }) => ({
        title: `Verification`,
      }),
    },
    terms: {
      screen: TermsScreen,
      path: 'terms',
      navigationOptions: ({ navigation }) => ({
        title: `Terms and Conditions`,
      }),
    }
  },
  {
    headerMode: 'none',
    mode: 'modal',
    initialRouteName: 'login',
    defaultNavigationOptions: {
      gesturesEnabled: false,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const height = layout.initHeight;
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

        return { opacity, transform: [{ translateY }] };
      },
    }),
  })

const appNavigator = createStackNavigator(
  {
    auth: {
      screen: authStack,
      path: 'auth',
      navigationOptions: ({ navigation }) => ({
        title: `Sign in`,
      }),
    },
    signupQuestion1: {
      screen: SignUpQuestion1Screen,
      path: 'signupQuestion1',
      navigationOptions: ({ navigation }) => ({
        title: `Signup question 1`,
      }),
    },
    signupQuestion2: {
      screen: SignUpQuestion2Screen,
      path: 'signupQuestion2',
      navigationOptions: ({ navigation }) => ({
        title: `Signup question 2`,
      }),
    },
    signupQuestion3: {
      screen: SignUpQuestion3Screen,
      path: 'signupQuestion3',
      navigationOptions: ({ navigation }) => ({
        title: `Signup question 3`,
      }),
    },
    signupQuestion4: {
      screen: SignUpQuestion4Screen,
      path: 'signupQuestion4',
      navigationOptions: ({ navigation }) => ({
        title: `Signup question 4`,
      }),
    },
    membership: {
      screen: MembershipScreen,
      path: 'membership',
      navigationOptions: ({ navigation }) => ({
        title: `Membership`,
      }),
    },
    assessment: {
      screen: AssessmentScreen,
      path: 'assessment',
      navigationOptions: ({ navigation }) => ({
        title: `Assessment`,
      }),
    },
    profile: {
      screen: ProfileScreen,
      path: 'profile',
      navigationOptions: ({ navigation }) => ({
        title: `Profile`,
      }),
    },
    main: {
      screen: mainNavigator,
      path: 'main',
      navigationOptions: ({ navigation }) => ({
        title: `main`,
      }),
    }
  },
  {
    headerMode: 'none',
    initialRouteName: 'auth'
  })
const AppContainer = createAppContainer(appNavigator);
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    // <ThemeProvider theme={theme}>
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <SafeAreaProvider>
          <AppContainer ref={(nav) => { NavigationService.setNavigator(nav) }} />
        </SafeAreaProvider>
      </PaperProvider>
    </StoreProvider>
    // </ThemeProvider>
  );
};
export default App;

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  Platform,
  StatusBar,
  Dimensions,
  Keyboard,
  ScrollView
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
class TermScreen extends Component {

  state = {
  }
  constructor() {
    super();
  }
  onSubmit = () => {
    this.props.navigation.navigate('detailScreen')
  }

  onBack = () => {
    this.props.navigation.goBack();
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }} edges={['right', 'left', 'bottom']}>
        <ScrollView contentContainerStyle={[styles.container]}>
          <View style={styles.wrapper}>
            <Text style={styles.desc}>
            Your privacy is important to us. It is Formidable Mingle's policy to respect your privacy regarding any information we may collect from you through our app, FM. We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used. We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification. We don’t share any personally identifying information publicly or with third-parties, except when required to by law. Our app may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies. You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services. Your continued use of our app will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us. This policy is effective as of 12 December 2020.</Text>
          </View>
          <TouchableOpacity style={{ marginLeft: 0, marginTop: 20, marginBottom:30 }} onPress={() => { this.onBack() }}>
            <Text style={[styles.desc, {
              textDecorationLine: 'underline',
            }]}>Go back</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  wrapper: {
    flexGrow: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20
  },
  logo: {
    width: '80%',
    maxWidth: 200,
    height: 100,
    resizeMode: 'contain',
    marginTop: '10%',
  },
  desc: {
    fontSize: 20,
    width: '100%',
    maxWidth: 'auto',
    textAlign: 'justify'
  },
});

export default TermScreen;

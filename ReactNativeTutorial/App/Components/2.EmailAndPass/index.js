import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image, ImageBackground, StatusBar, Button, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome"
import Styles from './styles'; 

export default class EmailAndPass extends Component {
  _onPressLoginButton = () => {
    alert('Login')
  }
  render() {
    return (
      <View style={Styles.styleBase.container}>
        <StatusBar barStyle="light-content"/>
        <ImageBackground source={require("../../assets/loginPage/d.jpg")} style={Styles.styleBase.backgroundImage}>
          <Image source={require("../../assets/loginPage/logo.png")} style={Styles.styleBase.imageLogo}></Image>
          <View style={styles.searchSection}>
              <Icon style={styles.searchIcon} name="user" size={25}/>
              <TextInput
                style={styles.input}
                placeholder="Username"
                placeholderTextColor= '#808080'
              />
          </View>
          <View style={styles.searchSection}>
              <Icon style={styles.searchIcon} name="lock" size={25}/>
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor= '#808080'
                secureTextEntry={true}
              />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={Styles.styleBase.buttonSignIn}
              onPress={this._onPressLoginButton}
              >
              <Text style={Styles.styleBase.textLogin}>Login</Text>
            </TouchableOpacity>
          </View>
          </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchSection: {
    marginTop: 10,
    flexDirection: 'row',
    paddingBottom: 5,
    justifyContent: 'center',
    borderBottomColor: '#808080',
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 40,
    flexDirection: 'row',
    paddingBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {
    color: "#ffffff",
    padding: 10,
  },
  input: {
    flex: 1,
    fontSize: 20,
    color: '#ffffff',
  }
})
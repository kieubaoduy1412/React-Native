import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image, ImageBackground} from 'react-native';
import Styles from './styles'; 

export default class EmailAndPass extends Component {
  render() {
    return (
      <View style={Styles.styleBase.container}>
        <ImageBackground source={require("../../assets/loginPage/background.jpg")} style={Styles.styleBase.backgroundImage}>
            <Image source={require("../../assets/loginPage/logo.png")} style={Styles.styleBase.imageLogo}></Image>
            <TextInput style={Styles.styleBase.email}/>
            <TextInput style={Styles.styleBase.passWord}/>
        </ImageBackground>
      </View>
    );
  }
}

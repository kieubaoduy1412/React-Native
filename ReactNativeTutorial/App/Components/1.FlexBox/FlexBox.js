/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class FlexBox extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box1} />
        <View style={styles.box2} />
        <View style={styles.box3} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20,
    /* Các item trong container là hướng dọc hay ngang */
    flexDirection: 'column',  // 'column', 'row'
    /* Vị trí các item ở trục chính */
    justifyContent: 'space-around', //'center', 'flex-start', 'flex-end', 'space-around', 'space-between'
    /* Vị trí của item ở trục phụ */
    alignItems: 'stretch', // 'center', 'flex-start', 'flex-end', 'stretch'
    backgroundColor: '#F5FCFF',
  },
  box1: {
    width: 100,
    height: 50,
    backgroundColor: 'powderblue',
    alignContent: 'center'
  },
  box2: {
    width: 100,
    height: 50,
    backgroundColor: 'skyblue'
  },
  box3: {
    height: 50,
    backgroundColor: 'red'
  },
  textBox: {
    height: 50,
    backgroundColor: 'red'
  }
});

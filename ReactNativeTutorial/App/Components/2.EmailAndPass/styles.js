import {Platform, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#1D2115',
      justifyContent: 'center',
      alignItems: 'center'
    },
    backgroundImage: {
      flex: 1,
      width: null,
      padding: 35,
      paddingBottom:50,
      justifyContent: 'center',
      alignItems: 'center'
    },
    imageLogo:{
      height: 150,
      width: 150,
      marginBottom: 60
    },
    email: {
      backgroundColor: '#C6A45D',
      opacity: 0.8,
      color: 'white',
      alignSelf:'stretch',
      alignContent: 'center',
      padding: 10,
      fontSize: 22
    },
    passWord: {
      marginTop: 20,
      backgroundColor: 'powderblue',
      alignSelf:'stretch',
      alignContent: 'center',
      padding: 10,
      fontSize: 22
    },
    buttonSignIn: {
      flex: 1,
      padding: 15,
      alignItems: 'center',
      backgroundColor: '#C6A45D'
    },
    textLogin:{
      fontSize: 22
    }
});

export default {
    styleBase : styles
}
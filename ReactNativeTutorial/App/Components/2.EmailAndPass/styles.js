import {Platform, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20,
      flexDirection: 'column'
    },
    backgroundImage: {
      flex: 1,
      width: null,
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center'
    },
    imageLogo:{
      height: 200,
      width: 200
    },
    email: {
      backgroundColor: '#1D2115',
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
});

export default {
    styleBase : styles
}
import React, {useEffect} from 'react'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import { WARNA_PUTIH, WARNA_TEXT } from '../../utils/warna'


import {Logo} from '../../assets'

const Splash = ({navigation}) => {
  useEffect(()=>{
    setTimeout( () =>{
      navigation.replace('MainApp');
    }, 4000)
  }, [navigation]);

  return (
   <ImageBackground source={Logo} style={styles.background}>
    <View>
        <Text style={styles.label}>Traveldays</Text>
        <Text style={styles.Text}>YOUR TRAVEL PARTNER</Text>
    </View>
   </ImageBackground>
  )
}

export default Splash

const styles = StyleSheet.create({
  background:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  label :{
    fontWeight: 'bold',
    fontSize: 50,
    color: WARNA_PUTIH
  
  },
  Text: {
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: -10,
    color: WARNA_PUTIH
  }

})
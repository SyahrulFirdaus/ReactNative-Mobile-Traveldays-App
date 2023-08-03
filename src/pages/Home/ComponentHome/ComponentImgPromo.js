import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { PulauPadar } from '../../../assets'
import { WARNA_PUTIH } from '../../../utils/warna'

const ComponentImgPromo = () => {
  return (
    <View>
      <ImageBackground source={PulauPadar} style={styles.ImgPromo}>
        <View style={styles.Container}>
        <Text style={styles.label}>#HealingEveryWhere</Text>
        </View>
      </ImageBackground>
    </View>
  )
}

export default ComponentImgPromo

const styles = StyleSheet.create({

    ImgPromo: {
        width: 400,
        height:120
    },
    label: {
        color: WARNA_PUTIH,
        fontWeight: 'bold',
        fontSize: 25,
        paddingLeft: 65,
        paddingVertical: 40
        
    },
  
})
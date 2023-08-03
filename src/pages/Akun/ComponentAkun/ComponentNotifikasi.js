import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { WARNA_HEADER, WARNA_PUTIH } from '../../../utils/warna'
import { Left, Pesan } from '../../../assets/icon'
import { WARNA_DISABLE } from '../../../utils/warna'

const ComponentNotifikasi = () => {
  return (

    <View>

    <View style={styles.header}>
      <Text style={styles.Labeljudul}>Notifikasi</Text>
      <Left style={{marginLeft:20, marginTop:-23}} />
    </View>

    <View style={styles.ViewPesan}>
    <Pesan />
    </View>
    <Text style={styles.labelContent}>Belum ada Notifikasi</Text>
    <Text style={styles.text}>Semua notifikasi yang kami kirim akan muncil di{"\n"}
    sini supaya Anda bisa mengeceknya dengan mudah{"\n"}
    kapan pun.</Text>
    </View>
    
  )
}

export default ComponentNotifikasi
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
    header: {
        backgroundColor: WARNA_HEADER,
        Width: windowWidth,
        height : windowHeight*0.13
    },
    Labeljudul: {
        marginTop: 50,
        color: WARNA_PUTIH,
        fontSize: 18,
        marginLeft: 60
    },
    ViewPesan: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 120
    },
    labelContent:{
      textAlign: 'center',
      fontSize:17,
      marginTop: -15
    },
    text: {
      textAlign: 'center',
      fontSize: 13,
      marginTop: 5,
      color: WARNA_DISABLE
    }
})
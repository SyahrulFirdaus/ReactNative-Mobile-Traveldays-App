import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { WARNA_PUTIH, WARNA_HEADER, WARNA_DISABLE } from '../../../utils/warna'
import { Pesan, Left } from '../../../assets/icon'

const ComponentChat = () => {
  return (
    <View>

    <View style={styles.header}>
      <Text style={styles.Labeljudul}>Pesan</Text>
      <Left style={{marginLeft:20, marginTop:-23}} />
    </View>

    <View style={styles.ViewPesan}>
    <Pesan />
    </View>
    <Text style={styles.labelContent}>Perlu bantuan terkait pesanan anda ?</Text>
    <Text style={styles.text}>Saat Anda menghubungi partner atau Customer{"\n"}
    Service kami untuk mendapatkan bantuan,{"\n"}
    percakapannya akan ditampilkan disini.</Text>
    </View>
  )
}

export default ComponentChat
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
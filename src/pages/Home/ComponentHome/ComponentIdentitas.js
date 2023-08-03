import { ImageBackground, StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { WARNA_KUNING, WARNA_PUTIH, WARNA_TEXT } from '../../../utils/warna'
import { Wallet } from '../../../assets'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const ComponentIdentitas = () => {
  return (
    <View style={styles.ContainerNama}>
    <View style={styles.nama}>
      <Text style={styles.labelNama}>Nama</Text>
      <Text style={styles.textNama}>Haura Nabilla Syakieb</Text>
    </View>

    <View style={{marginHorizontal: 1}}></View>

    <View style={styles.DaysPay}>
      <Text style={styles.labelDayspay}>DaysPay</Text>
      <View style={styles.wallet}>
        <ImageBackground source={Wallet} style={styles.ImgWallet}></ImageBackground>
      </View>
      <Text style={styles.textDayspay}>Rp. 20.000</Text>
    </View>
    </View>
    
  )
}

export default ComponentIdentitas
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
    ImgWallet: {
        flex: 1,
        width:14,
        height:14,

    },
    wallet: {
        
    },
    ContainerNama: {
        flexDirection: 'row',
    },
    nama : {
        backgroundColor: WARNA_PUTIH,
        paddingLeft: 20,
        paddingRight: 60,
        paddingVertical: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    labelNama : {
        fontWeight: 'bold',
        fontSize: 13,   
    },
    textNama: {
        fontSize: 9
    },
    DaysPay : {
        backgroundColor: WARNA_PUTIH,
        paddingLeft: 20,
        paddingRight: 120,
        paddingVertical: 7,
        paddingBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    labelDayspay : {
        fontWeight: 'bold',
        fontSize: 13,   
    },
    textDayspay: {
        fontSize: 9,
        marginLeft: 20,
        color: '#6B728E',
        fontWeight: '700',
        marginTop: -14
    }
})
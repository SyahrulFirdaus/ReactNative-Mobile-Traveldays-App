import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { WARNA_BODY, WARNA_HEADER, WARNA_KUNING, WARNA_PUTIH, WARNA_TEXT } from '../../../utils/warna'
import { Lokasi } from '../../../assets'

const ComponentBanner = () => {
  return (
    <View style={styles.Container}>
      <Text style={styles.label}>Dapatkan akses ke seluruh{"\n"}fitur Traveldays{"\n"}dengan memilih untuk{"\n"} 
      aktifkan lokasi sepanjang{"\n"}waktu
      !
      </Text>

      <View style={styles.bgBanner}>

      <TouchableOpacity>
        <View style={styles.pelajari}>
          <Text style={styles.TextPelajari}>Pelajari Lebih{"\n"}Lanjut</Text>
        </View>
      </TouchableOpacity>


      <View style={{marginHorizontal:20}}></View>
      
      <TouchableOpacity>
      <View style={styles.Aktifkan}>
        <Text style={styles.TextAktifkan}>Aktifkan lokasi</Text>
      </View>
      </TouchableOpacity>

      </View>
      <View style={styles.Lokasi}>
      <Lokasi/>
      </View>
      
  
    </View>
  )
}

export default ComponentBanner

const styles = StyleSheet.create({
    Container: {
        backgroundColor: WARNA_BODY,
        marginTop:20,
        height: 180
    },
    bgBanner:{
      flexDirection: 'row',
      marginLeft: 10,
      marginTop: 5
    },
    pelajari: {
      borderWidth:2,
      borderColor: '#B7C4CF',
      borderRadius: 5,
      paddingHorizontal: 20,
      paddingVertical: 5
    },
    Aktifkan: {
      backgroundColor: WARNA_HEADER,
      borderColor: '#B7C4CF',
      borderRadius: 5,
      paddingHorizontal: 20,
      paddingVertical: 5,
      height: 33
    },
    TextPelajari:{
      textAlign: 'center',
      color: WARNA_HEADER
    },
    TextAktifkan:{
      textAlign: 'center',
      color: WARNA_PUTIH,
      paddingVertical: 1
    },
    label :{
        textAlign: 'justify',
        paddingVertical: 4,
        color: '#000000',
        paddingLeft: 15,
        paddingTop: 15
    },
    TextLabel: {
        textAlign: 'center',
        fontSize: 10,
        fontWeight: '700',
        color: WARNA_TEXT,
        marginTop: -1,
        marginBottom: 5
    },
    Lokasi : {
      marginLeft: 170,
      marginTop: -155
    },

})
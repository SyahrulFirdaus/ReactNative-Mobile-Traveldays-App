import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { WARNA_PUTIH } from '../../../utils/warna'
import { RightArrow } from '../../../assets/icon'

const ComponentFitur = () => {
  return (
    <View style={styles.body}>

    <TouchableOpacity>
      <View style={styles.Container}>
        <Text style={styles.refund}>Refund Saya</Text>
        <Text style={styles.text}>Atur refund Anda di satu tempat</Text>

        <View style={styles.ContainerRightArrow}>
        <RightArrow style={styles.RightArrow}/>
        </View>

      </View>
    </TouchableOpacity>


    <TouchableOpacity>
      <View style={styles.Container}>
        <Text style={styles.TravelokaPay}>TravedaysPay</Text>
      </View>

      <View style={styles.ContainerRightArrow}>
        <RightArrow style={styles.RightArrow}/>
      </View>

    </TouchableOpacity>
    

    <TouchableOpacity>
      <View style={styles.Container}>
        <Text style={styles.RewardSaya}>RewardSaya</Text>
      </View>

      <View style={styles.ContainerRightArrow}>
        <RightArrow style={styles.RightArrow}/>
      </View>

    </TouchableOpacity>

    <TouchableOpacity>
      <View style={styles.Pengaturan}>
        <Text style={styles.refund}>Pengaturan</Text>
        <Text style={styles.text}>Lihat dan atur preferensi akun anda</Text>
      </View>

      <View style={styles.ContainerRightArrow}>
        <RightArrow style={styles.RightArrow}/>
      </View>

    </TouchableOpacity>


    <TouchableOpacity>
      <View style={styles.Bantuan}>
        <Text style={styles.refund}>Bantuan</Text>
        <Text style={styles.text}>Tentukan jawaban terbaik dari{"\n"}pertanyaan Anda</Text>
      </View>

      <View style={styles.ContainerRightArrow}>
        <RightArrow style={styles.RightArrow}/>
      </View>

    </TouchableOpacity>

      
      
    </View>
    
  )
}

export default ComponentFitur

const styles = StyleSheet.create({

  body :{
    marginTop:150
  },
    Container: {
        backgroundColor: WARNA_PUTIH,
        marginHorizontal:10,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
        
        marginTop: 10
    },
    Pengaturan: {
        backgroundColor: WARNA_PUTIH,
        marginHorizontal:10,
        borderTopLeftRadius: 5,
        borderTopRightRadius:5,
        marginTop: 10,
    },
    Bantuan: {
        backgroundColor: WARNA_PUTIH,
        marginHorizontal:10,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius:5,
        marginTop: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
        
    },
    refund: {
        fontWeight: 'bold',
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    text: {
      paddingLeft: 10,
      marginTop: -6,
      fontSize: 12,
      paddingBottom: 8,
      color: '#6B728E'
    },
    TravelokaPay: {
        fontWeight: 'bold',
        paddingVertical: 18,
        paddingHorizontal: 10,
    },
    RewardSaya: {
        fontWeight: 'bold',
        paddingVertical: 18,
        paddingHorizontal: 10,
    },
    ContainerRightArrow: {
      justifyContent:'center',
      alignItems: 'center',
      
    },
    RightArrow: {
      marginTop: -60,
      marginLeft: 290
    }
})
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { WARNA_HEADER, WARNA_PUTIH } from '../../../utils/warna'
import { RightArrow, Kupon, Reward, IconRefund, Bantuan, Pengaturan, Asuransi, Bill, Point, Emas, PayLater, TraveldaysPay, Saldo } from '../../../assets/icon'

const ComponentFiturLogin = () => {
  return (
    <View style={styles.body}>


    <Text style={styles.label}>Pembayaran Saya</Text>
    <TouchableOpacity>
      <View style={styles.Container}>
        <Text style={styles.refund}>PayLater</Text>
        <Text style={styles.text}>Daftar sekarang untuk menikmati promo{"\n"}khusus PayLater</Text>

        <View style={styles.ContainerRightArrow}>
        <RightArrow style={styles.RightArrow}/>
        </View>

        <View>
        <PayLater style={{marginTop: -55, marginLeft: 13}} / >
        </View>

      </View>
    </TouchableOpacity>


    <TouchableOpacity>
      <View style={styles.Pengaturan}>
        <Text style={styles.refund}>TraveldaysPay</Text>
        <Text style={styles.text}>Lihat dan atur preferensi akun anda</Text>
      </View>

      <View style={styles.ContainerRightArrow}>
        <RightArrow style={styles.RightArrow}/>
      </View>

      <View>
        <TraveldaysPay style={{marginTop: -45, marginLeft: 20}} / >
      </View>

    </TouchableOpacity>


    <TouchableOpacity>
      <View style={styles.Bantuan}>
        <Text style={styles.refund}>Saldo</Text>
        <Text style={styles.text}>Aktifkan dan nikmati pembayaran cepat{"\n"}dan praktis 24/7</Text>
      </View>

      <View style={styles.ContainerRightArrow}>
        <RightArrow style={styles.RightArrow}/>
      </View>

      <View>
        <Saldo style={{marginTop: -55, marginLeft: 20}} / >
      </View>

    </TouchableOpacity>

    <View style={{marginVertical:10}}></View>

    <Text style={styles.label}>Investasi Saya</Text>
    <TouchableOpacity>
      <View style={styles.Container}>
        <Text style={styles.refund}>Emas</Text>
        <Text style={styles.text}>Lihat Saldo Emas yang Anda miliki</Text>

        <View style={styles.ContainerRightArrow}>
          <RightArrow style={styles.RightArrow}/>
        </View>

        <View>
          <Emas style={{marginTop: -44, marginLeft: 17}} / >
        </View>

      </View>
    </TouchableOpacity>


    <View style={{marginVertical:10}}></View>

    <Text style={styles.label}>Reward Saya</Text>

    <TouchableOpacity>
      <View style={styles.Pengaturan}>
        <Text style={styles.refund}>0 Points</Text>
        <Text style={styles.text}>Tukar poin dengan kupon! Ketuk untuk{"\n"}pelajari lebih lanjut.</Text>
      </View>

      <View>
        <Point style={{marginTop: -45, marginLeft: 25}} / >
      </View>

      <View style={styles.ContainerRightArrow}>
        <RightArrow style={styles.RightArrow}/>
      </View>
    </TouchableOpacity>


    <TouchableOpacity>
      <View style={styles.RewardZone}>
        <Text style={styles.Reward}>Reward Zone</Text>
        <Text style={styles.text}>Cek program yang Anda ikuti atau mulai{"\n"}bermain untuk dapatkan hadiah.</Text>
      </View>

      <View>
        <Reward style={{marginTop: -50, marginLeft: 25}} / >
      </View>

      <View style={styles.ContainerRightArrow}>
        <RightArrow style={styles.RightArrow}/>
      </View>
    </TouchableOpacity>

    
    <TouchableOpacity>
      <View style={styles.KuponSaya}>
        <Text style={styles.Kupon}>Kupon Saya</Text>
        <Text style={styles.text}>Lihat kupon yang dapat anda gunakan{"\n"}sekarang</Text>
      </View>

      <View>
        <Kupon style={{marginTop: -50, marginLeft: 25}} / >
      </View>

      <View style={styles.ContainerRightArrow}>
        <RightArrow style={styles.RightArrow}/>
      </View>
    </TouchableOpacity>



    <View style={{marginVertical:20}}></View>

    <Text style={styles.label}>Investasi Saya</Text>

    <TouchableOpacity>
      <View style={styles.Container}>
        <Text style={styles.LabelContainer}>Tagihan Saya</Text>
        <Text style={styles.textContainer}>Satu tempat kelola lunasi{"\n"}tagihan anda</Text>
        <Text style={styles.jelajahi}>Jelajahi Tagihan Saya</Text>

        <View style={styles.ContainerRightArrow}>
        <RightArrow style={styles.RightArrow}/>
        </View>

        <View>
          <Bill style={{marginTop: -94, marginLeft: -13}} / >
        </View>

      </View>
    </TouchableOpacity>

    <View style={{marginVertical:20}}></View>

    <Text style={styles.label}>Asuransi Saya</Text>

    <TouchableOpacity>
      <View style={styles.Container}>
        <Text style={styles.LabelContainer}>Asuransi</Text>
        <Text style={styles.textContainer}>Akses polis Asuransi Anda kapan pun{"\n"}dan di mana pun.</Text>
        <Text style={styles.jelajahi}>Lihat Asuransi</Text>

        <View style={styles.ContainerRightArrow}>
        <RightArrow style={styles.RightArrow}/>
        </View>

        <View>
          <Asuransi style={{marginTop: -74, marginLeft: 20}} / >
        </View>

      </View>
    </TouchableOpacity>


    <View style={{marginVertical:20}}></View>

    <Text style={styles.label}>Fitur Member</Text>

    <TouchableOpacity>
      <View style={styles.Container}>
        <Text style={styles.refund}>Refund Saya</Text>
        <Text style={styles.text}>Atur refund Anda di satu tempat</Text>

        <View style={styles.ContainerRightArrow}>
         <RightArrow style={styles.RightArrow}/>
        </View>

        <View>
          <IconRefund style={{marginTop: -45, marginLeft: 12}} / >
        </View>

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

      <View>
        <Bantuan style={{marginTop: -48, marginLeft: 25}} / >

      </View>
    </TouchableOpacity>

    <TouchableOpacity>
      <View style={styles.Pengaturan}>
        <Text style={styles.refund}>Pengaturan</Text>
        <Text style={styles.text}>Lihat dan atur preferensi akun anda</Text>
      </View>

      <View>
       <Pengaturan style={{marginTop: -43, marginLeft: 25}} / >
      </View>

      <View style={styles.ContainerRightArrow}>
        <RightArrow style={styles.RightArrow}/>
      </View>

    </TouchableOpacity>
    </View>
    
  )
}

export default ComponentFiturLogin

const styles = StyleSheet.create({

  body :{
    marginTop:150,
    marginBottom: 15
  },
    Container: {
        backgroundColor: WARNA_PUTIH,
        marginHorizontal:10,
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
    RewardZone: {
        backgroundColor: WARNA_PUTIH,
        marginHorizontal:10,
        marginTop: 1,
        
    },
    KuponSaya: {
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
        paddingHorizontal: 60,
    },
    LabelContainer: {
      fontWeight: 'bold',
      paddingVertical: 10,
      paddingHorizontal: 90,
  },
    Kupon: {
        fontWeight: 'bold',
        paddingVertical: 10,
        paddingHorizontal: 60,
    },
     Reward: {
        fontWeight: 'bold',
        paddingVertical: 10,
        paddingHorizontal: 60,
    },
    textContainer: {
      paddingLeft: 90,
      marginTop: -6,
      fontSize: 12,
      paddingBottom: 8,
      color: '#6B728E'
    },
    text: {
      paddingLeft: 60,
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
        paddingVertical: 10,
        paddingHorizontal: 60,
    },
    ContainerRightArrow: {
      justifyContent:'center',
      alignItems: 'center',
      
    },
    RightArrow: {
      marginTop: -60,
      marginLeft: 290
    },
    label: {
        marginLeft: 11,
        color: '#6B728E'
    },
    jelajahi: {
        paddingLeft: 90,
        paddingBottom: 5,
        color: '#0F3460'
    }
})
import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { WARNA_PUTIH, WARNA_HEADER } from '../../utils/warna'
import { Search, Notification, Chat, Share,Rest, List } from '../../assets'
import ComponentTransaksi from './Component/ComponentTransaksi'


const Pesanan = ({navigation}) => {
  return (
    <View>
    <ScrollView showsVerticalScrollIndicator={false }>
   <View style={styles.header}>

   <TouchableOpacity>
   <View style={styles.search}>
     <Search style={styles.IconSearch}/>
   </View>
   </TouchableOpacity>

   <TouchableOpacity onPress={() => navigation.navigate('ComponentNotifikasi')}>
       <Notification style={styles.IconNotification}/>
   </TouchableOpacity>

   <TouchableOpacity onPress={() => navigation.navigate('ComponentChat')}>
       <Chat style={styles.IconChat}/>
   </TouchableOpacity>

   <TouchableOpacity onPress={() => navigation.navigate('ComponentChat')}>
       <List style={{marginTop:54, marginLeft:20}}/>
   </TouchableOpacity>



   </View>
   
   <Rest style={{marginTop:20}}/>
   <Text style={styles.label}>Belum Ada Pesanan Aktif</Text>
   <Text style={styles.text}>Temukan dibawah ini inspirasi untuk petualangan Anda{"\n"}
   berikutnya!</Text>

   <Text style={{paddingLeft: 20, fontSize:15, marginBottom: -10, marginTop:20}}>Semua Transaksi & Refund</Text>

   <TouchableOpacity>
    <ComponentTransaksi content="Daftar Pembelian Anda" image="Pembelian"/>
   </TouchableOpacity>
   
   <TouchableOpacity>
    <ComponentTransaksi content="Refund Anda" image="Refund"/>
   </TouchableOpacity>

   <TouchableOpacity>
    <ComponentTransaksi content="Transaksi Emas Anda" image ="Transaksi"/>
   </TouchableOpacity>

   <View style={{marginBottom:20}}></View>
      

   
   </ScrollView>
   </View>
   
  )
}

export default Pesanan
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  header : {
    backgroundColor : WARNA_HEADER,
    width: windowWidth,
    height: windowHeight*0.13,
    flexDirection: 'row'
  },
 
  search: {
    backgroundColor: WARNA_PUTIH,
    marginTop: 50,
    marginLeft: 23,
    paddingHorizontal: 90,
    borderRadius:10
},
IconSearch: {
    marginLeft:-80,
    marginVertical: 5,
   
},
IconNotification: {
    marginTop: 55,
    marginLeft: 20
},
IconChat : {
    marginTop: 57,
    marginLeft: 20
},
label: {
  fontSize: 16,
  textAlign:'center'
},
text : {
  textAlign: 'center',
  marginHorizontal: 20,
  fontSize: 12,
  marginTop: 10
}
})
import { StyleSheet, Text, View, Dimensions,TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import { WARNA_HEADER, WARNA_PUTIH } from '../../utils/warna'
import ComponentIdentitas from './ComponentHome/ComponentIdentitas'
import ComponentLayanan from './ComponentHome/ComponentLayanan'
import ComponentBanner from './ComponentHome/ComponentBanner'
import ComponentPrimer from './ComponentHome/ComponentPrimer'
import ComponentImgPromo from './ComponentHome/ComponentImgPromo'
import { Search, Notification, Chat, Lokasi } from '../../assets'


const HomeLogin = ({navigation}) => {
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
    </View>
    <ComponentIdentitas/>


    <View style={styles.ContainerLayanan}>
    
    <TouchableOpacity>
    <ComponentLayanan label="Kereta" title="kereta" />
    </TouchableOpacity>

    <View style={{marginHorizontal:-7}}></View>

    <TouchableOpacity>
    <ComponentLayanan label="KCIC" title="Kcic" />
    </TouchableOpacity>
   
    
    <View style={{marginHorizontal:-7}}></View>

    <TouchableOpacity>
    <ComponentLayanan label="Hotel" title="Hotel" />
    </TouchableOpacity>
   
    <View style={{marginHorizontal:-7}}></View>

    <TouchableOpacity>
    <ComponentLayanan label="Pesawat" title="LayananFlight" />
    </TouchableOpacity>
    
    </View>

    <View style={styles.ContainerLayanan2}>

    <TouchableOpacity>
    <ComponentLayanan label="Pembayaran" title="Payment" />
    </TouchableOpacity>
    
    <View style={{marginHorizontal:-7}}></View>

    <TouchableOpacity>
    <ComponentLayanan label="Internet" title="Internet" />
    </TouchableOpacity>
   
    <View style={{marginHorizontal:-7}}></View>

    <TouchableOpacity>
    <ComponentLayanan label="Bioskop" title="Bioskop" />
    </TouchableOpacity>

    <View style={{marginHorizontal:-7}}></View>
    
    <TouchableOpacity>
    <ComponentLayanan label="Roaming Data" title="Roaming" />
    </TouchableOpacity>


    </View>
    <ComponentBanner/>

    
    <View style={styles.ContainerPrimer}>

      <TouchableOpacity>
        <ComponentPrimer label="Voucher" title="Voucher"/>
      </TouchableOpacity>

    <View style={{marginHorizontal:10}}></View>

      <TouchableOpacity>
        <ComponentPrimer label="Promo" title="Promotions" />
      </TouchableOpacity>

    <View style={{marginHorizontal:10}}></View>

      <TouchableOpacity>
        <ComponentPrimer label="Voucher TV" title="Television"/>
      </TouchableOpacity>

    <View style={{marginHorizontal:10}}></View>

      <TouchableOpacity>
        <ComponentPrimer label="Token" title="Token"/>
      </TouchableOpacity>

    </View>
    <View>
    <ComponentImgPromo />
    </View>
    
    </ScrollView>
    </View>
    
  )
}

export default HomeLogin

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({

  header : {
    backgroundColor : WARNA_HEADER,
    width: windowWidth,
    height: windowHeight*0.15,
    flexDirection: 'row'
  },
  ContainerLayanan: {
    flexDirection: 'row',
    marginVertical: 20
  },
  ContainerLayanan2:{
    flexDirection: 'row',
    marginVertical: -10
  },
  ContainerPrimer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  search: {
    backgroundColor: WARNA_PUTIH,
    marginTop: 50,
    marginLeft: 23,
    paddingHorizontal: 115,
    borderRadius:10
},
IconSearch: {
    marginLeft:-108,
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
})
import { StyleSheet, Text, View, Dimensions,TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import { WARNA_HEADER } from '../../utils/warna'
import ComponentIdentitas from './ComponentHome/ComponentIdentitas'
import ComponentLayanan from './ComponentHome/ComponentLayanan'
import ComponentBanner from './ComponentHome/ComponentBanner'
import ComponentPrimer from './ComponentHome/ComponentPrimer'
import ComponentImgPromo from './ComponentHome/ComponentImgPromo'


const Home = () => {
  return (
    <View>
     <ScrollView showsVerticalScrollIndicator={false }>
    <View style={styles.header}>
      <Text>Home</Text>
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

export default Home

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({

  header : {
    backgroundColor : WARNA_HEADER,
    width: windowWidth,
    height: windowHeight*0.30
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
  }
})
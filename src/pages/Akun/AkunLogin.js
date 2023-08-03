import { StyleSheet, Text, View,Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { WARNA_HEADER, WARNA_PUTIH, WARNA_DISABLE } from '../../utils/warna'
import ComponentFiturLogin from './ComponentAkun/ComponentFiturLogin'
import { Search, Notification, Chat, Settings } from '../../assets/icon'
import LihatProfil from '../Home/ComponentHome/LihatProfil'

const AkunLogin = ({navigation}) => {
  return (
    <View>
    <ScrollView showsVerticalScrollIndicator={false }>

    <View style={styles.header}>
    <View style={styles.Container}>
    
    <TouchableOpacity >
    <View style={styles.search}>
      <Search style={styles.IconSearch}/>
    </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('ComponentNotifikasi')}>
        <Notification style={styles.IconNotification}/>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('ComponentChat')} >
        <Chat style={styles.IconChat}/>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('ComponentSetting')}>
        <Settings style={styles.IconSettings}/>
    </TouchableOpacity>
    </View>
      

      
      <View style={styles.bgProfil}>
        <Text style={styles.labelNama}>Haura Nabilla Syakieb</Text>
        <Text style={styles.Text}>Masuk dengan Google</Text>
        <Text style={styles.SubText}>0 Post</Text>

        <View style={styles.PhotoProfil}>
                <Text style={styles.TextPhotoProfil}>HN</Text>
        </View>
      
        <View style={styles.ButtonLihatProfil}>

        <TouchableOpacity onPress={()=> navigation.navigate('LihatProfil')}>
        <Text style={styles.label}>Lihat Profil Saya</Text>
        </TouchableOpacity>
        </View>

        <View style={{backgroundColor: WARNA_HEADER,marginTop: 20,marginHorizontal:30,borderRadius:10}}>
          <Text style={{textAlign:'center', fontWeight:'bold', color: WARNA_PUTIH,paddingVertical:5}}>WITH TRAVELDAYS</Text>
        </View>
     
        
      </View>
      
      <View style={{marginHorizontal:17}}></View>
      </View>
      

    <ComponentFiturLogin style={styles.ComponentFitur} />
    </ScrollView>
    </View>
  )
}

export default AkunLogin
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
  header: {
    backgroundColor: WARNA_HEADER,
    height: windowHeight*0.22,
    width: windowWidth
  },

  bgProfil: {
    backgroundColor: WARNA_PUTIH,
    height:windowHeight*0.20,
    marginVertical: 7,
    marginHorizontal: 5,
    borderRadius: 3,

  },
  label : {
    fontWeight: 'bold',
    paddingVertical: 7,
    textAlign: 'center',
    color: WARNA_PUTIH

  },

  ButtonLihatProfil: {
    backgroundColor: WARNA_HEADER,
    marginTop: 13,
    marginHorizontal: 10,
    borderRadius: 5
  },
  labelNama:{
    marginTop: 18,
    fontSize: 16,
    marginLeft: 110,
  },
  Text : {
    fontSize:10,
    marginLeft: 110,
    color: '#6B728E'
  },
  SubText : {
    fontSize:10,
    marginLeft: 110,
    color: '#6B728E'
  },
  Container: {
    flexDirection: 'row'
    },
    search: {
        backgroundColor: WARNA_PUTIH,
        marginTop: 50,
        marginLeft: 23,
        paddingHorizontal: 25,
        borderRadius:10
    },
    IconSearch: {
        marginLeft:-10,
        marginVertical: 5,
        marginHorizontal: 100
    },
    IconNotification: {
        marginTop: 55,
        marginLeft: 20
    },
    IconChat : {
        marginTop: 57,
        marginLeft: 20
    },
    IconSettings : {
        marginTop: 57,
        marginLeft: 20
    },
    PhotoProfil: {
      backgroundColor: WARNA_DISABLE,
      width: windowWidth*0.20,
      height: windowHeight * 0.10,
      marginLeft: 20,
      borderRadius:20,
      marginTop: -50
  },
  TextPhotoProfil: {
    textAlign: 'center',
    paddingTop: 14,
    fontSize: 30,
    fontWeight:'bold',
    color: WARNA_PUTIH
},
  
})
import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { WARNA_PUTIH, WARNA_HEADER } from '../../utils/warna'
import { Search, Notification, Chat, Rest} from '../../assets'


const Simpan = ({navigation}) => {
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

      
   <Rest style={{marginTop:20}}/>
   <Text style={styles.label}>Belum Ada Yang Di Simpan</Text>
   <Text style={styles.text}>Jelajahi Petualanganmu Yang Menyenangkan</Text>
     


      
      </ScrollView>
      </View>
   
  )
}

export default Simpan
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
    paddingHorizontal: 115,
    borderRadius:10
},
IconSearch: {
    marginLeft:-100,
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
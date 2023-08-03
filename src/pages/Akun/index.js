import { StyleSheet, Text, View,Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { WARNA_HEADER, WARNA_PUTIH } from '../../utils/warna'
import ComponentFitur from './ComponentAkun/ComponentFitur'



const Akun = () => {
  return (
    <View>
    <View style={styles.header}>
    <ComponentSearch/>
      <View style={styles.ContainerHeader}>
        

      <TouchableOpacity>
      <View style={styles.bgMasuk}>
        <Text style={styles.label}>Masuk</Text>
      </View>
      </TouchableOpacity>

      <View style={{marginHorizontal:17}}></View>


      <TouchableOpacity>
      <View style={styles.bgMasuk}>
        <Text style={styles.labelDaftar}>Daftar</Text>
      </View>
      </TouchableOpacity>


      </View>
      </View>

    <ComponentFitur />
    
    </View>
  )
}

export default Akun
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
  header: {
    backgroundColor: WARNA_HEADER,
    height: windowHeight*0.30,
    width: windowWidth
  },
 
  ContainerHeader :{
    flexDirection: 'row',
    marginLeft: 23,
    marginTop: 20,
  },
  bgMasuk: {
    backgroundColor: WARNA_PUTIH,
    marginVertical: 50,
    paddingHorizontal: 50,
    paddingVertical: 6,
    borderRadius: 5,

  },
  label : {
    fontWeight: 'bold'
  },
  labelDaftar : {
    fontWeight: 'bold'
  }
})
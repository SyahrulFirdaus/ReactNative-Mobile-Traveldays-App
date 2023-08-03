import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { WARNA_PUTIH } from '../../../utils/warna'
import { RightArrow, Pembelian, Refund, Transaksi } from '../../../assets'

const ComponentTransaksi = ({content,image}) => {
    const Icon =() => {
        if(image === "Pembelian") return <Pembelian style={{marginTop: -32, marginLeft: 35}}/>
        if(image === "Refund") return <Refund style={{marginTop: -34, marginLeft: 33}}/>
        if(image === "Transaksi") return <Transaksi style={{marginTop: -34, marginLeft: 33}}/>
    }
  return (
    <View>

 
    <View style={styles.Button}>
      <Text style={styles.text(content)}>{content}</Text>
    </View>

        <View style={styles.ContainerRightArrow}>
         <RightArrow style={styles.RightArrow}/>
        </View>
<View>
<Icon/>
</View>
    
    </View>
    
  )
}

export default ComponentTransaksi

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

    Button : {
        backgroundColor: WARNA_PUTIH,
        marginHorizontal: 20,
        borderRadius:10,
        marginTop:20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
        marginBottom: -10
    },
    text : (content) => ({
        paddingLeft: 50,
        paddingVertical:20,
      
    }),
    ContainerRightArrow: {
        justifyContent:'center',
        alignItems: 'center',
        
      },
      RightArrow: {
        marginTop: -38,
        marginLeft: 270
      },

    
})
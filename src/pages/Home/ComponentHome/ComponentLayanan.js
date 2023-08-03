import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { WARNA_BODY, WARNA_CONTENT, WARNA_HEADER, WARNA_KUNING, WARNA_PUTIH, WARNA_TEXT } from '../../../utils/warna'
import { LayananTrain, Kcic, Hotel, LayananFlight, Payment, Internet,Bioskop, Roaming } from '../../../assets'


const ComponentLayanan = ({title,label,label2}) => {
    const Icon = () => {
        if(title === "Kereta") return <LayananTrain/> 
        if(title === "Kcic") return <Kcic/> 
        if(title === "Hotel") return <Hotel/> 
        if(title === "LayananFlight") return <LayananFlight/> 
        if(title === "Payment") return <Payment/> 
        if(title === "Internet") return <Internet/> 
        if(title === "Bioskop") return <Bioskop/> 
        if(title === "Roaming") return <Roaming/> 
        return <LayananTrain/>
    }
  return (
    <View>


      <View style={styles.ContainerFlight}>
      <View style={styles.Flight}>
        <View style={styles.IconFlight}>
        <Icon/>
        </View>
        
        <Text style={styles.labelFlight(label)}>{label}</Text>
      </View>
      </View>
      
 

    </View>
  )
}

export default ComponentLayanan
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
   
    ContainerFlight: {
        flexDirection: 'row',
        marginLeft: 20,
        
    },
    Flight : {
        backgroundColor : WARNA_PUTIH,
        marginVertical: 1,
        borderRadius: 8,
        width: windowWidth*0.21,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
        
        
    },
    labelFlight: (label) => ( {
        textAlign: 'center',
        paddingBottom: 9,
        paddingTop: 5,
        fontSize: 10
    }),
    IconFlight: {
        paddingHorizontal: 20,
        paddingVertical: 9,
        backgroundColor: WARNA_HEADER,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
    },
  
})

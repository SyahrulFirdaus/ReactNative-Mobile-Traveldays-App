import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { WARNA_PUTIH, WARNA_HEADER} from '../../../utils/warna'
import { Voucher, Television, TokenListrik, Promotions } from '../../../assets'

const ComponentPrimer = ({label, title}) => {
  const Icon = () => {
    if(title === "Voucher") return <Voucher style={{marginLeft: 27}}/> 
    if(title === "Television") return <Television style={{marginLeft: 27}}/> 
    if(title === "Token") return <TokenListrik style={{marginLeft: 27}}/> 
    if(title === "Promotions") return <Promotions style={{marginLeft: 27}}/> 

    return <Voucher/>
}

  return (

    <View style={styles.ContainerFlight}>
    <View style={styles.Flight}>
      <View style={styles.IconFlight}>
      <Icon/>
      </View>
      
      <Text style={styles.labelFlight(label)}>{label}</Text>
    </View>
    </View>
  
  )
}

export default ComponentPrimer
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({

  ContainerFlight: {
    flexDirection: 'row',
    marginLeft: -12,
    marginVertical: 10,    
    
},
Flight : {
    backgroundColor : WARNA_PUTIH,
    marginVertical: 1,
    borderRadius: 8,
    width: windowWidth*0.21,
    height: windowHeight*0.08,
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
    paddingTop: 2,
    fontSize: 10
}),
IconFlight: {
   
    paddingVertical: 9,
    backgroundColor: WARNA_HEADER,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
},

})
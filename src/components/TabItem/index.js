import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { IconAkun } from '../../assets'
import { IconHome } from '../../assets'
import { IconPesanan } from '../../assets'
import { IconInbox } from '../../assets'
import { IconAkunActive } from '../../assets'
import { IconHomeActive } from '../../assets'
import { IconInboxActive } from '../../assets'
import { IconPesananActive } from '../../assets'




const TabItem = ({isFocused, onPress, onLongPress, label}) => {
    
    const Icon = () => {
        if(label === "Home") return isFocused ? <IconHomeActive/> : <IconHome/>
        if(label === "Pesanan") return isFocused ? <IconPesananActive/> : <IconPesanan/>
        if(label === "Inbox") return isFocused ? <IconInboxActive/> : <IconInbox/>
        if(label === "Akun") return isFocused ? <IconAkunActive/> : <IconAkun/>

        return <IconHome/>
    }
    return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={{ flex: 1 }}
    >
    <Icon/>
      <Text style={{ color: isFocused ? '#673ab7' : '#222' , fontSize: 11, paddingTop: 3}}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}

export default TabItem

const styles = StyleSheet.create({

})
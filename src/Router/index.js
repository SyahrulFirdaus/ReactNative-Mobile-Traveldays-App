import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home, Pesanan, Akun, Splash, HomeLogin,AkunLogin, Simpan} from '../pages';
import { BottomNavigator } from '../components';
import ComponentSetting from '../pages/Akun/ComponentAkun/ComponentSetting';
import ComponentNotifikasi from '../pages/Akun/ComponentAkun/ComponentNotifikasi';
import ComponentChat from '../pages/Akun/ComponentAkun/ComponentChat';
import LihatProfil from '../pages/Home/ComponentHome/LihatProfil';
import { WARNA_DISABLE } from '../utils/warna';




const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
        <Tab.Screen name="Home" component={HomeLogin} options={{headerShown: false}} />
        <Tab.Screen name="Pesanan" component={Pesanan} options={{headerShown: false}} />
        <Tab.Screen name="Simpan" component={Simpan} options={{headerShown: false}} />
        <Tab.Screen name="Akun" component={AkunLogin} options={{headerShown: false}} />

      </Tab.Navigator>
    )
}

const Router = () => {
  return (
    <Stack.Navigator initialRouteName='Splash'>
    <Stack.Screen name="MainApp" component={MainApp} options={{headerShown: false}} />
    <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} /> 
    <Stack.Screen name="ComponentSetting" component={ComponentSetting} options={{headerShown: false}} /> 
    <Stack.Screen name="ComponentNotifikasi" component={ComponentNotifikasi} options={{headerShown: false}} /> 
    <Stack.Screen name="ComponentChat" component={ComponentChat} options={{headerShown: false}} /> 
    <Stack.Screen name="LihatProfil" component={LihatProfil} options={{headerShown: false}} /> 
    </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({
 
})
import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Router from './src/Router'

const App = () => {
  return (
    <>    
    <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#54B435" translucent = {true}/>
     <NavigationContainer>
     <Router/>
    </NavigationContainer>
    </>
   
  )
}

export default App

const styles = StyleSheet.create({})
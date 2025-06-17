import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Sent from './Sent'

const Propstwo = () => {
    const name="ali"
  return (
    <View>
      <Text>parent  component</Text>
      <Sent name={"ali"} fatherName={" asad"} lastName={" ejaz"}/> 
    
      
    </View>
  )
}



export default Propstwo

const styles = StyleSheet.create({

    text:{
        color:"red"
    }
})
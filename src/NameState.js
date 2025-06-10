import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function NameState() {
    const[name,setName]=useState("Shehiryar")

  return (
    <View>
      <Text>{name}</Text>
      <Button title='click on' onPress={()=>setName("Asfand")}/>
      <Button title='submit' onPress={()=>setName('Ali')}/>  
    </View>
  )
}

const styles = StyleSheet.create({})
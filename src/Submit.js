import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Submit = () => {

    const handlebutton=()=>{
            
        console.log('press on button')
    }

  return (
    <View>
      <Text>Submit</Text>
      <Button title='click' onPress={handlebutton}/>
    </View>
  )
}


export default Submit

const styles = StyleSheet.create({})
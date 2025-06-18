import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const PropButton = (props) => {
  return (
    <View>
      <Text>PropButton</Text>

      <TouchableOpacity style={styles.click} onPress={()=>Alert.alert(props.title)}>

        <Text style={styles.text}>
            {props.title}
        </Text>

      </TouchableOpacity>
    </View>
  )
}

export default PropButton

const styles = StyleSheet.create({
    click:{
        backgroundColor:"green",
        height:40,
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color:'white',
        fontSize:20,
    }
})
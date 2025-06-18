import {Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const MyButtons = (props) => {
  return (
    <View>
<Text>MyButtons</Text>

<TouchableOpacity style={styles.button} onPress = { () => Alert.alert("submitted") } >
       
       <Text style={styles.text}>
       { props.title}
       </Text>

</TouchableOpacity>
          
    </View>
  )
}

export default MyButtons

const styles = StyleSheet.create({
    button:{
        backgroundColor:'blue',
        height:50,
        borderRadius:30,  
        justifyContent:"center",
        alignItems:"center",    
    },
    text:{
        fontSize:22,
        color:"white"
        

    }
})
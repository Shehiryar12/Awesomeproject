import { StyleSheet, Text, View,TouchableOpacity, Alert, Pressable } from 'react-native'
import React from 'react'

export default function TouchableComp() {
  return (
    <View>
      <Text>TouchableOpacity</Text>

      <TouchableOpacity style={styles.button} onPress={()=>Alert.alert("pressed")}
       activeOpacity={0.5} disabled={false}  onPressIn={()=>console.log('press in')} onPressOut={()=>console.log("press out")}
       testID='my-button'
        >
        <Text style={styles.text}>click</Text>
      </TouchableOpacity>

       <Pressable onPress={()=>console.log("onpress")}>
            <Text style={styles.press}>tab</Text>
       </Pressable>

    </View>
  )
}

const styles = StyleSheet.create({

    button:{
        backgroundColor:'green',
        height:70,
        justifyContent:'center',
        alignItems:'center',
        
        
    },
    text:{
       fontSize:22
    },
    press:{
        color:"red"
    }
})
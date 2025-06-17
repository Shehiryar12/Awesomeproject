import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

// const MyButton = (props) => {
 
//   return (
//     <View>
//       <Text>MyButton</Text>
//     <TouchableOpacity style={styles.button} onPress={()=>Alert.alert("submit")}>

//                <Text style={styles.text}>
//                 {props.title}

//                </Text>
//     </TouchableOpacity>

//     </View>
//   )
// }


const MyButton =(props)=>{

    return(
    <View>
<Text>MyButton</Text>

        <TouchableOpacity style={styles.button} onPress={()=>Alert.alert("This is product")}>
              
           <Text style={styles.text}>               
              {/* {props.title} */}
              {props.message}
           </Text>
        
        </TouchableOpacity>
    </View>
    )
}

export default MyButton

const styles = StyleSheet.create({

    button:{
        
        backgroundColor:"blue",
        height:50,
        justifyContent:"center",
        alignItems:"center"

    },
    text:{
         fontSize:18,
         color:"white"
    }
})
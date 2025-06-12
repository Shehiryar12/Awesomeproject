import React,{ useState } from "react";
import { View,Text, Button,StyleSheet } from "react-native";

const Add=()=>{

   const [count,addcount]=useState(0);
return(
     <View>
         <Text>kjb</Text>
         <Button title="submit" onPress={()=>count(addcount+1)}></Button>
   </View>
)
}

export default Add;

const styles = StyleSheet.create({})
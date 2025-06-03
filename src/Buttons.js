 import React from "react";

 import {Button,Text,View} from "react-native";

 const Btns= ()=>{
  
    // const data=1000 
    const Press= ()=>{
         console.log("warning")
    }

    return(
        <View>
        <Text style= {{fontSize:30}} >Press on button</Text>
        <Button title="PRESS" color="black" onPress={Press}></Button>
        <Button title="Click" color="blue" onPress={()=>Press("I am fine")}></Button>
      </View>
    );
      
 }

 export default Btns ;
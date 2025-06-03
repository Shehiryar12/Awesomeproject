 import React from "react";

 import {Button,Text,View} from "react-native";

 const Btns= ()=>{
  
    // const data=1000 
    const Press= ()=>{
         console.log("warning")
    }

    return(
    //     <View>
    //     <Text style= {{fontSize:30}} >Press on button</Text>
    //     <Button title="PRESS" color="black" onPress={Press}></Button>
    //     <Button title="Click" color="blue" onPress={()=>Press("I am fine")}></Button>
    //   </View>

    <View>
           <Text>Buttons</Text>  

           <View style={{padding:20}}>
              <Button title="PRESS"></Button>
            </View> 

            <View style={{padding:20,marginBottom: 20}}>
              <Button title="PRESS" color="red"></Button>
            </View>  

            <View style={{padding:20,marginBottom: 20}}>
              <Button title="PRESS" color="green"></Button>
            </View>         
    </View>


    );
      
 }

 export default Btns ;
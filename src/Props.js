import { useState } from "react";
import { Button, Text, View } from "react-native";

const Name =()=>{
  

    const[name,Setname]=useState('ali')
    return(
        <View>
            <Text style={{fontSize:20,backgroundColor:'green',padding:5}}>Props</Text>                           
            {/* <Username name={name}/> */}

             <Username name={name} age={24}/> 

             <Button title="update" onPress={()=>Setname('ahmed')}/>
        </View>
    );
};


const Username =(props)=>{
      
    console.log(props)
    return(
       <View>
            <Text style={{fontSize:20,backgroundColor:'red',padding:5}}>{props.name}</Text>
              <Text style={{fontSize:20,backgroundColor:'red',padding:5}}>{props.age}</Text>
        </View>
    );
};

export default Name;


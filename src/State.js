//  import React,{useState} from 'react'
//  import{View,Text, Button, TextInput} from "react-native"


// export default function Hello(){

// const [inputText, setInputText]=useState("");


// const input=(type)=>{
//      setInputText(type)
// }
// console.log(inputText)


//     return(
            
//         <View>
//             <Text>ali</Text>

//              <TextInput 

//              onChangeText={r=>input(r)}
//     />
//         </View>

   

//     );
// };

 import React,{useState} from 'react'
 import{View,Text, Button} from "react-native"

function Hello(){

    const[count,setcount]=useState(3)
    return(
        <View>
            <Text style={{fontSize:20}}>
                 {count}
            </Text>
            <Button title='update' onPress={()=>setcount(count+1)} />    
        </View>
    );
}

export default Hello;
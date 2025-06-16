// import {Text,View, FlatList, StyleSheet} from 'react-native'
// import React from 'react'

// const FlatlistDemo = () => {

//      const names = [
//         {
//             name:"shehiryar",
//             email:"123@gmail.com"
//         },

//         {
//             name:"asad",
//             email:"123@gmail.com"

//         },

//         {
//             name:"nouman",
//             email:"123@gmail.com"

//         },

//         {
//             name:"rizwan",
//             email:"123@gmail.com"

//         },

//         {
      
//             name:"wahab",
//         },
//      ]
//   return (
//     <>
//   <FlatList data={names}
//         keyExtractor={(item, index) => index.toString()}

//     renderItem={({ item }) => (
//         <Text style={styles.textstyle}>{item?.name}</Text>

//       )} />
      
//     </>

// )
// };

// export default FlatlistDemo

// const styles = StyleSheet.create({

//     textstyle:{
//         fontSize:22,
//     }

//  })


// ------------------------------------------------------------------------------


// 
// ----------------------------------------------------------------------------

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const Flatlist= () => {

//     const profile = [
        
//             {name:"ali",gmail:"123@gmail.com"},

//         ];
//     console.log(profile[0].name)
//     console.log(profile[0].gmail)

//   return (
//     <View>
//       <Text>Flatlist</Text>
//     </View>
//   );

// };

// export default Flatlist

// const styles = StyleSheet.create({})

// -----------------------------------------------------------------------------

import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatlistDemo = () => {

const card = [
     {name:'Ali',email:"ali@gmail.com"},
     {name:'uansdk',email:"ali1@gmail.com"},

] 
  return (

<FlatList
  data={card}
  renderItem={({ item }) => {
    // console.log(item.name)
    // console.log(item.email)
    return (
      <View>
        <Text>{item?.name}</Text>
        <Text>{item?.email}</Text>  
        { console.log(item.email)  }
      </View>
    );
  }}
/>

   

  )
}

export default FlatlistDemo

const styles = StyleSheet.create({})
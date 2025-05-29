// // import {
// Text, View
//  } from "react-native"

// // const App = () => {
// //     return(
// //         <View>
// //             <Text>hello world</Text>
// //         </View>
// //     )
// // }

// // export default App

// export default MyComponent;
// import {
//     StyleSheet,
//     Text,
//     View
//   } from "react-native";

//   const App = () => {
//         return(

//        <View style={styles.container}>
//             <Text style={{fontSize:40}}>This is responsive website</Text>
//        </View>

//         )
//     }

//     const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         backgroundColor: 'green',
//       }
//   })

//   export default App;

// <View style={styles.container}>
//        <Text  style={{fontSize:40}}>How are you</Text>
// </View>

//   const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         backgroundColor: 'red'
//     }
//   })

import {Text, View, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.main}>
      <View style={styles.box1}>
        <View style={styles.InnerBox1}><Text>abc</Text> </View>
         <View style={styles.InnerBox2}><Text>def</Text> </View>
        <View style={styles.InnerBox3}><Text>ghi</Text> </View>

      </View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
      <View style={styles.box4}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  box1: {
    flex: 1,
       backgroundColor:"green",
    
  },
  box2: {
    flex: 1,
    backgroundColor: 'blue',
  },
  box3: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  box4: {
    flex: 1,
    backgroundColor: 'orange',
    // marginLeft:30
  },
   InnerBox1: {
      flex: 1,
      backgroundColor: 'red',
      margin:20,

    //   marginRight:20,
    //   marginTop:30,
    //   bottom:50
 },
 
 InnerBox2: {
      flex: 1,
      backgroundColor: 'grey',
      margin:20,
 },
 
  InnerBox3: {
      flex: 1,
      backgroundColor: 'pink',
      margin:20,
 }
}
)
export default App;

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
import Name from './src/UI';
 import Ali from './src/UI';
 import Asfi from './src/components';
import Btns from './src/Buttons';
 import Hunain from './src/UI';
  import Raza from './src/UI';
  import Person from './src/Textinput';
    import Men from './src/Textinputtwo';
    import Hello from './src/State';










const App = () => {
  return (
    //  <Ali/>
      //  <Btns />
        // <Person />
          // <Text>Ahmed</Text>
    //     </View>
    //     <View style={styles.InnerBox2}>
    //       <Text>Asfand</Text>
    //     </View>
    //     <View style={styles.InnerBox3}>
    //       <Text>Shahzaib</Text>
    //     </View>
    //   </View>
    //   <View style={styles.box2}>
    //     <View style={styles.InnerBox4}>
    //       <Text>Shehiryar</Text>
    //     </View>
    //     <View style={styles.InnerBox5}>
    //       <Text>Zahid</Text>
    //     </View>
    //     <View style={styles.InnerBox6}>
    //       <Text>Ali</Text>
    //     </View>
    //   </View>
    //   {/* <View style={styles.box4}></View>  */}
    // </View>
  //  <Men />
      // <Demo />
      <Hello />
  );
  };

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  box1: {
    flex: 1,
    backgroundColor: 'green',
  },

  box2: {
    flex: 1,
    backgroundColor: 'yellow',
  },

  InnerBox1: {
    flex: 1,
    backgroundColor: 'red',
    margin: 20,
    paddingTop: 20,
    paddingLeft: 20,
    paddingbottom: 20,

    //   marginRight:20,
    //   marginTop:30,
    //   bottom:50
  },

  InnerBox2: {
    flex: 1,
    backgroundColor: 'grey',
    margin: 20,
    paddingTop: 20,
    paddingLeft: 20,
  },

  InnerBox3: {
    flex: 1,
    backgroundColor: 'pink',
    margin: 20,
    paddingTop: 20,
    paddingLeft: 20,
  },
  InnerBox4: {
    flex: 1,
    backgroundColor: 'blue',
    margin: 20,
    paddingTop: 20,
    paddingLeft: 20,
  },
  InnerBox5: {
    flex: 1,
    backgroundColor: 'indigo',
    margin: 20,
    paddingTop: 20,
    paddingLeft: 20,
  },
  InnerBox6: {
    flex: 1,
    backgroundColor: 'saddlebrown',
    margin: 20,
    paddingTop: 20,
    paddingLeft: 20,
  },
});

export default App;

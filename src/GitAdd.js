import React from 'react';
import { Text, Button, StyleSheet, View } from 'react-native';
import AntiClippyL from './AntiClippyL'
import {Animated} from 'react-animated-css';

const GitAdd = () => {
return(
<View style={styles.container}>
      <View style={styles.brownBox}><Text style={styles.title}>Git Add</Text>
      <View style={styles.circle1}>
      <Animated animationOnMount="bounceInLeft"><AntiClippyL style={styles.AntiClippy}/></Animated>
      <Text style={styles.p}>Saves a snapshot of a file or all files you have changed. Type <Text style={{ fontWeight: 'bold' }}>git add .</Text> to add files.</Text>
      
     
      </View>
      </View>
         <Button 
         //onPress = {goToStash}
         title= "GitGoing to Git Stash"
         color='#FF6D70'
         />
      </View>
)
}

//style
const styles = StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor: '#4A4843',
       alignItems: "center",      
     },
     
    title: {
     color: '#FF6D70',
     fontWeight: 'bold',
     justifyContent: 'center',
     alignItems: 'center',
     flexDirection: 'column',
     fontSize: 60,
     textShadowColor: 'rgba(0, 0, 0, 0.75)',
     textShadowOffset: {width: -1, height: 1},
     textShadowRadius: 10,
     marginTop: '1%',
     paddingTop: '3%',
     
    },
    //white circle
   circle1: {
    backgroundColor: '#fff',
    width: '100%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '30%',
    borderColor: '#4A4843',
    borderWidth: 15,
    marginTop: '1%',
    flexDirection: 'row',
    
  },
  //brown box
  brownBox: {
    backgroundColor: '#A79B82',
    width: 410,
    height:'75%',
    justifyContent: 'center',
    alignItems: "center",
    borderRadius: 220,
    marginTop: '2%',
    paddingBottom: 5,
  },
 
 //logo
  AntiClippy: {
    flexDirection: 'row',
    alignItems: 'center',
  },
 
  
  button: {
     color:'#FF6D70',
     marginTop: '3%',
  },
  p:{
     color: 'black',
     width: 200,
     flexDirection: 'row',
     alignItems: 'center',
     fontSize: 18,
 
  },
});
export default GitAdd;
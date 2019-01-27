import React from 'react';
import { Text, Button, StyleSheet, View } from 'react-native';
import AntiClippyL from './AntiClippyL'
import {Animated} from 'react-animated-css';

const GitClone = () => {
    return (
       <View style={styles.container}>
       <View style={styles.brownBox}>
       <Animated animationOnMount="zoomInDown"><Text style={styles.title}>Git Clone</Text></Animated>
       <View style={styles.circle1}>
       <AntiClippyL style={styles.AntiClippy}/> 
       <Text style={styles.p}>This is how you copy a repo (repository) you or someone else created to your computer. Type <Text style={{ fontWeight: 'bold' }}>git clone </Text> then paste the link from GitHub and watch the magic!</Text>
       
      
       </View>
       </View>
          <Button 
          //onPress = {goToStatus}
          title= "GitGoing to Git Status"
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
     fontSize: '7%',
     textShadowColor: 'rgba(0, 0, 0, 0.75)',
     textShadowOffset: {width: -1, height: 1},
     textShadowRadius: 10,
     marginTop: '15%',
     paddingTop: '8%',
     
    },
    //white circle
   circle1: {
    backgroundColor: '#fff',
    width: '100%',
    height: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    borderColor: '#4A4843',
    borderWidth: 15,
    marginTop: '3%',
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  //brown box
  brownBox: {
    backgroundColor: '#A79B82',
    width: '90%',
    height: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 120,
    marginTop: '2%',
    paddingBottom: '1%',
  },
 
 //logo
  AntiClippy: {
    flexDirection: 'row',
    alignItems: 'center',
  },
 
  
  button: {
     color:'#FF6D70',
     marginTop: '1%',
  },
  p:{
     color: 'black',
     width: 200,
     flexDirection: 'row',
     alignItems: 'center',
     fontSize: 18,
 
  },
 
 
  });
 export default GitClone
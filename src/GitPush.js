import React from 'react';
import { Text, Button, StyleSheet, View } from 'react-native';
import AntiClippy from './AntiClippy'
import {Animated} from 'react-animated-css';

const GitPush = () => {
    return (
       <View style={styles.container}>
       <View style={styles.brownBox}><Text style={styles.title}>Git Push</Text>
       <View style={styles.circle1}>
        
       <Text style={styles.p}>Push is how we send all of the changes you added then committed to GitHub. Type <Text style={{ fontWeight: 'bold' }}>git push</Text> to upload your project.</Text>
       <Animated animationOnMount="bounceInRight"><AntiClippy style={styles.AntiClippy}/></Animated>
      
       </View>
       </View>
          <Button 
          //onPress = {goToQuestion}
          title= "Git Answers"
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
     fontSize: '5%',
     textShadowColor: 'rgba(0, 0, 0, 0.75)',
     textShadowOffset: {width: -1, height: 1},
     textShadowRadius: 10,
     marginTop: 0,
     paddingTop: '8%',
     
    },
    //white circle
   circle1: {
    backgroundColor: '#fff',
    width: '100%',
    height: '65%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 200,
    borderColor: '#4A4843',
    borderWidth: 15,
    marginTop: '1%',
    flexDirection: 'row'
    
  },
  //brown box
  brownBox: {
    backgroundColor: '#A79B82',
    width: '100%',
    height: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 220,
    marginTop: '2%',
    paddingBottom: '3%',
  },
 
 //logo
  AntiClippy: {
    flexDirection: 'row',
    alignItems: 'center',
  },
 
  
  button: {
     color:'#FF6D70',
     marginTop: '5%',
  },
  p:{
     color: 'black',
     width: 200,
     flexDirection: 'row',
     alignItems: 'center',
     fontSize: 18,
 
  },
 
 
  });
 export default GitPush
import React from 'react';
import { Text, Button, StyleSheet, View } from 'react-native';
import {Link} from 'react-router-dom';
import AntiClippyL from './AntiClippyL'
import {Animated} from 'react-animated-css';

const GitStash = () => {
    return (
       <View style={styles.container}>
       <View style={styles.brownBox}><Text style={styles.title}>Git Stash</Text>
       <View style={styles.circle1}>
       <Animated animationOnMount="bounceInLeft"><AntiClippyL style={styles.AntiClippy}/></Animated>
       <Text style={styles.p}>Stores incomplete changes. Type <Text style={{ fontWeight: 'bold' }}>git stash </Text> to save files without committing.</Text>
       
      
       </View>
       </View>
         <Link to={'/GitCommit'}>
          <Button 
          title= "GitGoing to Git Commit"
          color='#FF6D70'
          /></Link>
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
    flexDirection: 'row',
    
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
 export default GitStash
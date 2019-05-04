import React from 'react';
import { Text, Button, StyleSheet, View } from 'react-native';
import {Link} from 'react-router-dom';
import AntiClippy from './AntiClippy'
// import {Animated} from 'react-animated-css';

const GitCommit = () => {
    return (
       <View style={styles.container}>
       <View style={styles.brownBox}>
       <Text style={styles.title}>Git Commit</Text>
       <View style={styles.circle1}>
        
       <Text style={styles.p}>This saves the work you added earlier by using git add. Type <Text style={{ fontWeight: 'bold' }}>git commit -m "initial commit"</Text> to save your files. The "initial commit" is your message to track changes. Feel free to change the message.</Text>
       <AntiClippy style={styles.AntiClippy}/>
      
       </View>
       </View>
         <Link to={'/GitReset'}>
          <Button 
          title= "GitGoing to Git Reset"
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
      height: '60%',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 100,
      borderColor: '#4A4843',
      borderWidth: 15,
      marginTop: '3%',
      flexDirection: 'row',
      
    },
  //brown box
  brownBox: {
   backgroundColor: '#A79B82',
   width: '90%',
   height: '70%',
   alignItems: 'center',
   justifyContent: 'center',
   borderRadius: 120,
   marginTop: '3%',
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
 export default GitCommit
import React from 'react';
import { Text, Button, StyleSheet, View } from 'react-native';
import {Link} from 'react-router-dom';
import AntiClippy from './AntiClippy'
import {Animated} from 'react-animated-css';

const GitStatus = () => {
    return (
       <View style={styles.container}>
       <View style={styles.brownBox}>
       <Text style={styles.title}>Git Status</Text>
       <View style={styles.circle1}>
       <Text style={styles.p}>View any changes that have been made or items ready to be committed. Type <Text style={{ fontWeight: 'bold' }}>git status </Text>If items are RED, they have not been added yet. If items are GREEN they are ready to commit.</Text> 
       <Animated animation="bounceInRight"><AntiClippy style={styles.AntiClippy}/></Animated>
      
       </View>
       </View>
         <Link to={'/GitPull'}>
          <Button 
          title= "GitGoing to Git Pull"
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
 export default GitStatus
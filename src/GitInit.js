import React from 'react';
import { Text, Button, StyleSheet, View } from 'react-native';
import {Link} from 'react-router-dom';
import AntiClippy from './AntiClippy'
import {Animated} from 'react-animated-css';

const GitInit = () => {
  
    return (
       <View style={styles.container}>
       
       <View style={styles.brownBox}><Animated animationOnMount="zoomInUp"><Text style={styles.title}>Git Init</Text></Animated>
       <View style={styles.circle1}>
        
       <Text style={styles.p}>This how you can save a new local repository (aka repo) to your machine. Type <Text style={{ fontWeight: 'bold' }}>git init </Text> to add a new empty repo to your machine.</Text>
       <AntiClippy style={styles.AntiClippy}/>
       
       </View> 
       </View>
         <Link to={'/GitClone'}>
          <Button 
          title= "GitGoing to Git Clone"
          color='#FF6D70'
          />
          </Link>
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
    height: '75%',
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
 
 export default GitInit
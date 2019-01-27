import React, {Component} from 'react';
import { Text, Button, StyleSheet, View, TextInput } from 'react-native';
import AntiClippyHalf from './AntiClippyHalf'
import {Animated} from 'react-animated-css';
import fire from './db/fire';

export default class InputBox extends Component {

    constructor(props){
      super(props)
  
      this.state = ({
        email: '',
        password: ''
      })
    }
    
  render(){
     return (
      
        <View style={styles.container}>
        <View style={styles.textBox1}>
        <View style={styles.circle}>
        <Animated animationOnMount="fadeInDown"><AntiClippyHalf style={styles.AntiClippyHalf}/></Animated>
        <Animated animationOnMount="rubberBand"><Text style={styles.title}>GitGoing</Text></Animated>
        </View>
        <form>
      <View style={styles.textInput1}>
      <TextInput 
                onChangeText={(text) => this.setState({email: text})} 
                placeholder = "Email"
                value={this.state.email} 
                autoCorrect = {false}
                autoCapitolize = "none"
                />
      </View> 
      <View style={styles.textInput}>
      <TextInput 
                    onChangeText={(text) => this.setState({password: text})} 
                    placeholder = "Password"
                    value={this.state.password} 
                    secureTextEntry = {true}
                    autoCorrect = {false}
                    autoCapitalize = "none"
                />
      </View> 
      <View>
        <Button 
            title= "LogIn"
            full
            rounded
            success
            onPress = {() => fire.loginUser(this.state.email, this.state.password)}
            color= "#FF6D70"
        />
        </View>
        <View>
        <Button 
            title= "SignUp"
            full
            rounded
            success
            onPress = {() => fire.signUpUser(this.state.email, this.state.password)}
            color= "#FF6D70"  
        />   
      </View>
      </form>
        </View>  
           <Button 
           //onPress = {goToGitInit}
           title= "GitGoing to Git Init"
           color='#FF6D70'
           />  
        <Text style={styles.p}>Would you like to learn more?</Text>
        </View>
       
     )
  }
  }
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
      fontSize: 40,
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10,
      marginTop: 0,
      marginBottom: '1%',
     },
     //white circle
    circle: {
     backgroundColor: '#fff',
     width: '90%',
     height: '50%',
     alignItems: 'center',
     justifyContent: 'center',
     borderRadius: '100%',
     borderColor: '#4A4843',
     borderWidth: 25,
     marginTop: '25%',
     
   },
   //brown box
   textBox1: {
     backgroundColor: '#A79B82',
     width: '100%',
     height: '40%',
     alignItems: 'center',
     justifyContent: 'center',
     marginTop: "2%",
   },
  
  //logo
   AntiClippyHalf: {
     flex: 1,
     width: '20%',
     height: '20%',
     
   },
  
   //username
   textInput1: {
     color: 'black',
     borderWidth: 2,
     borderColor: 'black',
     backgroundColor: '#FFF',
     borderRadius: 20,
     width: '50%',
     height: '5%',
     marginTop: '5%',
     alignItems: 'center',   
     
   },
  
   //password
   textInput: {
     color: 'black',
     borderWidth: 2,
     borderColor: 'black',
     backgroundColor: '#FFF',
     borderRadius: 20,
     width: '50%',
     height: '5%',
     marginTop: '1%',
     marginBottom: '1%',
     alignItems: 'center',
   },
  
   p:{
      color: 'white',
   },
  
  
   });
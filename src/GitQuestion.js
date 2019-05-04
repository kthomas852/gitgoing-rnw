import React, {Component} from 'react';
import { Text, Button, StyleSheet, View, TextInput } from 'react-native';
import {Link} from 'react-router-dom';
import AntiClippy from './AntiClippy'
import {Animated} from 'react-animated-css';
import { askClip } from './QA/anticlipQA';

export default class InputBox extends Component {

    constructor(props){
        super(props)
    
        this.state = ({
        question: '',
        return: '',
        })
    }
    
    componentDidMount(){
       this.setState({return: 'Have Questions?  Ask Anti-Clippy what kind of Git operation you need help with...'})
    }
    
    render(){
       return (
          <View style={styles.container}>
         
          <Text style={styles.title}>Got Questions</Text>
          <View style={styles.circle1}>
          <Text style={styles.p}>{this.state.return}</Text> 
          <Animated animation="bounceInRight"><AntiClippy style={styles.AntiClippy}/></Animated>
         
     
          </View>
          <form>
          <TextInput style={styles.textInput1}
            placeholder="   Your Git Question Here..."
            onChangeText={(text) => this.setState({question: text})}
            value={this.state.question} 
            autoCorrect = {false}
            ></TextInput>
            <View style={styles.stdBTN}>
             <Button 
             onPress = {() => this.setState({return: askClip(this.state.question), question: ''})}
             title= "Ask Anti-Clippy"
             color='#FF6D70'
             />
             </View>
             <View style={styles.stdBTN}>
             <Link to={'/GitInit'}>
             <Button 
             style={styles.stdBTN}
             title= "GitGoing Back Home"
             color='#FF6D70'
             /></Link></View>
          </form>
          </View>
             
             
       )
    }
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
       width: 400,
       height: '50%',
       justifyContent: 'center',
       borderRadius: 200,
       borderColor: '#4A4843',
       borderWidth: 15,
       marginTop: '1%',
       flexDirection: 'row',
       alignItems: 'center',
       
     },
     //brown box
     brownBox: {
       backgroundColor: '#A79B82',
       width: '10%',
       height: '100%',
       alignItems: 'center',
       justifyContent: 'center'
     },
    
    //logo
     AntiClippy: {
       flexDirection: 'row',
       alignItems: 'center',
     },
    
     
     button: {
        color:'#FF6D70',
        marginTop: '3%',
        marginBottom: '1%',
     },
     p:{
        color: 'black',
        width: 200,
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: 18,
    
     },
     textInput1: {
       color: 'black',
       borderWidth: 2,
       borderColor: 'black',
       alignItems:'center',
       justifyContent:'center',
       backgroundColor: '#FFF',
       borderRadius: 20,
       width: '120%',
       height: '5%',
       marginTop: '3%',
          
       
     },
    
     stdBTN: {
      margin: '3%'
      }
    
     });
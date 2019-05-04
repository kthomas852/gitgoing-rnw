// import React from 'react';
// import ReactDOM from 'react-dom';
import {AppRegistry} from 'react-native-web';
import App from './App';
//import './index.css'

AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication('App', {
    rootTag: document.getElementById('root')
})

//ReactDOM.render(<App/>, document.getElementById('root'));

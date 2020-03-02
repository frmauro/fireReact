import React, { Component } from 'react';
import firebase from 'firebase';


export default class App extends Component{

constructor(props){
  super(props);
  this.state = {
    token: 'Carregando.....',
    nome: '',
    idade: ''
  };

    // Your web app's Firebase configuration
    let firebaseConfig = {
      apiKey: "AIzaSyDzvIVbjQyLtmNfRSsVoKFE6siAvLJNll4",
      authDomain: "reactapp-68414.firebaseapp.com",
      databaseURL: "https://reactapp-68414.firebaseio.com",
      projectId: "reactapp-68414",
      storageBucket: "reactapp-68414.appspot.com",
      messagingSenderId: "288792218326",
      appId: "1:288792218326:web:b7a13bd46ee2aa07c49777",
      measurementId: "G-5F2BJTZH7X"
    };

    //if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    //}
    // Initialize Firebase
   

    /*firebase.database().ref('token').on('value', (snapshot) => {
          let state = this.state; 
          state.token = snapshot.val();
          this.setState(state);
    });
    */

    firebase.database().ref('usuarios').child('token').once('value').then((snapshot) => {
        let state = this.state; 
        state.token = snapshot.val();
        console.log(state.token);
        this.setState(state);
    });

    firebase.database().ref('usuarios').child(1).once('value').then((snapshot) => {
      let state = this.state; 
      state = snapshot.val();
      //console.log(state.token);
      this.setState(state);
  });


}


  render(){

    const { token, nome, idade } = this.state;

    return(
        <div>
          <h1>token: {token}</h1>
          <h1>nome: {nome}</h1>
          <h1>idade: {idade}</h1>
        </div>
    );
  }
}
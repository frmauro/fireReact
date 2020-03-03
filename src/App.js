import React, { Component } from 'react';
import firebase from 'firebase';


export default class App extends Component{

constructor(props){
  super(props);
  this.state = {
    tokenInput: '',
    token: 'Carregando.....',
    nomeInput: '',
    nome: '',
    idadeInput: '',
    idade: ''
  };

  this.cadastrar = this.cadastrar.bind(this);

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
   

    firebase.database().ref('token').on('value', (snapshot) => {
          let state = this.state; 
          state.token = snapshot.val();
          console.log(state);
          this.setState(state);
    });
    

    // firebase.database().ref('usuarios').child('token').once('value').then((snapshot) => {
    //     let state = this.state; 
    //     state.token = snapshot.val();
    //     console.log(state.token);
    //     this.setState(state);
    // });

    firebase.database().ref('usuarios').child(1).once('value').then((snapshot) => {
      let state = this.state; 
      state = snapshot.val();
      console.log(state);
      this.setState(state);
  });


}


cadastrar(e){
  //console.log(this.state.tokenInput);
  //Inserindo um novo dado!
  //firebase.database().ref('token').set(this.state.tokenInput);

  let usuarios = firebase.database().ref('usuarios');
  let chave = usuarios.push().key;
  usuarios.child(chave).set({
      nome: this.state.nomeInput,
      idade: this.state.idadeInput
  })
  e.preventDefault();

}

  render(){

    const { token, nome, idade } = this.state;

    return(
        <div>

         <form onSubmit={this.cadastrar}>
           <input type="text" value={this.state.idadeInput} onChange={(e) => this.setState({idadeInput: e.target.value}) } /><br />
           <input type="text" value={this.state.nomeInput} onChange={(e) => this.setState({nomeInput: e.target.value}) } /><br />
           <button type="submit">Cadastrar</button>
         </form>

          <h1>token: {token}</h1>
          <h1>nome: {nome}</h1>
          <h1>idade: {idade}</h1>
        </div>
    );
  }
}
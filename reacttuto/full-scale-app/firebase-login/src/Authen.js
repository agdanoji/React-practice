import React,{Component} from 'react';
var firebase = require('firebase');
var config = {
    apiKey: "AIzaSyBdTzXJ_VQ1A2bWLJaAwtLDJATqT0FWEp8",
    authDomain: "survey-self.firebaseapp.com",
    databaseURL: "https://survey-self.firebaseio.com",
    projectId: "survey-self",
    storageBucket: "survey-self.appspot.com",
    messagingSenderId: "597493909082"
  };
  firebase.initializeApp(config);

class Authen extends Component{

login(event){
  const email = this.refs.email.value;
  const password = this.refs.password.value;
  console.log(email,password);

  const auth =firebase.auth();
  const promise= auth.signInWithEmailAndPassword(email,password);
  // TODO: handle login password

  promise.then(user=>{
    var err = "Login Successful "+user.user.email;
    this.setState({err:err});
    var lout=document.getElementById('logout');
    lout.classList.remove('hide');
  });
  promise.catch(e =>{
    var err =e.message;
    console.log(err);
    this.setState({err:err})
  });
}

logout(){
  firebase.auth().signOut();
  var lout=document.getElementById('logout');
  var err =" Thank you for visiting";
  this.setState({err:err});
  lout.classList.add('hide');
}

signup(){
  const email = this.refs.email.value;
  const password = this.refs.password.value;
  console.log(email,password);
  const auth =firebase.auth();
  const promise= auth.createUserWithEmailAndPassword(email,password);
  promise
  .then(user => {
    var err ="Welcome " + user.user.email;
    console.log(user);
   firebase.database().ref('users/'+user.user.uid).set({
   email: user.user.email
   });

    this.setState({err:err});
  });
  promise
  .catch(e=>{
    var err=e.message;
    console.log(err);
    this.setState({err:err});
  });
}

google(){
  var provider = new firebase.auth.GoogleAuthProvider();
  var promise = firebase.auth().signInWithPopup(provider);

  promise.then(
    result=>
    {
      var user = result.user;
      console.log(user);
      firebase.database().ref('users/'+user.uid).set({
        email:user.email,
        name: user.displayName
      });
    });

  promise.catch(e=>{
    var err= e.message;
    console.log(err);
    this.setState({err:err})
  });
}

  constructor(props){
    super(props);
    this.state={
      err:''
    };
    this.login=this.login.bind(this);
    this.signup=this.signup.bind(this);
    this.logout=this.logout.bind(this);
    this.google=this.google.bind(this);

  }
  render(){
    return(
    <div>
      <input id="email" ref="email" type="email" placeholder="Enter your email" />
      <input id="pass" ref="password" type="password" placeholder="Enter your password" /><br/>
      <p>{this.state.err}</p>
      <button onClick={this.login}>Log in</button>
      <button onClick={this.signup}>Sign up</button>
      <button onClick={this.logout} id="logout" className="hide">Log out</button><br/>
      <button onClick={this.google} id="google" className="google">Sign in with google</button>
  </div>
    );
  }
}
export default Authen;

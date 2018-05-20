import React,{Component} from 'react';


var firebase = require('firebase');
var uuid = require('uuid');

var config = {
    apiKey: "AIzaSyBdTzXJ_VQ1A2bWLJaAwtLDJATqT0FWEp8",
    authDomain: "survey-self.firebaseapp.com",
    databaseURL: "https://survey-self.firebaseio.com",
    projectId: "survey-self",
    storageBucket: "",
    messagingSenderId: "597493909082"
  };
  firebase.initializeApp(config);

class Survey1 extends Component{


  answerSelected(event){
    var answers= this.state.answers;
    if(event.target.name === 'ans1'){
      answers.ans1 = event.target.value;
    }else if(event.target.name === 'ans2'){
      answers.ans2 = event.target.value;
    }else if(event.target.name === 'ans3'){
      answers.ans3= event.target.value;
    }else if(event.target.name === 'ans4'){
      answers.ans4 = event.target.value;
    }else if(event.target.name === 'ans5'){
      answers.ans5 = event.target.value;
    }

    this.setState({answers:answers}, function () {
      console.log(this.state);
    });
  }

  formSubmitted(){
    firebase.database().ref('survey-self/'+this.state.uid).set({
      studentName: this.state.studentName,
      answers: this.state.answers

    });

    this.setState({isSubmitted: true})

  }

  setname(){

    var name= this.refs.name.value;
    this.setState({studentName:name},function() {
      console.log(this.state)
    });

  }
  constructor(props){
    super(props);
    this.state={
      uid: uuid.v1(),
      studentName:'ash',
      answers:{
        ans1:'',
        ans2:'',
        ans3:'',
        ans4:'',
        ans5:''

      },
      isSubmitted:true

    };
    this.setname=this.setname.bind(this);
    this.answerSelected=this.answerSelected.bind(this);
    this.formSubmitted=this.formSubmitted.bind(this);

  }

  render(){
    var studentName;
    var questions;

    if (this.state.studentName === '' && this.state.isSubmitted === false){
      studentName = <div>
        <h1>Please enter your name to take the survey</h1><br/>
        <form  onSubmit={this.setname}>
        <input className="namy" type="text" placeholder="Enter your name" ref="name"/>
        </form>
      </div>;
      questions =''
    }else if (this.state.studentName !== '' && this.state.isSubmitted === false){
      studentName =<h1> Welcome to the survey {this.state.studentName}</h1>;

      questions =<div>
        <form onSubmit={this.formSubmitted}>
          <div className="card">
            <p>What type of courses do you like the most ?</p>
            <input type="radio"  value="Technology" name='ans1' onChange={this.answerSelected}/>Technology
            <input type="radio"  value="Design" name='ans1' onChange={this.answerSelected}/>Design
            <input type="radio"  value="Web" name='ans1' onChange={this.answerSelected}/>Web
          </div>

          <div className="card">
            <p>You are a :</p>
            <input type="radio"  value="Student" name='ans2' onChange={this.answerSelected}/>Student
            <input type="radio"  value="In-job" name='ans2' onChange={this.answerSelected}/>In-job
            <input type="radio"  value="seeking job" name='ans2' onChange={this.answerSelected}/>seeking job
          </div>

          <div className="card">
            <p>Do you like online courses ?</p>
            <input type="radio"  value="Yes" name='ans3' onChange={this.answerSelected}/>Yes
            <input type="radio"  value="No" name='ans3' onChange={this.answerSelected}/>No
            <input type="radio"  value="Maybe" name='ans3' onChange={this.answerSelected}/>Maybe
          </div>

          <div className="card">
            <p>Why do you take udemy courses ?</p>
            <input type="radio"  value="personal interest" name='ans4' onChange={this.answerSelected}/>personal interest
            <input type="radio"  value="professional requirement" name='ans4' onChange={this.answerSelected}/>professional requirement
            <input type="radio"  value="for fun" name='ans4' onChange={this.answerSelected}/>for fun
          </div>

          <div className="card">
            <p>How much would you rate udemy ?</p>
            <input type="radio"  value="Average" name='ans5' onChange={this.answerSelected}/>Average
            <input type="radio"  value="Good" name='ans5' onChange={this.answerSelected}/>Good
            <input type="radio"  value="Awesome" name='ans5' onChange={this.answerSelected}/>Awesome
          </div>

          <input className="feedback-button" type="submit" value="submit"/>
        </form>
      </div>

    }else if(this.state.studentName !== '' && this.state.isSubmitted === true){
      studentName = <h1>Thank you {this.state.studentName}</h1>;
    }

    return(
    <div>
      {studentName}
      _____________________________________
      {questions}
    </div>
    );
  }
}

export default Survey1;

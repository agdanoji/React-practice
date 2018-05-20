import React,{Component} from 'react';

var firebase = require('firebase');
var uuid = require('uuid');

var config = {
   apiKey: "AIzaSyAY5tB_DOenhMbDPepxV8MCNrzanMC06QA",
   authDomain: "survey-f3cb9.firebaseapp.com",
   databaseURL: "https://survey-f3cb9.firebaseio.com",
   projectId: "survey-f3cb9",
   storageBucket: "survey-f3cb9.appspot.com",
   messagingSenderId: "20377984017"
 };
 firebase.initializeApp(config);


class Usurvey extends Component{

  nameSubmit(event){
    var studentName = this.refs.name.value;
    this.setState({studentName: studentName},function () {
      console.log(this.state)

    })
  }

  answerSelected(event){
    var answers=this.state.answers;
    if(event.target.name === "ans1"){
      answers.ans1= event.target.value;
    }else if(event.target.name === "ans2"){
      answers.ans2= event.target.value;
    }else if(event.target.name === "ans3"){
      answers.ans3= event.target.value;
    }

    this.setState({answers:answers},function () {
      console.log(this.state)
    });
  }

  questSubmit(){
    firebase.database().ref('uSurvey/'+this.state.uid).set({
      studentName: this.state.studentName,
      answers: this.state.answers

    });

    this.setState({isSubmitted: true})
  }
  constructor(props){
    super(props);
    this.state={
      uid: uuid.v1(),
      studentName:'',
      answers:{
        ans1:'',
        ans2:'',
        ans3:''

      },
      isSubmitted: false
    };

    this.nameSubmit=this.nameSubmit.bind(this);
    this.answerSelected=this.answerSelected.bind(this);
    this.questSubmit=this.questSubmit.bind(this);

  }
  render(){
    var studentName;
    var questions;

    if (this.state.studentName === '' && this.state.isSubmitted === false){
      studentName = <div>
        <h1> Give your name (Student):</h1>
        <form onSubmit={this.nameSubmit}>
          <input className="namy" type="text" placeholder= "Enter your name " ref="name" />
        </form>
      </div>;
      questions=''
    }else if(this.state.studentName !== '' && this.state.isSubmitted === false){
      studentName=<h1>Welcome to the survey, {this.state.studentName}</h1>;
      questions=<div>
        <h2>Here are some questions</h2>
        <form onSubmit={this.questSubmit}>
          <div className="card">
            <label>What kind of courses do you like the most? </label><br/>
            <input type="radio" name="ans1" value="Technology" onChange={this.answerSelected}/>Technology
            <input type="radio" name="ans1" value="Design" onChange={this.answerSelected}/>Design
            <input type="radio" name="ans1" value="Marketing" onChange={this.answerSelected}/>Marketing
          </div>

          <div className="card">
            <label>You are a: </label><br/>
            <input type="radio" name="ans2" value="Student" onChange={this.answerSelected}/>Student
            <input type="radio" name="ans2" value="In -job" onChange={this.answerSelected}/>In-job
            <input type="radio" name="ans2" value="Seeking job" onChange={this.answerSelected}/>Seeking job
          </div>

          <div className="card">
            <label>Is online learning helpful? </label><br/>
            <input type="radio" name="ans3" value="yes" onChange={this.answerSelected}/>yes
            <input type="radio" name="ans3" value="no" onChange={this.answerSelected}/>no
            <input type="radio" name="ans3" value="maybe" onChange={this.answerSelected}/>maybe
          </div>

          <input className="feedback-button" type="submit" value="submit" />

        </form>
      </div>
    }else if (this.state.studentName !== '' && this.state.isSubmitted === true){
      studentName = <h1>Thanks {this.state.studenName}</h1>
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

export default Usurvey;

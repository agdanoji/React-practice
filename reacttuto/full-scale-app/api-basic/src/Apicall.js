import React,{Component} from 'react';
import axios from 'axios';

//https://www.reddit.com/r/space.json

class Apicall extends Component{

  getreddit(){
    axios.get(`https://www.reddit.com/r/${this.state.subr}.json`)
    .then(res=>{
      const posts=res.data.data.children.map(obj => obj.data);
      this.setState({posts:posts});
    })
    .catch(e=>{
      var err= e.message;
      console.log(err);
    });
  }

  componentWillMount(){
    this.getreddit();
  }

  constructor(props){
    super(props);
    this.state={
      posts:[],
      subr: 'space'
    };
  this.getreddit=this.getreddit.bind(this);
  }
  render(){
    return(
    <div>
      <h1>{`/r/${this.state.subr}`}</h1>
      <ul>
        {this.state.posts.map(post=>
        <li key={post.id}>{post.title}</li>)}
      </ul>
    </div>
    );
  }
}

export default Apicall;

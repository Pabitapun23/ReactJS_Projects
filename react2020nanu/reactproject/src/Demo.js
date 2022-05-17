import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class Demo extends Component{
	render(){
		return <div className="maindiv_style">
		        <h1> Hello {this.props.name} </h1>
		        <p> Let's do something </p>
		       </div>
	}
}

export default Demo;
import React, { Component } from 'react';
import './InputForm.css';
import logo from'./logo.svg';

class InputForm extends Component {


  constructor(props) {
    super(props);
    this.state = {value: 's'};

  }

  handleSubmit(event){
    event.preventDefault();
    
  }

handelit(){
	if (this.state.value === ''){
		alert("Nope")
	}
}

  render() {
    return (
    	<div className="form-container">
    	<img src={logo} alt="logo"/>
    	<form onSubmit={this.handleSubmit.bind(this)}>
    	<label htmlFor="Email-Address"> Email Address</label>
    	<input id="Email-Address" type="email" placeholder="Email" onBlur={this.handelit.bind(this)} required/>
    	<label htmlFor="Password"> Password</label>
    	<input id="Password" type="password" placeholder="password" onBlur={this.handelit.bind(this)} minLength="8" required/>
    	<input type="submit" value="Submit" />
    	</form>
    	</div>
    );
  }
}

export default InputForm;

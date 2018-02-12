import React, { Component } from 'react';
import './InputForm.css';
import logo from'./logo.svg';

class InputForm extends Component {


  constructor(props) {
    super(props);
    this.state = {value: ''};

  }

  handleSubmit(event){
    event.preventDefault();

    //write the fetch statment and validation code before submiting 
  }

handelEmail(){
	//further email validation beyond browser validation
}

handelPassword(){
		//further Password validation beyond browser validation
}

  render() {
    return (

    	<div className="form-container">
	    	<img src={logo} alt="logo"/>
	    	{/*The form that accepts the user input*/}
	    	<form onSubmit={this.handleSubmit.bind(this)}>
	   			 {/*The email input validated by HTML semantics and browser validation*/}
	    		<label htmlFor="Email-Address"> Email Address</label>
	    		<input id="Email-Address" type="email" placeholder="Email" onBlur={this.handelEmail.bind(this)} required/>
				 {/*The Password input validated by HTML semantics and browser validation*/}
	    		<label htmlFor="Password"> Password</label>
	    		<input id="Password" type="password" placeholder="password" onBlur={this.handelPassword.bind(this)} minLength="8" required/>
	    		{/*the submit button*/}
	    		<input type="submit" value="Submit" />
	    	</form>
    	</div>
    );
  }
}

export default InputForm;

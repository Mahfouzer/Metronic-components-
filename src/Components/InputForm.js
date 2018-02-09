import React, { Component } from 'react';
import './InputForm.css';

class InputForm extends Component {


  constructor(props) {
    super(props);
    this.state = {value: ''};

  }

handelit(){
	alert("wooohoo")
}

  render() {
    return (
    	<form action="">
    	<label htmlFor="Email-Address"> Email Address</label>
    	<input id="Email-Address" type="email" placeholder="Email" onBlur={this.handelit.bind(this)} />
    	</form>
    );
  }
}

export default InputForm;

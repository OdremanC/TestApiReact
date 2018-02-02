// Dependencies
import React, { Component } from 'react';
//Manejo de props
import PropTypes  from 'prop-types';
import '../css/login.css';

class FormLogin extends Component{
	constructor(props){
		super(props);
		this.state = {
			usuario:'',
			password:''
		};
	}

	static propTypes = {
		getDataFrom: PropTypes.func
	}

	handleChange = (event) => {
		if (event.target.id === 'usuario') {
			this.setState({
				usuario: event.target.value
			});
		}else if(event.target.id === 'password'){
			this.setState({
				password: event.target.value
			});
		}
	}


	render(){
		
		return(
			
			<div className="container">
				<div className="row">
					<form className="form">

					  <div className="container">
					    <label><b>Username</b></label>
					    <input className="loginIn" type="text" placeholder="Enter Username" value={this.state.usuario} name="usuario" id="usuario" onChange={this.handleChange} required />

					    <label><b>Password</b></label>
					    <input className="loginIn" type="password" placeholder="Enter Password" id="password" value={this.state.password} name="pass" onChange={this.handleChange} required />
					        
					    <button className="logbutton" type="button" onClick={(event) => {this.props.getDataFrom(this.state)}}>Login</button>
					    <label>
					      <input className="loginIn" type="checkbox" checked="checked" /> Remember me
					    </label>
					  </div>

					  <div className="container" >
					    <button type="button" className="cancelbtn logbutton">Cancel</button>
					    <span className="psw">Forgot <a href="#">password?</a></span>
					  </div>
					</form>
				</div>
			</div>
		
		);
	}

}
export default FormLogin;
// Dependencies
import React, { Component } from 'react';
//LINK sirve para crear enlaces
import { Link,withRouter } from 'react-router-dom'; 
//Manejo de props
import { PropTypes,instanceOf}  from 'prop-types';
//conexion a redux
import { connect } from 'react-redux';
import { getValueLogin } from '../Global/Functions/';
//form
import FormLogin from './Formularios/formLogin';

import * as actions from '../Users/actions';


class Login extends Component{
	constructor(props){
		super(props);

		this.state = {
			usuario: '',
			isLogged: false,
			error:''
		}	
	}

	static propTypes = {
		getAllUsers: PropTypes.func,
		setLogin: PropTypes.func
		
	}
	componentWillReceiveProps(nextProps){
		if(this.props.isLogged != nextProps.isLogged){
			this.getIsLogged(nextProps.isLogged);
		}
	}

	getIsLogged = (values) => {
		if (values) {
			this.props.history.push('/home');
		}
	}

	getDataFromForm = (formValues) => {
    	const query = formValues.usuario;
	    	const data = {
	    		userName:formValues.usuario,
	    		password: formValues.password
	    	};
    	this.props.setLogin(query,data);
	}
	

	render(){
		
		const { isLogged } = this.props;
		//const { usuario } = this.state;

		return(
			<div className="loginPage">
				<FormLogin 
					getDataFrom ={this.getDataFromForm}
					errorData={this.state.error}
				>
				</FormLogin>
			</div>
		);
	}
}
export default withRouter(connect(state=>({
	routes: state.router,
	isLogged: state.usersData.isLogged
}),actions)(Login));
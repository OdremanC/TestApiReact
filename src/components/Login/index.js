// Dependencies
import React, { Component } from 'react';
//LINK sirve para crear enlaces
import { Link,withRouter } from 'react-router-dom'; 
//Manejo de props
import { PropTypes,instanceOf}  from 'prop-types';
//conexion a redux
import { connect } from 'react-redux';

//form
import FormLogin from './Formularios/formLogin';

import * as actions from '../Users/actions';
//cookies
import Cookies from 'universal-cookie';


const cookies = new Cookies();

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


	componentWillMount() {
		//if(cookies.get('isLogged') === true);
		
  	}
	componentDidMount(){
    	
		
  	}
	getDataFromForm = (e) => {
    	//console.log(e)
    	const query = e.usuario;
	    	const data = {
	    		userName:e.usuario,
	    		password: e.password
	    	};
    	this.props.setLogin(query,data).then(value=>{
    		if (value.value === true) {
    			
    			const dataUser = {
    				userName: e.usuario, 
    				isLogged:true
    			};
    			var fecha = new Date();
				fecha.setMinutes(fecha.getMinutes() + 30);

    			cookies.set('isLogged',dataUser , { path: '/', expires:fecha });

    			this.props.history.push('/home');
    			this.setState({
    				isLogged: true,
    				usuario: e.usuario
    			});
    		}else{
    			this.setState({
    				error: 'Los datos son incorrectos'
    			});
    		}
    	});
	}

	render(){
		
		const { isLogged } = this.props;
		const { usuario } = this.state;

		return(
			<div className="loginPage">
				<FormLogin 
					getDataFrom ={e=>{this.getDataFromForm(e)}}
					logged={this.state.isLogged}
					errorData={this.state.error}
				>
				</FormLogin>
			</div>
		);
	}
}
export default withRouter(connect(state=>({
	routes: state.router
}),actions)(Login));
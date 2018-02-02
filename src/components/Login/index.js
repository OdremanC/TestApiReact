// Dependencies
import React, { Component } from 'react';
//LINK sirve para crear enlaces
import { Link } from 'react-router-dom'; 
//Manejo de props
import { PropTypes,instanceOf}  from 'prop-types';
//conexion a redux
import { connect } from 'react-redux';
//form
import FormLogin from './Formularios/formLogin';

//import Formulario from './Formularios/formStock';
import * as actions from '../Users/actions';
//cookies
import Cookies from 'universal-cookie';


class Login extends Component{
	constructor(props){
		super(props);
		this.state = {
			userLoggedId: '',
			userNameLogged:'',
			isLoggedIn: false
		}
	}

	static propTypes = {
		getAllUsers: PropTypes.func,
		setLogin: PropTypes.func


	}
	componentWillMount() {


  	}
	componentDidMount(){
    	this.props.getAllUsers();
  	}
	getDataFromForm = (e) => {

		const datos = e;
    	var resultObject = this.props.DataUsers.find(element => {
    		 return element.userName === datos.usuario;
    	});
    	
		if(resultObject && resultObject._id.length > 0){
			if (resultObject.password === datos.password) {
				this.setState({
		    		userLoggedId: resultObject._id,
		        	userNameLogged: resultObject.userName,	
		        	isLoggedIn: true
		    	});
		    	const query = resultObject._id;
		    	const data = {
		    		userName:resultObject.userName,
		    		password: resultObject.password,
		    		email:resultObject.email,
		    		isLogged: true
		    	};
		    	this.props.setLogin(query,data);
		    	const cookies = new Cookies();
    			cookies.set('isLoggedIn', true, { path: '/' });
    			console.log(cookies.get('isLoggedIn'));


			}
   		};
	}

	render(){
		console.log(this.props)
		return(
			<div className="loginPage">
				<FormLogin 
					getDataFrom ={e=>{this.getDataFromForm(e)}}
					logged={this.state.isLogged}
				>
				</FormLogin>
			</div>
		);
	}
}
export default connect(state=>({
DataUsers: state.usersData.users,
user: state.usersData.singleUser
}),actions)(Login);
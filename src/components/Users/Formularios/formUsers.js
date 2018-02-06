//Dependencias
import React, { Component } from 'react';
import { Form, Text,FormField } from 'react-form';
import PropTypes  from 'prop-types';
import '../css/users.css';

class Formulario extends Component{
	
	constructor(props){
		super(props);

		this.state = {
			userName: '',
			email: '',
			password:'',
			editID:''
		};
		this.handleChange = this.handleChange.bind(this);
	}
	
	static propTypes = {
		getDataFormChild: PropTypes.func,
		putCloseModal: PropTypes.func,
		dataToEdit: PropTypes.object,
		addOpen: PropTypes.bool

	}

	handleChange =(event) =>{
		if (event.target.id === 'userName') {
			this.setState({
				userName : event.target.value
			});
		}else if(event.target.id === 'email'){
			this.setState({
				email : event.target.value
			});
		}else if(event.target.id === 'password'){
			this.setState({
				password : event.target.value
			});
		}
	}
	componentDidMount(){

		this.setState({
			userName: this.props.dataToEdit.userName,
			email: this.props.dataToEdit.email,
			password: this.props.dataToEdit.password,
			editID: this.props.dataToEdit._id
		});
	}


	render(){
		return(	
			<form className="form" >
			  	<label htmlFor="UserName"> Uusario:</label>
			  	<input type="hidden" id ="editID" value={this.state.editID} name="editID" />
			  	<input type="text" className="form-control " id="userName" placeholder="userName..." value={this.state.userName}  onChange={this.handleChange} />
			  	<label htmlFor="apellido">Email:</label>
			  	<input type="email" className="form-control" id="email" placeholder="Email..." value={this.state.email}  onChange={this.handleChange} />
			  	<label htmlFor="pass">Password:</label>
			  	<input type="password" className="form-control" id="password" placeholder="password..." value={this.state.password}  onChange={this.handleChange} />
			  	<div className="row">
			  		<div className="col-md-6 ">
					  	<button className ="btn btn-success formButton" onClick={(event) => {this.props.passDataToParent(this.state)}}>Guardar</button>
					</div>
					<div className="col-md-6" >
						<button className ="btn btn-danger formButton" onClick={(event)=>this.props.putCloseModal(false)} >close</button>
					</div>
			  	</div>
			</form>
		);
	}
}
export default Formulario;
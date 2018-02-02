// Dependencies
import React, { Component } from 'react';
//LINK sirve para crear enlaces
import { Link } from 'react-router-dom'; 
//Manejo de props
import PropTypes  from 'prop-types';
//conexion a redux
import { connect } from 'react-redux';
// Utils
//import { isFirstRender } from '../../lib/utils/frontend'; 
//import  Modal from '../Global/ModalComponent/Modal';
import Table from './tableComponents/TableGenerator';
//import Formulario from './Formularios/formStock';
import * as actions from './actions';

class Users extends Component {
	constructor(props){
		super(props)
	}

	static proptypes = {
		getAllUsers: PropTypes.func
	}
	componentDidMount(){
    	this.props.getAllUsers();
  	}

  	handleEliminarItem = (id) =>{
		const query = id;
		this.props.deleteUser(query);
	}


	render(){
		const { DataUsers } = this.props;
		const cabeceras = [
	      {key:1,nombre:"ID"},
	      {key:2,nombre: "UserName"},
	      {key:3,nombre: "Password"},
	      {key:4,nombre: "Email"},
	      {key:5,nombre: "Acciones"}
	    ];
		return (
			<div className="Users">
			<h1>All users</h1>
			<Table
				cabeceras ={cabeceras}
        		tableData ={this.props.DataUsers}
        		handleEliminar = {e =>this.handleEliminarItem(e)}
        		handleEditar = {e =>this.handleEditarIndex(e)}
        		singleParam={e=>{this.singleClient(e)}}
			>
			</Table>
			</div>
		);
	}
}
export default connect(state => ({
	DataUsers: state.usersData.users
}), actions)(Users);

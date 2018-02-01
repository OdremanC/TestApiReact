// Dependencies
import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import PropTypes  from 'prop-types';

class ShowCliente extends Component{
	 constructor(props){
	 	super(props);
	 }

	 static propTypes = {
	 	clientData: PropTypes.object
	 }


	 render(){

	 	return (

	 		<div>
	            <h2>Cliente:</h2>
	            <table>
	              <thead>
	                <th>Datos del Cliente</th>
	              </thead>

	              <tbody>
	                <tr>
	                  <td>id</td>
	                  <td>{this.props.clientData._id}</td>
	                </tr>
	                <tr>
	                  <td>Nombre</td>
	                  <td>{this.props.clientData.name}</td>
	                </tr>
	                <tr>
	                  <td>Apellido</td>
	                  <td>{this.props.clientData.lastName}</td>
	                </tr>
	                <tr>
	                  <td>DNI</td>
	                  <td>{this.props.clientData.dni}</td>
	                </tr>
	                <tr>
	                  <td>Estado Civil</td>
	                  <td>{this.props.clientData.civilState}</td>
	                </tr>
	                <tr>
	                  <td><a className="btn btn-primary" href="/">Volver</a></td>
	                  <td></td>
	                </tr>

	              </tbody>
	            </table>
	        </div>
	 	);
	 }
}
export default ShowCliente;
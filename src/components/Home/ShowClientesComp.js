// Dependencies
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import PropTypes  from 'prop-types';
import * as actions from './actions';

class ShowCliente extends Component{

	constructor(props){
	 	super(props);
	 	this.state = {
	 		
	 	}
	}

	 static propTypes = {
	 	passSingleData: PropTypes.func
	 }
	componentDidMount () {
	 	if (this.props.match.params.id) {
	 		const query = this.props.match.params.id;
	 		this.props.passSingleData(query);
	 	}
	}

	render(){
	  	const { clientData } = this.props;
	 	return (
	 		<div>
        <h2>Cliente:</h2>
        <p>Nombre: <b>{clientData.name}</b></p>
        <p>Apellido: <b>{clientData.lastName}</b></p>
        <p>DNI: <b>{clientData.dni}</b></p>
        <p>Estado Civil: <b>{clientData.civilState}</b></p>
       	<Link to="/home" className="btn btn-success">Volver</Link>
	    </div>
	 	);
	 }
}
export default connect(state => ({
  clientData: state.clientesData.cliente
}), actions)(ShowCliente);
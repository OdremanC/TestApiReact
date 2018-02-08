// Dependencies
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import PropTypes  from 'prop-types';
import * as actions from './actions';

class ShowSigleArticle extends Component{

	constructor(props){
	 	super(props);
	 	this.state={	
	 	}
	}

	static propTypes = {
	 	getSingleData: PropTypes.func
	}
	componentDidMount(){ 	
	 	if (this.props.match.params.id) {
	 		const query = this.props.match.params.id;
	 		this.props.getSingleData(query);
	 	}
	}

	render(){
	 	const { SigleData } = this.props;
	 	return (
	 		<div>
        <h2>Articulo:</h2>
        <p>Nombre: <b>{SigleData.cantidad}</b></p>
        <p>Apellido: <b>{SigleData.articulo}</b></p>
        <p>DNI: <b>{SigleData.categoria}</b></p>
       	<Link to="/stock" className="btn btn-success">Volver</Link>
	    </div>
	 	);
	 }
}
export default connect(state => ({
  SigleData: state.stockData.SingleInventario
}), actions)(ShowSigleArticle);
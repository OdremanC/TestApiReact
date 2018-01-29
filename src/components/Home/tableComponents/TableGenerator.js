// Dependencies
import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import PropTypes  from 'prop-types';

class Table  extends Component {
	constructor(props){
		super(props);
 
	}

	static propTypes = {
    	tableData: PropTypes.array,
    	cabeceras: PropTypes.array,
    	handleEditarIndex: PropTypes.func,
    	handleEliminar: PropTypes.func
  	};

  	render(){
   	const { cabeceras, tableData } = this.props;

	//console.log(this.props)
  		return(
  			<div className="Table">
  			<table className="table">
  				<thead className="thead-dark">
  				{
  					cabeceras.map((cabecera,key)=>{
  						return(
  							<th key={key} scope="col">{cabecera.nombre}</th>
  						);	
  					})
  				}
  			
  				</thead>
  				 
  				<tbody>
  					{
		              tableData.map((cliente, key) => {
		                return (
		                  <tr key={key}>
		                    <td>{cliente._id}</td>
		                    <td>{cliente.name}</td>
		                    <td>{cliente.lastName}</td>
		                    <td>{cliente.dni}</td>
		                    <td>
		                      <button className="btn btn-warning" id={cliente._id} onClick={(event)=>this.props.handleEditar(event.target.id)}>Editar</button> ||
		                      <button className="btn btn-danger" id={cliente._id} onClick={(event)=>this.props.handleEliminar(cliente._id)}>Eliminar</button>
		                    </td>
		                  </tr>
		                )
		              })
	            	}
  				</tbody>
  			</table>
  			</div>
  		);
  	}

}
export default Table;
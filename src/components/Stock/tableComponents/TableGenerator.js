// Dependencies
import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import PropTypes  from 'prop-types';

class Table  extends Component {
	constructor(props){
		super(props);
 
	}

	static propTypes = {
    	tableData: PropTypes.array  	
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
		              tableData.map((inventario, key) => {
		                return (
		                  <tr key={key}>
		                    <td>{inventario._id}</td>
		                    <td>{inventario.cantidad}</td>
		                    <td>{inventario.articulo}</td>
                        <td>{inventario.categoria}</td>
		                    <td>
		                      <button className="btn btn-warning" id={inventario._id} onClick={(event)=>this.props.handleEditar(event.target.id)}>Editar</button> ||
		                      <button className="btn btn-danger" id={inventario._id} onClick={(event)=>this.props.handleEliminar(inventario._id)}>Eliminar</button>
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
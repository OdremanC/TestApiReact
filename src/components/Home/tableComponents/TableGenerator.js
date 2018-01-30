// Dependencies
import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import PropTypes  from 'prop-types';
import { Link } from 'react-router-dom'; 

class Table  extends Component {
	constructor(props){
		super(props);
 
	}

	static propTypes = {
    	tableData: PropTypes.array,
    	cabeceras: PropTypes.array,
    	handleEditarIndex: PropTypes.func,
    	handleEliminar: PropTypes.func,
      singleParam: PropTypes.func
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
		                    <td><Link to={`/Home/${cliente._id}`} onClick={(event)=>this.props.singleParam(cliente._id)}>{cliente._id}</Link></td>
		                    <td>{cliente.name}</td>
		                    <td>{cliente.lastName}</td>
		                    <td>{cliente.dni}</td>
                        <td>{cliente.civilState}</td>
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
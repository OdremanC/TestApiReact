// Dependencies
import React, { Component } from 'react';
//LINK sirve para crear enlaces
import { Link } from 'react-router-dom'; 
//Manejo de props
import PropTypes  from 'prop-types';
//conexion a redux
import { connect } from 'react-redux';
// Utils
import { isFirstRender } from '../../lib/utils/frontend';
import  Modal from '../Global/ModalComponent/Modal';
import Table from './tableComponents/TableGenerator';
import Formulario from './Formularios/formStock';
import * as actions from './actions';

class Stock extends Component {
	constructor(props){
		super(props);

		this.state = {
			inventario: [],
			isOpen: false,
			editData: {}
		}
	
	}
	static propTypes = {
		getAllData: PropTypes.func.isRequired,
		deleteItem: PropTypes.func,
		addStock: PropTypes.func,
		editStock: PropTypes.func
	}

	componentDidMount(){

		this.props.getAllData();
	}

	openModal = () =>{
		this.setState({
			isOpen:true,
			editData: {}
		});
	}

	closeModal = (close) =>{
		this.setState({
			isOpen: false
		});
	}

	handleEliminarItem = (id) =>{
		const query = id;
		this.props.deleteItem(query);
	}

	handleEditarIndex = (id) =>{
		
		const resultObject = this.props.inventario.find(function(inventario){
      		return inventario._id === id;
    	});
    	if(resultObject && resultObject._id.length > 0){
	      this.setState({
	        isOpen: !this.state.isOpen,
	        editData:resultObject
	      });
	    };
	}

	getDataFormChild = (dataFromForm) =>{

		const query = dataFromForm.editID;

		const data = {
			cantidad: dataFromForm.cantidad,
			articulo: dataFromForm.articulo,
			categoria: dataFromForm.categoria
		}

		if (query === undefined) {
			this.props.addStock(data);
		}else{
			this.props.editStock(query,data);
		}

		this.setState({
			isOpen: false,
			editData: {}
		});

	}

  render() {
  	const { inventario } = this.props; 
  	    //DATA DE CABECERAS DE LA TABLA
    const cabeceras = [
      {key:1,nombre:"ID"},
      {key:2,nombre: "Cantidad"},
      {key:3,nombre: "Articulo"},
      {key:4,nombre:"Categoria"},
      {key:5,nombre: "Acciones"}
    ];
    return (
      <div className="Stock">
        
        <button onClick={this.openModal} className="btn btn-success"><span className="glyphicon glyphicon-plus" aria-hidden="true"></span></button>
        <h2>Listado de Stock</h2>
        <Table  
        	cabeceras ={cabeceras}
        	tableData ={this.props.inventario}
        	handleEliminar = {e =>this.handleEliminarItem(e)}
        	handleEditar = {e =>this.handleEditarIndex(e)}
        >
        </Table>

        <Modal
        	show={this.state.isOpen}
            onAfterOpen={this.afterOpenModal}
            onClose={this.closeModal}
            contentLabel="ModalForm" 
        >
        	<center><h2>Cargar Stock</h2></center>
        	<Formulario
        		passDataToParent = {this.getDataFormChild}
        		dataToEdit={this.state.editData}
        		putCloseModal = {this.closeModal}
        	/>
        </Modal>
      </div>
    );
  }
}

export default  connect(state =>({
	inventario: state.stockData.inventario
}), actions)(Stock);

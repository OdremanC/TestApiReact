//Dependencias
import React, { Component } from 'react';
import { Form, Text,FormField } from 'react-form';
import PropTypes  from 'prop-types';


class Formulario extends Component{
	constructor(props){
		super(props);

		this.state = {
			cantidad: 0,
			articulo: '',
			categoria: '',
			editID:''
		};
		this.handleChange = this.handleChange.bind(this);
	}

	static propTypes = {
		getDataFormChild: PropTypes.func,
		passDataToParent: PropTypes.func,
		putCloseModal: PropTypes.func,
		dataToEdit: PropTypes.object,
		addOpen: PropTypes.bool
	}

	handleChange =(event) =>{

		switch(event.target.id){
			case "cantidad":
				this.setState({
					cantidad : event.target.value
				});
				break;
			case "articulo":
				this.setState({
					articulo : event.target.value
				});
				break;
			case "categoria":
				this.setState({
					categoria : event.target.value
				});
				break;
		}
	}
	componentDidMount(){
		this.setState({
			cantidad: this.props.dataToEdit.cantidad,
			articulo: this.props.dataToEdit.articulo,
			categoria: this.props.dataToEdit.categoria,
			editID: this.props.dataToEdit._id
		});
	}

	render(){
		return(
			<form className="form" >
			  <label htmlFor="nombre"> Cantidad:</label>
			  <input type="hidden" id ="editID" value={this.state.editID} name="editID" />
			  <input type="Number" className="form-control" id="cantidad" value={this.state.cantidad}  onChange={this.handleChange} />
			  <label htmlFor="articulo">Articulo:</label>
			  <select className="form-control" id="articulo" onChange={this.handleChange}>
			   	<option value={this.state.articulo}>{this.state.articulo}</option>
			   	<option value ="Taladro">Taladro</option>
			   	<option value ="Martillo">Martillo</option>
			   	<option value ="Brochas">Brochas</option>
			  </select>
			  <label htmlFor="categoria">Categoria:</label>
			  <select className="form-control" id="categoria" onChange={this.handleChange}>
			   	<option value={this.state.categoria}>{this.state.categoria}</option>
			   	<option value ="Herramientas">Herramientas</option>
			   	<option value ="Computacion">Computacion</option>
			  </select>
			  <div className="row">
			  	<div className="col-md-6 ">
				  	<button className="form-control btn btn-success" onClick={(event) => {this.props.passDataToParent(this.state)}}>Guardar</button> 
				</div>
				<div className="col-md-6" >
					<button className ="form-control btn btn-danger" onClick={(event)=>this.props.putCloseModal(false)} >close</button>
				</div>
			 </div>
			</form>
		);
	}
}
export default Formulario;
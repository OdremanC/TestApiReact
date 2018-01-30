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
		if (event.target.id === 'cantidad') {
			this.setState({
				cantidad : event.target.value
			});
		}else if(event.target.id === 'articulo'){
			this.setState({
				articulo : event.target.value
			});
		}else if(event.target.id === 'categoria'){
			this.setState({
				categoria : event.target.value
			});
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
			
			  <div className ="col-md-6" >
			    <input className="form-control btn btn-success" type="button" value="Submit" onClick={(event) => {this.props.passDataToParent(this.state)}} /> 
			  </div>
			  <div className ="col-md-6">
			    <button className ="form-control btn btn-danger" onClick={(event)=>this.props.putCloseModal(false)} >close</button>
			  </div>
			</form>

		);
	}
}
export default Formulario;
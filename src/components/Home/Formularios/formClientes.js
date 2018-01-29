//Dependencias
import React, { Component } from 'react';
import { Form, Text,FormField } from 'react-form';
import PropTypes  from 'prop-types';


class Formulario extends Component{
	constructor(props){
		super(props);

		this.state = {
			nombre: '',
			apellido: '',
			dni:0,
			editID:''
		};
	this.sendData = this.sendData.bind(this);
	this.handleChange = this.handleChange.bind(this);
	}
	static propTypes = {
		getDataFormChild: PropTypes.func,
		putCloseModal: PropTypes.func,
		dataToEdit: PropTypes.object,
		addOpen: PropTypes.bool

	}
	sendData =(event) =>{
		//console.log(this.state.submittedValues)
		if (this.state.submittedValues != undefined) {
			this.props.passDataToParent(this.state.submittedValues)	
		}
	}

	handleChange =(event) =>{
		if (event.target.id === 'nombre') {
			this.setState({
				nombre : event.target.value
			});
		}else if(event.target.id === 'apellido'){
			this.setState({
				apellido : event.target.value
			});
		}else if(event.target.id === 'dni'){
			this.setState({
				dni : event.target.value
			});
		}
	}
	componentDidMount(){
		if (this.props.dataToEdit._id) {
   			this.setState({
   				nombre: this.props.dataToEdit.name,
   				apellido: this.props.dataToEdit.lastName,
   				dni: this.props.dataToEdit.dni,
   				editID: this.props.dataToEdit._id
   			});
   		}

   		if (this.props.addOpen === true) {
   			this.setState({
	   			nombre: '',
				apellido: '',
				dni:0,
				editID:''
   			});
   		}
	}

	render(){
   
		return(

			<form className="form" >
			  <label htmlFor="nombre"> Name:</label>
			  <input type="hidden" id ="editID" value={this.state.editID} name="editID" />
			  <input type="text" className="form-control" id="nombre" placeholder="Nombre..." value={this.state.nombre}  onChange={this.handleChange} />
			  <label htmlFor="apellido">lastName:</label>
			  <input type="text" className="form-control" id="apellido" placeholder="Apellido..." value={this.state.apellido}  onChange={this.handleChange} />
			  <label htmlFor="dni">DNI:</label>
			  <input type="number" className="form-control" id="dni" placeholder="DNI..." value={this.state.dni}  onChange={this.handleChange} />
			  <label htmlFor="estadoCivil">Estado Civil:</label>
			  <select className="form-control" id="estadoCivil" onChange={this.handleChange}>
			    <option value={this.state.estadoCivil}>{this.state.estadoCivil}</option>
			    <option value ="Casado">Casado</option>
			    <option value ="Soltero">Soltero</option>
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
// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './css/Home.css';


class Home extends Component { 
   constructor(props) {
    super(props);
    this.state = {nombre: '',apellido:'',dni: 0};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    if (event.target.id == 'nombre') {
      this.setState({
        nombre: event.target.value.toUpperCase()
      });
    }else if(event.target.id == 'apellido'){
      this.setState({
        apellido: event.target.value.toUpperCase()
      });
    }else{
      this.setState({
        dni: Number(event.target.value)
      });
    }
      
  }
  handleSubmit(event){
      alert("a data was submited: "+ this.state.nombre +" - " +this.state.apellido + " - "+ this.state.dni);
      event.prevenDefault();
      //this.props.onSubmitAction(OBJECTO);
  }

  static propTypes = {
    isMobile: PropTypes.bool
  };
  render() {
    const { isMobile } = this.props;

    return (
      <div className="Home">
        <h1>Home Page</h1>
          <div className="formContent">
            <h4>Cargar Usuarios</h4>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="nombre"> Name:</label>
              <input type="text" id="nombre" placeholder="Nombre..." value={this.state.nombre}  onChange={this.handleChange} />
              <label htmlFor="apellido">lastName:</label>
              <input type="text" id="apellido" placeholder="Apellido..." value={this.state.apellido}  onChange={this.handleChange} />
              <label htmlFor="dni">DNI:</label>
              <input type="text" id="dni" placeholder="DNI..." value={this.state.dni}  onChange={this.handleChange} />
              <input type="submit" value="Submit" />
            </form>
        </div>
        
        <p>
          {isMobile ? 'Mobile device' : 'Desktop device'}
        </p>
        <br />
      </div>

    );
  }
}

export default connect(state => ({
  isMobile: state.device.isMobile
}), null)(Home);

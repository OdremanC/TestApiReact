// Dependencies
import React, { Component } from 'react'; 
//LINK sirve para crear enlaces
import { Link } from 'react-router-dom'; 
import PropTypes  from 'prop-types';
import { connect } from 'react-redux';
// Utils
import { isFirstRender } from '../../lib/utils/frontend';
import  Modal from '../Global/ModalComponent/Modal';
//import  FormsBuilder from '../Global/Modal';
import  Table from './tableComponents/TableGenerator';
// Actions
import * as actions from './actions';

import { getValueLogin } from '../Global/Functions/';
//formulario
import Formulario from './Formularios/formClientes';
import ShowClienteComp from './ShowClientesComp';
//tooltips
import ReactTooltip from 'react-tooltip';


class Home extends Component {

   constructor(props) {
    super(props);

    this.state = {
      singleClient: false,
      allClientData: [],  
      isOpen: false,
      editData: {},
      afterSubmit:false,
      showSingle: false
    };

    this.handleEditarIndex = this.handleEditarIndex.bind(this);
  }

  static propTypes = {
    isMobile: PropTypes.bool,
    passAllData: PropTypes.func.isRequired,
    deleteCliente: PropTypes.func.isRequired,
    editCliente: PropTypes.func.isRequired,
    handleEditar: PropTypes.func,
    submittedValues:PropTypes.array,
    dataRender: PropTypes.func
  };

  openModal =() =>{
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
   
  closeModal = (close) => {
    this.setState({
      isOpen: close,
      editData: {}
    });
  }
  componentWillMount(){
    if (getValueLogin() !== true) {
         this.props.history.push('/login');
    }
  }
  componentDidMount(){  
    this.props.passAllData(); 
  }

  handleEliminarIndex = (clienteID) =>{
    const query = clienteID;
    this.props.deleteCliente(query);
  }

  handleEditarIndex = (event) => {
    const clienteID = event;
    var resultObject = this.props.clientes.find(function(cliente){
      return cliente._id === clienteID;
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
      name: dataFromForm.nombre,
      lastName: dataFromForm.apellido,
      dni: dataFromForm.dni,
      civilState: dataFromForm.civilState
    }

    if (query === undefined) {
      this.props.AddClient(data);
    }else{
      this.props.editCliente(query,data);
    }
    
    this.setState({ 
      isOpen: false,
      editData: {}
    });
  }

  singleClient = (parametro) => {
    
    var sigleData = this.props.clientes.find(function(cliente){
      return cliente._id === parametro;
    });
    
    if(sigleData && sigleData._id.length > 0){
      this.setState({
        showSingle: true,
        allClientData: sigleData

      });

    };
  }

  render() {
    //DATA DE CABECERAS DE LA TABLA
    const cabeceras = [
      {key:1,nombre:"ID"},
      {key:2,nombre: "Nombre"},
      {key:3,nombre: "Apellido"},
      {key:4,nombre:"DNI"},
      {key:5,nombre: "Estado  Civil"},
      {key:6,nombre: "Acciones"}
    ];

   const { isMobile, clientes , products} = this.props; 
  
    return (
      <div>
        <div className="Home" >
          <button onClick={this.openModal} className= "btn btn-success">Add</button> 

          <h2>Listado de Clientes</h2>
          <div >
             
            <Modal 
              show={this.state.isOpen}
              onAfterOpen={this.afterOpenModal}
              onClose={this.closeModal}
              contentLabel="ModalForm" 
            >
              <h4>Cargar Clientes</h4>
              <Formulario 
                passDataToParent = {this.getDataFormChild} 
                putCloseModal = {this.closeModal}
                dataToEdit={this.state.editData}
              />
            </Modal>
            <Table 
              handleEditar={this.handleEditarIndex} 
              handleEliminar={e =>{this.handleEliminarIndex(e)}}  
              tableData={this.props.clientes} 
              cabeceras={cabeceras}
              singleParam={e=>{this.singleClient(e)}}
            />
            <p>
              {isMobile ? 'Mobile device' : 'Desktop device'}
            </p>
          </div>
        </div>
      </div>   
    );
  }
}
//conectamos con redux
export default connect(state => ({
  clientes: state.clientesData.clientes,
  cliente: state.clientesData.cliente,
  isMobile: state.device.isMobile
}), actions)(Home);

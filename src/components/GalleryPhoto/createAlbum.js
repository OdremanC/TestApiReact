// Dependencies
import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'; 
//Manejo de props
import PropTypes  from 'prop-types';
//conexion a redux
import { connect } from 'react-redux';
// Actions
import * as actions from './actions';
import { getValueLogin } from '../Global/Functions/';
import FormCreateAlbums from './Formulario/formCreateAlbum';

class CreateAlbums extends Component{
  constructor(props){
    super(props)
  }

  static propTypes = {

  }
  componentWillMount(){
    if (getValueLogin() !== true) {
      this.props.history.push('/login');
    }
  }
  getData = (formData)=>{
    
    this.props.addNewAlbum(formData);
  }
  render(){
    
    return(
      <div className="createAlbums">
      
      <FormCreateAlbums 
        getDataForm={this.getData}
      />
      </div>
    );
  }
}
export default connect(state =>({

}), actions)(CreateAlbums);
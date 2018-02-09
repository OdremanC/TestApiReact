// Dependencies
import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'; 
//Manejo de props
import PropTypes  from 'prop-types';
//conexion a redux
import { connect } from 'react-redux';
// Actions
import * as actions from '../actions';
import { getValueLogin } from '../../Global/Functions/';



class FormCreateAlbums extends Component{
  constructor(props){
    super(props)

    this.state = {
      title: '',
      description: '',
      images:[]
    }
  }

  static propTypes = {

  }
  handleChange = (event) =>{
    switch(event.target.id){
      case "albumTitle":
        this.setState({
          title: event.target.value
        });
        break;
      case "description":
        this.setState({
          description: event.target.value
        });
        break;
    }
  }
  handdleDataForm = () => {
    const file = this.fileUpload.files;
    console.log(file)
  }

  render(){
    
    return(
      <div className="FormCreateAlbums">
      <div className="container">
        <form className="form">
          <div className="form-group">
            <label htmlFor="albumTitle">Album Title</label>
            <input type="text" className="form-control" name="title" id="albumTitle" aria-describedby="albumTitle" placeholder="Enter Title" onChange={this.handleChange} value={this.state.title}/>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea className="form-control" name="description" id="description" rows="3" onChange={this.handleChange} value={this.state.description}></textarea>
          </div>
          <div className="form-group">
            <input id="input2" name="input2[]" type="file" className="file" ref={(ref) => this.fileUpload = ref} multiple data-show-upload="true" data-show-caption="true" />
          </div>
          <button type="button" className="btn btn-primary" onClick={this.handdleDataForm}>Submit</button>
        </form>
      </div>
      </div>
    );
  }
}
export default FormCreateAlbums;
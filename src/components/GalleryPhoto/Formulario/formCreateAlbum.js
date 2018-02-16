// Dependencies
import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'; 
//Manejo de props
import PropTypes  from 'prop-types';
//conexion a redux
import { connect } from 'react-redux';
// Actions
import * as actions from '../actions';
import { getValueLogin,getUserNameLogin,getUserIdFromCookie  } from '../../Global/Functions/';
import Files from 'react-files';




class FormCreateAlbums extends Component{
  constructor(props){
    super(props)

    this.state = {
      title: '',
      description: '',
      portada: '',
      url: [{ name: '' }],
      requiredField: '',
      isEnabled: false
    }
  }

  static propTypes = {

  }
  
  handleurlNameChange = (idx) => (evt) => {
    const newurl = this.state.url.map((url, sidx) => {
      if (idx !== sidx) return url;
      return { ...url, name: evt.target.value };
    });
    
    this.setState({ 
      url: newurl 
    });
  }
  
  handleAddurl = () => {
    this.setState({ url: this.state.url.concat([{ name: '' }]) });
  }
  
  handleRemoveurl = (idx) => () => {
    this.setState({ url: this.state.url.filter((s, sidx) => idx !== sidx) });
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
      case "portada":
        this.setState({
          portada: event.target.value
        });
        break;
    }
  }

  dataForm = () => {
        
    const datosToSave = {
      userID: getUserNameLogin(),
      userName: getUserIdFromCookie(),
      title: this.state.title,
      portada:this.state.portada,
      description: this.state.description,
      urls: this.state.url
    };

    return datosToSave;
  }

  render(){
    const { formError } = this.props;
    const { title, portada, url } = this.state;

    return(
      <div className="FormCreateAlbums">
      <div className="container">
      
       <form className="form">
        <div className="errors">{this.props.formError}</div>
            <div className="form-group">
              <label htmlFor="albumTitle">Album Title</label>
              <input type="text" required="true" className="form-control" name="title" id="albumTitle" aria-describedby="albumTitle" placeholder="Enter Title" onChange={this.handleChange} value={this.state.title}/>
              <div className="has-error">{this.state.requiredField && this.state.requiredField}</div>
            </div>
            <div className="form-group">
              <label htmlFor="portada">Album portada</label>
              <input type="text" className="form-control" name="portada" id="portada" aria-describedby="portada" placeholder="http://www.example.com/imgPortada.jpeg" onChange={this.handleChange} value={this.state.portada}/>
              
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea className="form-control" name="description" id="description" rows="3" onChange={this.handleChange} value={this.state.description}></textarea>
            </div>

            <label htmlFor="description">IMG URLs</label>
            {
              this.state.url.map((url, idx) => (
                <div className="shareholder" key={idx}>
                  <input
                    type="url"
                    placeholder={`http://www.example.com/image.jpeg`}
                    value={url.name}
                    className="form-control"
                    onChange={this.handleurlNameChange(idx)}
                  />
                  
                  <button type="button" onClick={this.handleRemoveurl(idx)} className="btn-danger small">-</button>
                </div>
              ))
            }
            <div>

           <button type="button" onClick={this.handleAddurl} className="btn-success small">Add Url</button>
          </div>
          <button type="button" disabled={this.state.isEnabled} className="btn btn-primary" onClick={()=>{this.props.getDataForm(this.dataForm())}}>Submit</button>
        </form>
      </div>
      </div>
    );
  }
}
export default connect(state=>({
formError: state.galleryReducer.formError
}),actions) (FormCreateAlbums);
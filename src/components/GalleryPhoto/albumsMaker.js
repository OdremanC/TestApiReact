// Dependencies
import React, { Component } from 'react'; 
//LINK sirve para crear enlaces
import { Link } from 'react-router-dom'; 
import PropTypes  from 'prop-types';
import { connect } from 'react-redux';
import { getValueLogin } from '../Global/Functions/';

//galleryPhoto
import * as actions from './actions';
import './css/gallery.css';

class AlbumsMaker extends Component{
  constructor(props){
    super(props)
  }

  static propTypes = {
    dataAlbums: PropTypes.array,
    sendIdToParent: PropTypes.func
  }

  render(){
    
    const { dataAlbums } = this.props;
    
    return(
      <div className="row border ">
      {
        dataAlbums && dataAlbums.map((album , key) => {
          return(
            <div key={key} className="col-md-3 border albumContainer">
            <div className="row">
              <div className="col-12">
                <img alt="Fotos" src={album.portada} className="responsive-img" width="200px" height="200px" />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div>{album.albumTitle}</div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <button className="btn btn-default" id={album._id} onClick={(event)=>{this.props.sendIdToParent(event.target.id)}}>ver</button>
              </div>
              <div className="col-6">
                <button className="btn btn-danger" id={album._id} onClick={(event)=>{this.props.passId(event.target.id)}}>Delete</button>
              </div>
            </div>  
          </div>
            
          );
        })
      }
      </div>
    );
  }
}
export default AlbumsMaker;
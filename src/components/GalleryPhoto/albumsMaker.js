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
    //console.log(this.props.dataAlbums)
    const { dataAlbums } = this.props;

    return(
      <div>
      {
        dataAlbums && dataAlbums.map((album , key) => {
          return(
            <div key={key} className="col-md-3 border albumContainer">
              <img src={album.photos[0].url} alt="Fotos" className="responsive-img" />
              <div className="col-md-3 ">
              <p>{album.albumTitle}</p>
              <button className="btn btn-default" id={album._id} onClick={(event)=>{this.props.sendIdToParent(event.target.id)}}>ver</button>
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
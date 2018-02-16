// Dependencies
import React, { Component } from 'react'; 
//LINK sirve para crear enlaces
import { Link } from 'react-router-dom'; 
import PropTypes  from 'prop-types';
import { connect } from 'react-redux';
// Utils
import { isFirstRender } from '../../lib/utils/frontend';
import  Modal from '../Global/ModalComponent/Modal';
// Actions
//import * as actions from './actions';
import { getValueLogin } from '../Global/Functions/';
//tooltips
import ReactTooltip from 'react-tooltip';
//galleryPhoto
import Gallery from 'react-photo-gallery';
import * as actions from './actions';
import AlbumMaker from './albumsMaker';
import './css/gallery.css';

class GalleryPhotography extends Component{
  constructor(props){
    super(props)
  }
  static proptypes = {

  }
  componentWillMount(){
    if (getValueLogin() !== true) {
      this.props.history.push('/login');
    }
  }
  componentDidMount(){
    this.props.getAlbunms();
  }

  showGallery = (id) => {
    //console.log(id)
      this.props.setSelected(id);
      this.props.history.push('/galleryPhoto/'+id);
  }
  deleteAlbum = (id) => {
    const query = id;
    this.props.deleteAlbum(query);
  }

  render(){
    
    const { albums } = this.props;
    return(
      <div className="gallery">
        <div className="albunes">
          <p>
            <h4>Crear Albun:</h4>
            <Link to="/albums" className="btn btn-success">+</Link>
          </p>
          <div className="container albunGallery">
            

              <AlbumMaker
                dataAlbums={albums}
                sendIdToParent={this.showGallery}
                passId={this.deleteAlbum}
              >
              </AlbumMaker>
            
          </div>
          
        </div>
      </div>
    );
  }
}
export default connect(state =>({
  albums: state.galleryReducer.albums
}),actions)(GalleryPhotography);
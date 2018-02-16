// Dependencies
import React, { Component } from 'react'; 
//LINK sirve para crear enlaces
import { Link } from 'react-router-dom'; 
import PropTypes  from 'prop-types';
import { connect } from 'react-redux';
//tooltips
import ReactTooltip from 'react-tooltip';
import Gallery from 'react-photo-gallery';
// Actions
import * as actions from './actions';
import { getAlbumID , getValueLogin } from '../Global/Functions/';
import { Lightbox } from 'react-modal-image';


class AlbumGallery extends Component {
  constructor(props){
    super(props);

    this.state = {
      fotos:[],
      open:false,
      imgToModal:''
    }
  }

  static propTypes = {

  }
  componentWillMount(props){
    
    if (getValueLogin() !== true) {
         this.props.history.push('/login');
    }

    if(this.props.match.params.id){
      const query = this.props.match.params.id;
      this.props.setSelected(query);  
    }
  }

  componentWillReceiveProps(nextProps){

    if(nextProps){
      
      const data = nextProps.album.photos.map((fotos ,key )=> {
        return(
          {         
            src: fotos.name,
            id: fotos._id
          }
        );
      })
      this.setState({
        fotos: data
      });
    }
  }

  backToAlbumns = (event) =>{
    event.preventDefault();
    this.props.history.push('/gallery')
  }
  handleImage = (e) =>{
    this.setState({
      open:true,
      imgToModal:e.target.src
    });
  }
  closeLightbox = () =>{
    this.setState({
      open:false
    });
  }
  deletePic = (event) =>{
    const data = {
      photoID: event.target.id
    };
    const query = this.props.match.params.id;
    this.props.deletePics(query,data);
  }

  render(){
    const { album } = this.props;
    const { fotos,imgToModal } = this.state;
    
    return(
      <div className="gallery">
      <div>
        <button className="btn btn-success" onClick={this.backToAlbumns}>Volver</button>
      </div>
        <div className="container">
          <div className="row">
            
            {
              fotos && fotos.map((fotos , key) => {
                return(
                  <div key={key} className="col-md-3 border fotosContainer">
                    <div className="row">
                      <div className="col-12">
                        <img onClick={ (e) => {this.handleImage(e)} } src={fotos.src} id={fotos.id} alt="Fotos" className="responsive-img" />
                      </div>
                    </div>
                    <div className="row ">
                      <div className="col-12">
                        <div>{album.albumTitle}</div>
                    </div>
                  </div>
                  <div className="row ">
                      <div className="col-12">
                        <div><button className="btn btn-danger small" id={fotos.id} onClick={(event)=>{this.deletePic(event)}}>Delete</button></div>
                    </div>
                  </div>
                </div>
                );
              })
            }
            {
               this.state.open && (
                 <Lightbox
                  medium={imgToModal}
                  alt="ChristPics"
                  onClose={this.closeLightbox}
                />

              )
            }
            
          </div>
        </div>
      </div>
    );
  }
}
export default connect(state=>({
  album: state.galleryReducer.photoAlbum
}),actions)(AlbumGallery);
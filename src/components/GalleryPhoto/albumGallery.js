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


class AlbumGallery extends Component {
  constructor(props){
    super(props);

    this.state = {
      fotos:[]
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
            src: fotos.url,
            width: 0.005,
            height: 0.005
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

  render(){
    const { album } = this.props;
    const { fotos } = this.state;

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
                    <img src={fotos.src} id={fotos.src} alt="Fotos" className="responsive-img" />
                    <div className="col-md-3 ">
                    <p>{album.albumTitle}</p>
                    </div>
                  </div>
                );
              })
            }
            
          </div>
        </div>
      </div>
    );
  }
}
export default connect(state=>({
  album: state.galleryReducer.selectedAlbun
}),actions)(AlbumGallery);
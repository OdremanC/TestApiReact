// Dependencies
import React, { Component } from 'react';  
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Assets
import './css/Navbar.css';

class Navbar extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };

  render() {
    const { title, items } = this.props;

    return (
      <nav className="navbar navbar-expand-lg navbar-inverse">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
              {
                items && items.map(
                  (item, key) => <li key={key} className="nav-li"><Link className="link-nav" to={item.url}>{item.title}</Link></li>
                )
              }
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    );
  }
}

export default Navbar;

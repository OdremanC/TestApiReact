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
      <div className="Navbar">
        <div className="Logo">
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
              </div>
                <ul className="nav navbar-nav">
                  {
                    items && items.map(
                      (item, key) => <li key={key} className="nav-li"><Link className="link-nav" to={item.url}>{item.title}</Link></li>
                    )
                  }
                </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;

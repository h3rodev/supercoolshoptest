import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Footer extends Component {
  render(){
    return(
      <footer className="page-footer elegant-color-dark center-on-small-only">

          <div className="social-section">
              <ul>
                  <li><a className="btn-floating btn-small btn-fb"><i className="fa fa-facebook"> </i></a></li>
                  <li><a className="btn-floating btn-small btn-tw"><i className="fa fa-twitter"> </i></a></li>
                  <li><a className="btn-floating btn-small btn-pin"><i className="fa fa-pinterest"> </i></a></li>
                  <li><a className="btn-floating btn-small btn-ins"><i className="fa fa-instagram"> </i></a></li>
              </ul>
          </div>

          <div className="footer-copyright">
              <div className="container-fluid">
                  <a href="#/"> SUPPERCOOLSHOP </a> Copyright © 2017
              </div>
          </div>
      </footer>
    )
  }
}

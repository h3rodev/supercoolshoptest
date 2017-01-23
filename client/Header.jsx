import React, { Component } from 'react';
import { render } from 'react-dom';

import Banner from './Banner';

export default class Header extends Component {
  render(){
    return(
    <section>
      <header>
        <nav className="navbar navbar-dark navbar-fixed-top scrolling-navbar elegant-color-dark">
            <button className="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#collapseEx2">
                <i className="fa fa-bars"></i>
            </button>

            <div className="container">
                <div className="collapse navbar-toggleable-xs" id="collapseEx2">
                    <a className="navbar-brand" href="/">SUPPERCOOLSHOP</a>
                      <ul className="nav navbar-nav pull-right">
                        <li className="nav-item">
                            <a className="nav-link" href="/cart"><i className="fa fa-shopping-cart"></i> <span className="hidden-sm-down">Cart</span></a>
                        </li>
                      </ul>
                </div>
            </div>
        </nav>
      </header>

    </section>
    )
  }
}

import React, { Component } from 'react';
import { render } from 'react-dom';
import ProductDetails from './ProductDetails';

export default class Product extends Component {

  showSelected(event){
    event.preventDefault();
    var spid = {};
    spid = event.target.id
    localStorage.setItem( 'spid', JSON.stringify(spid) );
    newUrl = `/product?id=${this.props.product.pid}`
    window.location.replace(newUrl);
  }

  getUrlVars()
  {
      var vars = [], hash;
      var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
      for(var i = 0; i < hashes.length; i++)
      {
          hash = hashes[i].split('=');
          vars.push(hash[0]);
          vars[hash[0]] = hash[1];
      }
      return vars;
  }

  render(){

    return(
      <div className="custom-box text-muted">
        <div className="col-md-4">
            <div className="card card-cascade narrower">
                <div className="view overlay hm-white-slight">
                    <img onClick={this.showSelected.bind(this)} id={ this.props.product.pid } src={ this.props.product.images[0] } className="img-fluid" alt="" />
                    <a>
                        <div className="mask"></div>
                    </a>
                </div>

                <div className="card-block text-xs-center">
                    <a className="text-muted"><h5>{ this.props.product.brand_category[0].category }</h5></a>
                    <h5 className="card-title h5-responsive"><strong><a className="showProduct" onClick={this.showSelected.bind(this)} id={ this.props.product.pid } href="#">{ this.props.product.title }</a></strong></h5>

                    <p className="card-text">{ this.props.product.brand_category[0].brand }</p>

                    <div className="card-footer">
                      <span className="left">{ this.props.product.price } AED</span>
                      <span className="right">
                      <a onClick={this.showSelected.bind(this)} id={ this.props.product.pid } className="btn btn-danger" data-toggle="tooltip" data-placement="top">View</a>
                      </span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

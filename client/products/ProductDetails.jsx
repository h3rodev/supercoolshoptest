import React, { Component } from 'react';
import { render } from 'react-dom';

import { ProductData } from '../api';

export default class ProductDetails extends Component {
  constructor(props){
    super(props)
    state = {
      pSelected : this.getUrlVars()['id']
    }
    selectedProduct: null
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

  // Add to cart function. Triger when the add to cart button is clicked
  addToCart(event){
    event.preventDefault();
    //initialise
    var product = {}, cart = [];
    localStorage.setItem( 'quantity', JSON.stringify(1) );
    product.id = event.target.id;
    cart.push(product);

    localStorage.setItem( 'cart', JSON.stringify(cart) );
    console.log('adding to cart');
    newUrl = '/cart'
    window.location.replace(newUrl);
  }

  render(){

    selectedProduct = localStorage.getItem( 'spid' ).replace('"','').replace('"','');
    cleandata = []
    {ProductData.map((product) =>{
      if (product.pid === selectedProduct) {
        cleandata.push(product);
      }
    })}

    return(
      <div className="custom-box text-muted">

        <div className="container-fluid">
              <div className="row">
                  <div className="col-md-4">
                      <h4>Product Image</h4>
                      <hr />
                      <div className="view overlay hm-white-slight">
                          <img src={ cleandata[0].images } className="img-fluid" alt={cleandata[0].title} />
                          <a>
                              <div className="mask"></div>
                          </a>
                      </div>
                  </div>
                  <div className="col-md-8">

                      <a><h4 className="h4-responsive">{cleandata[0].title}</h4></a>
                      <hr />
                      <div className="price">
                        <a className="text-muted">{ cleandata[0].brand_category[0].brand }</a> | <a className="text-muted">{ cleandata[0].brand_category[0].category }</a> | <a>{cleandata[0].info[0]}</a> | <a>{cleandata[0].info[1]}</a>
                        <h4>{cleandata[0].price}AED Only</h4>
                      </div>

                      <a onClick={this.addToCart.bind(this)} id={ cleandata[0].pid } className="btn btn-default">Buy now</a>

                      <hr />
                      <h5 className="h5-responsive">Description</h5>
                      <hr />
                      <p className="text-justify">{cleandata[0].desc}</p>
                  </div>
              </div>
        </div>

      </div>
    )
  }
}

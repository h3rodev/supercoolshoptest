import React, { Component } from 'react';
import { render } from 'react-dom';

import { ProductData } from './api';
import Banner from './Banner';

export default class CartData extends Component {
  render(){
  cartData = localStorage.getItem( 'spid' );
    if (cartData) {
      cartData = cartData.replace('"', '').replace('"', '');
      cleandata = []
      {ProductData.map((product) =>{
        if (product.pid === cartData) {
          cleandata.push(product);
        }
      })}

    qty = 0
    function getProductTotal(p, q){
      productTotal = p.replace(',','') * q
      return productTotal
    }
    function MinusQty(){
      if (qty >= 1) {
        localStorage.setItem( 'quantity', JSON.stringify(qty--) );
        console.log('remove quantity');
        showQty();
      } else {
        removeProductItem();
      }
      window.location.href=window.location.href;

    }
    function AddQty(){
      localStorage.setItem( 'quantity', JSON.stringify(qty++) );
      console.log('added quantity');
      showQty();

    }

    function showQty(){
      return localStorage.getItem( 'quantity' );
    }

    function removeProductItem(){
      localStorage.removeItem('cart');
      localStorage.removeItem('data');
      localStorage.removeItem('spid');
      console.log('removing item');
      newUrl = '/cart'
      window.location.replace(newUrl);
    }
      return(
        <div className="table-responsive">

            <table className="table product-table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>QTY</th>
                        <th>Amount</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <th scope="row">
                            <img src={cleandata[0].images[0]} alt={cleandata[0].title} width="60" className="img-fluid" />
                        </th>
                        <td>
                            <h6 className="h6-responsive"><strong>{cleandata[0].title}</strong></h6>
                            <p className="text-muted">{cleandata[0].brand_category[0].brand}</p>
                        </td>
                        <td>{cleandata[0].price.replace(',','')} AED</td>
                        <td>
                            <span className="qty">{localStorage.getItem( 'quantity' )}</span>
                            <div className="btn-group" data-toggle="buttons">
                                <a onClick={MinusQty} className="btn btn-sm btn-primary btn-rounded">
                                    &mdash;
                                </a>
                                <a onClick={AddQty} className="btn btn-sm btn-primary btn-rounded">+
                                </a>
                            </div>
                        </td>
                        <td>{ getProductTotal(cleandata[0].price, localStorage.getItem( 'quantity' )) }.00 AED</td>
                        <td>
                            <a onClick={ removeProductItem } className="btn btn-sm btn-primary" data-toggle="tooltip" data-placement="top" title="Remove item">X
                            </a>
                        </td>
                    </tr>

                    <tr>
                        <td colspan="3"></td>
                        <td>
                            <h6 className="h6-responsive"><strong>Total</strong></h6></td>
                        <td>
                            <h6 className="h6-responsive"><strong>{ getProductTotal(cleandata[0].price, localStorage.getItem( 'quantity' )) }.00 AED</strong></h6></td>
                        <td colspan="3"><a href="#" className="btn btn-primary">Checkout  <i className="fa fa-angle-right right"></i></a></td>
                    </tr>

                </tbody>
            </table>
        </div>
      )
    } else {
      return(
        <div>
          <Banner />
          <hr />
          <h2 className="mt-2">Your cart is empty. View our product list to add products to cart <a href="/">Shop</a></h2>
        </div>
      )
    }
  }
}

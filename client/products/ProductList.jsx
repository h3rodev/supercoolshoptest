import React, { Component } from 'react';
import { render } from 'react-dom';
import Product from './Products';

import { Products } from '../api';
export default class ProductList extends Component {


  render(){
    
    return(
        <Product product={this.props.product}/>
    )
  }
}

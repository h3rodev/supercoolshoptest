import React, { Component } from 'react';
import { render } from 'react-dom';

import ProductList from './ProductList';

export default class ProductCategoryList extends Component {

  render(){
    return(

         <ProductList product={this.props.product} />
    )
  }
}

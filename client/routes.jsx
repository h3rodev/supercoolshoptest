import React, { Component } from 'react';
import { mount } from 'react-mounter';

import { MainLayout } from './layouts/MainLayout.jsx';
import { CartPage } from './layouts/CartPage.jsx';
import { ProductPage } from './layouts/ProductPage.jsx';

import Main from './Main';

FlowRouter.route('/', {
  action(){
    mount(MainLayout, {
      content: (<Main />)
    })
  }
})
FlowRouter.route('/cart', {
  action(){
    mount(CartPage, {
      content: (<CartPage />)
    })
  }
})

FlowRouter.route('/product', {
  action: function(params, queryParams) {
    mount(ProductPage, {
      content: (<Main />)
    })
  }
})

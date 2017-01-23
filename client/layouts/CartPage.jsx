import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import CartData from '../CartData';

export const CartPage = ({content}) =>(
<div>
  <Header />
  <main className="main-container">
      <div className="container mt-6">
          <div className="row">
          <CartData />
          </div>
      </div>
  </main>
  <Footer />
</div>
)

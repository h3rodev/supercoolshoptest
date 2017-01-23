import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import ProductDetails from '../products/ProductDetails';

export const ProductPage = ({content}) =>(
  <div>
    <Header />

    <main className="main-container">
        <div className="container mt-6">
            <div className="row">
            <ProductDetails param={ this.params }/>
            </div>
        </div>
    </main>
    <Footer />
  </div>

)

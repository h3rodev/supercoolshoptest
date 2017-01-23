import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Main from '../Main';
import SideBar from '../SideBar';
import Banner from '../Banner';

export const MainLayout = ({content}) =>(
<div>
  <Header />
  <Banner />
  <main className="main-container">
      <div className="container">
          <div className="row">

              <Main />
          </div>
      </div>
  </main>
  <Footer />
</div>
)

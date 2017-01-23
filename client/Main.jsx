import React, { Component } from 'react';
import { render } from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import ProductCategoryList from './products/ProductCategoryList';
import SideBar from './SideBar';

import { ProductData } from './api';

export default class Main extends TrackerReact(Component) {
  constructor(props){
      super(props);

      state = {
          catSelected:"Mobile Phones"
      };
      selected = "Mobile Phones";
  }


    render(){
      function handleClick(event) {
        selected = event.target.id
      }

      return(
        <div>
            <div className="row">
            <div className="col-lg-12 flex-center">
                  <div className="btn-group">
                      <a href="#!" onClick={handleClick} id="Mobile Phones" className="catbtn btn btn-primary">Mobile Phones</a>
                      <a href="#!" onClick={handleClick} id="Televisions" className="catbtn  btn btn-primary">Televisions</a>
                      <a href="#!" onClick={handleClick} id="Laptops & Notebooks " className="catbtn  btn btn-primary">Laptop</a>
                  </div>
                </div>

                <div className="col-lg-12">
                    <div className="divider-new">
                        <h2 className="h2-responsive">What's new on {selected} ?</h2>
                    </div>
                </div>
            </div>

            {ProductData.map(( product, i ) => {
              if (product.brand_category[0].category == selected) {
                return <ProductCategoryList key={i} product={product}/>
              }

            })}

      </div>
      )
    }
}

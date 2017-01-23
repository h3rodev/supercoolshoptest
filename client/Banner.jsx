import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Banner extends Component {
  render(){
    return(
      <div id="carousel-example-2" className="carousel slide carousel-fade" data-ride="carousel">
          <ol className="carousel-indicators">
              <li data-target="#carousel-example-2" data-slide-to="0" className="active"></li>
              <li data-target="#carousel-example-2" data-slide-to="1"></li>
              <li data-target="#carousel-example-2" data-slide-to="2"></li>
          </ol>

          <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                  <div className="view hm-black-light">
                      <img src="./img/slider01.jpg" className="img-fluid" alt="slider" />
                      <div className="full-bg-img">
                      </div>
                  </div>

                  <div className="carousel-caption">
                      <div className="animated fadeInDown">
                          <h3 className="h3-responsive">Mobile Phones, Laptops and more</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                      </div>
                  </div>
              </div>

              <div className="carousel-item">
                <div className="view hm-black-light">
                    <img src="./img/slider02.jpg" className="img-fluid" alt="slider" />
                    <div className="full-bg-img">
                    </div>
                </div>
                  <div className="carousel-caption">
                      <div className="animated fadeInDown">
                          <h3 className="h3-responsive">Get the latest gadgets with resonable prices</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                      </div>
                  </div>
              </div>

              <div className="carousel-item">
                <div className="view hm-black-light">
                    <img src="./img/slider03.jpg" className="img-fluid" alt="slider" />
                    <div className="full-bg-img">
                    </div>
                </div>
                  <div className="carousel-caption">
                      <div className="animated fadeInDown">
                          <h3 className="h3-responsive">Shop till you drop</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                      </div>
                  </div>
              </div>
          </div>

          <a className="left carousel-control" href="#carousel-example-2" role="button" data-slide="prev">
              <span className="icon-prev" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#carousel-example-2" role="button" data-slide="next">
              <span className="icon-next" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
          </a>
      </div>
    )
  }
}

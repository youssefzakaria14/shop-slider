import React, { Component, Fragment } from "react";
import './Shop.css';
import image_slider_1 from '../../Assets/IMG_0156.webp';
import image_slider_2 from '../../Assets/151.webp';
import image_slider_3 from '../../Assets/52acsvmykzxrpmmxreyfnfuxbj8ahxrtfolbtxryac0lebef (1).webp';
import image_slider_4 from '../../Assets/074-2.webp'
import image_slider_5 from '../../Assets/bria_ed694339b1313333.webp'
import image_slider_6 from '../../Assets/213A.webp'
import image_slider_7 from '../../Assets/306.jpg'

export default class Shop_slider extends Component {
    render() {
        return (
            <Fragment>
                <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                            <img src={image_slider_1} class=" w-100" alt="..." />
                            <div class="carousel-caption ">
                                <h5 className="text-slider-1">Clothing</h5>
                                <button className="slider-btn-1">shop all</button>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src={image_slider_2} class=" w-100" alt="..." />
                            <div class="carousel-caption ">
                                <h5 className="text-slider-2">Badges & Keyrings</h5>
                                <button className="slider-btn-2">shop all</button>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={image_slider_3} class=" w-100" alt="..." />
                            <div class="carousel-caption">
                                <h5 className="text-slider-3">Accessories</h5>
                                <button className="slider-btn-3">shop all</button>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden ">Next</span>
                    </button>
                </div>
                <section className="section-image">
                 
                    <div className="about-slider">

                        <div className="row">
                        <div className="slider-h1"><h1>Collections</h1></div>
                            <div className="col-md-3">
                                <div className="slider-image">
                                    <img src={image_slider_4} alt="" />
                                    <h5>Clothing <span><i class="fa-solid fa-arrow-right"></i></span></h5>
                                </div>




                            </div>
                            <div className="col-md-3">
                                <div className="slider-image">
                                    <img src={image_slider_5} alt="" />
                                    <h5> Accessories<span><i class="fa-solid fa-arrow-right"></i></span></h5>
                                </div>
                            </div>



                            <div className="col-md-3">
                                <div className="slider-image">
                                    <img src={image_slider_6} alt="" />
                                    <h5>Other Items <span><i class="fa-solid fa-arrow-right"></i></span></h5>

                                </div>
                            </div>



                            <div className="col-md-3">
                                <div className="slider-image">
                                    <img src={image_slider_7} alt="" />
                                    <h5> Badges & Keyrings<span><i class="fa-solid fa-arrow-right"></i></span></h5>
                                </div>
                            </div>
 
                            
                            <div className="view-all-btn"> <button >View all</button></div>
                        </div>

                     
                    </div>  
          
                </section>

            </Fragment>
        );
    }
}


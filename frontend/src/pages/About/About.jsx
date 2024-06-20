import React from "react";
import { NavLink } from "react-router-dom";
import BreadCrumb from "../../components/Breadcrumb/Breadcrumb";
import about_us from '../../assets/imgs/Adidas_Originals_NZ_Banner.jpg';
import famous_person from '../../assets/imgs/famous_person/ALEXANDER_MCQUEEN.jpg';
import client_1 from '../../assets/imgs/clients/client-1.png';
import client_2 from '../../assets/imgs/clients/client-2.png';
import client_3 from '../../assets/imgs/clients/client-3.png';
import client_4 from '../../assets/imgs/clients/client-4.png';
import client_5 from '../../assets/imgs/clients/client-5.png';
import client_6 from '../../assets/imgs/clients/client-6.png';
import client_7 from '../../assets/imgs/clients/client-7.png';
import client_8 from '../../assets/imgs/clients/client-8.png';
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer.jsx";

function About() {
  return (
    <div className="mt-36">
      <BreadCrumb title={'About Us'}/>
      <section class="about spad">
                <div class="container m-auto">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="about__pic">
                                <img src={about_us} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-row gap-8">
                        <div class="col-lg-4 col-md-4 col-sm-6">
                            <div class="about__item">
                                <h4>Who We Are ?</h4>
                                <p>Contextual advertising programs sometimes have strict policies that need to be adhered too.
                                Let’s take Google as an example.</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6">
                            <div class="about__item">
                                <h4>Who We Do ?</h4>
                                <p>In this digital generation where information can be easily obtained within seconds, business
                                cards still have retained their importance.</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6">
                            <div class="about__item">
                                <h4>Why Choose Us</h4>
                                <p>A two or three storey house is the ideal way to maximise the piece of earth on which our home
                                sits, but for older or infirm people.</p>
                            </div>
                        </div>
                    </div>
                </div>
      </section>

      <section class="testimonial">
                <div class="container m-auto">
                    <div class="grid grid-cols-2 flex  items-center">
                        <div class="">
                            <div class="testimonial__text">
                                <span class="icon_quotations"></span>
                                <p>“I think beauty is present in everything. What normal people perceive as ugly, I often see the beauty hidden in it."
                                </p>
                                <div class="testimonial__author">
                                    <div class="testimonial__author__pic">
                                        <img src={famous_person} alt=""/>
                                    </div>
                                    <div class="testimonial__author__text">
                                        <h5>Alexander McQeen</h5>
                                        <p>Fashion Design</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="">
                            <div class="testimonial__pic set-bg " >
                              <img src= {famous_person } alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        <Hero/>


            <section class="clients spad mt-20">
                <div class="container m-auto">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title">
                                <span>Partner</span>
                                <h2>Happy Clients</h2>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-4 items-center">
                        <div class="col-lg-3 col-md-4 col-sm-4 col-6">
                            <a href="#" class="client__item flex justify-center"><img src={client_1} alt=""/></a>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-4 col-6">
                            <a href="#" class="client__item flex justify-center"><img src={client_2} alt=""/></a>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-4 col-6">
                            <a href="#" class="client__item flex justify-center"><img src={client_3} alt=""/></a>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-4 col-6">
                            <a href="#" class="client__item flex justify-center"><img src={client_4} alt=""/></a>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-4 col-6">
                            <a href="#" class="client__item flex justify-center"><img src={client_5} alt=""/></a>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-4 col-6">
                            <a href="#" class="client__item flex justify-center"><img src={client_6} alt=""/></a>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-4 col-6">
                            <a href="#" class="client__item flex justify-center"><img src={client_7} alt=""/></a>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-4 col-6">
                            <a href="#" class="client__item flex justify-center"><img src={client_8} alt=""/></a>
                        </div>
                    </div>
                </div>
            </section>
    <Footer/>
    </div>
  );
}

export default About;

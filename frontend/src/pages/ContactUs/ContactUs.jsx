import React from "react";
import { NavLink } from "react-router-dom";

import BreadCrumb from "../../components/Breadcrumb/Breadcrumb";
import Footer from "../../components/Footer/Footer.jsx";

function ContactUs() {
  return (
    <div className="mt-36">
    <BreadCrumb title={'Contact Us'}/>

    <div class="map mt-10">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.3652029854666!2d106.69204877480615!3d10.859802889294066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529c17978287d%3A0xec48f5a17b7d5741!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBOZ3V54buFbiBU4bqldCBUaMOgbmggLSBDxqEgc-G7nyBxdeG6rW4gMTI!5e0!3m2!1svi!2s!4v1710087732473!5m2!1svi!2s"  ></iframe>
            </div>

<section class="contact spad">
                <div class="container m-auto">
                    <div class="grid grid-cols-2">
                        <div class="col-lg-6 col-md-6">
                            <div class="contact__text">
                                <div class="section-title">
                                    <span>Information</span>
                                    <h2>Contact Us</h2>
                                    <p>As you might expect of a company that started out as a high-end fashion house, we pay close attention.</p>
                                </div>
                                <ul>
                                    <li>
                                        <h4>VietNam</h4>
                                        <p>12 Đ. Phan Văn Trị, Phường 7, Gò Vấp, Thành phố Hồ Chí Minh <br />+83 39-442-1371</p>
                                    </li>
                                    <li>
                                        <h4>Malaysia</h4>
                                        <p>Lot 155, First Floor, Suria KLCC, 50088, Kuala Lumpur, Malaysia. <br />+60 03-22018048</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="contact__form">
                                <form action="#">
                                    <div class="grid grid-cols-2 gap-4">
                                        <div class="col-lg-6">
                                            <input type="text" placeholder="Name"/>
                                        </div>
                                        <div class="col-lg-6">
                                            <input type="text" placeholder="Email"/>
                                        </div>
                                        
                                    </div>
                                    <div class="col-lg-12">
                                            <textarea placeholder="Message"></textarea>
                                            
                                        </div>
                                        <NavLink
        to="/"
        className="p-2  bg-black text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 duration-300"
      >
        Send Message
      </NavLink>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        <Footer/>
    </div>
  );
}

export default ContactUs;

import React from 'react';
import Footer from "../../components/Footer/Footer.jsx";
import BreadCrumb from '../../components/Breadcrumb/Breadcrumb.jsx';
import { NavLink } from 'react-router-dom';

function Checkout() {
  return (
    <div className='mt-36'>
      <BreadCrumb title="Check Out"/>
      <div className='container m-auto'>
          <section class="checkout spad">
            <div class="container">
                <div class="checkout__form">
                    <form action="#">
                        <div class="grid grid-cols-3 gap-4">
                            <div class="col-span-2">
                                <h6 class="coupon__code"><span class="icon_tag_alt"></span> Have a coupon? <a href="#">Click
                                here</a> to enter your code</h6>
                                <h6 class="checkout__title">Order Details</h6>
                                <div class="grid grid-cols-2 gap-4">
                                    <div class="col-lg-6">
                                        <div class="checkout__input">
                                            <p>Fist Name<span>*</span></p>
                                            <input type="text"/>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="checkout__input">
                                            <p>Last Name<span>*</span></p>
                                            <input type="text"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="checkout__input">
                                    <p>Country<span>*</span></p>
                                    <input type="text"/>
                                </div>
                                <div class="checkout__input">
                                    <p>Address<span>*</span></p>
                                    <input type="text" placeholder="Street Address" class="checkout__input__add"/>
                                </div>
                                <div class="grid grid-cols-2 gap-4">
                                    <div class="col-lg-6">
                                        <div class="checkout__input">
                                            <p>Phone<span>*</span></p>
                                            <input type="number"/>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="checkout__input">
                                            <p>Email<span>*</span></p>
                                            <input type="email" />
                                        </div>
                                    </div>
                                </div>
                                <div class="checkout__input">
                                    <p>Order notes<span>*</span></p>
                                    <input type="text"
                                    placeholder="Notes about your order, e.g. special notes for delivery." />
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="checkout__order">
                                    <h4 class="order__title">Your order</h4>
                                    <div class="checkout__order__products">Product <span>Total</span></div>
                                    <ul class="checkout__total__products">
                                        <li>01. Vanilla salted caramel <span>$ 300.0</span></li>
                                        <li>02. German chocolate <span>$ 170.0</span></li>
                                        <li>03. Sweet autumn <span>$ 170.0</span></li>
                                        <li>04. Cluten free mini dozen <span>$ 110.0</span></li>
                                    </ul>
                                    <ul class="checkout__total__all">
                                        <li>Subtotal <span>$750.99</span></li>
                                        <li>Total <span>$750.99</span></li>
                                    </ul>
                                    <div class="checkout__input__checkbox">
                                        <label for="acc-or">
                                            Create an account?
                                            <input type="checkbox" id="acc-or"/>
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua.</p>
                                    <div class="checkout__input__checkbox">
                                        <label for="payment">
                                            Check Payment
                                            <input type="checkbox" id="payment"/>
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <div class="checkout__input__checkbox">
                                        <label for="paypal">
                                            Paypal
                                            <input type="checkbox" id="paypal" />
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <NavLink
                                      to="/products"
                                      className="p-2 text-center bg-black text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 duration-300 site-btn"
                                    >
                                      PLACE ORDER
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
      </div>
      <Footer/>
    </div>
  )
}

export default Checkout
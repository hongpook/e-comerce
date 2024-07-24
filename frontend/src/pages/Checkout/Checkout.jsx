import React from 'react';
import { useSelector } from 'react-redux';
import Footer from "../../components/Footer/Footer.jsx";
import BreadCrumb from '../../components/Breadcrumb/Breadcrumb.jsx';
import { NavLink } from 'react-router-dom';
import FormatPrice from "../../components/FormatPrice/FormatPrice";

function Checkout() {
  const cart = useSelector((state) => state.cart);

  const total = cart.reduce((a, c) => a + c.ProductPrice * c.quantity, 0);
  const TotalPrice = total.toFixed(2);

  return (
    <div className='mt-36'>
      <BreadCrumb title="Check Out" />
      <div className='container m-auto'>
        <section className="checkout spad">
          <div className="container">
            <div className="checkout__form">
              <form action="#">
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2">
                    <h6 className="coupon__code"><span className="icon_tag_alt"></span> Have a coupon? <a href="#">Click here</a> to enter your code</h6>
                    <h6 className="checkout__title">Order Details</h6>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-lg-6">
                        <div className="checkout__input">
                          <p>First Name<span>*</span></p>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="checkout__input">
                          <p>Last Name<span>*</span></p>
                          <input type="text" />
                        </div>
                      </div>
                    </div>
                    <div className="checkout__input">
                      <p>Country<span>*</span></p>
                      <input type="text" />
                    </div>
                    <div className="checkout__input">
                      <p>Address<span>*</span></p>
                      <input type="text" placeholder="Street Address" className="checkout__input__add" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-lg-6">
                        <div className="checkout__input">
                          <p>Phone<span>*</span></p>
                          <input type="number" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="checkout__input">
                          <p>Email<span>*</span></p>
                          <input type="email" />
                        </div>
                      </div>
                    </div>
                    <div className="checkout__input">
                      <p>Order notes<span>*</span></p>
                      <input type="text" placeholder="Notes about your order, e.g. special notes for delivery." />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="checkout__order">
                      <h4 className="order__title">Your order</h4>
                      <div className="checkout__order__products">Product <span>Total</span></div>
                      <ul className="checkout__total__products">
                        {cart.map((item, index) => (
                          <li key={index}>
                            {index + 1}. {item.ProductName} <span><FormatPrice price={item.ProductPrice * item.quantity} /></span>
                          </li>
                        ))}
                      </ul>
                      <ul className="checkout__total__all">
                        <li>Subtotal <span><FormatPrice price={TotalPrice} /></span></li>
                        <li>Total <span><FormatPrice price={TotalPrice} /></span></li>
                      </ul>
                      <div className="checkout__input__checkbox">
                        <label htmlFor="acc-or">
                          Create an account?
                          <input type="checkbox" id="acc-or" />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      <div className="checkout__input__checkbox">
                        <label htmlFor="payment">
                          Check Payment
                          <input type="checkbox" id="payment" />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <div className="checkout__input__checkbox">
                        <label htmlFor="paypal">
                          Paypal
                          <input type="checkbox" id="paypal" />
                          <span className="checkmark"></span>
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
      <Footer />
    </div>
  );
}

export default Checkout;

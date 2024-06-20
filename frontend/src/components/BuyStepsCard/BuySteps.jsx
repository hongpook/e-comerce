import React from "react";
import { NavLink } from "react-router-dom";
import './style.scss';


function BuySteps() {
  return (
    <>

<section class="categories spad">
        <div class="container m-auto">
          <div class="flex justify-between">
            <div class="col-lg-3">
              <div class="categories__text">
                <h2>
                  Clothings Hot <br /> <span>Shoe Collection</span> <br />{" "}
                  Accessories
                </h2>
              </div>
            </div>
            <div class=" w-80">
              <div class="categories__hot__deal">
                <img
                  src={'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9755a662d7234c6f95ad162746caa244_9366/Giay_Trainer_Samba_Low_mau_xanh_la_ID3263_04_standard.jpg'}
                  alt=""
                />
                <div class="hot__deal__sticker">
                  <span>Sale Of</span>
                  <h5>$29.99</h5>
                </div>
              </div>
            </div>
            <div class="col-lg-4 offset-lg-1">
              <div class="categories__deal__countdown">
                <span>Deal Of The Week</span>
                <h2>Multi-pocket Chest Bag Black</h2>
                <div class="categories__deal__countdown__timer" id="countdown">
                  <div class="cd-item">
                    <span>3</span>
                    <p>Days</p>
                  </div>
                  <div class="cd-item">
                    <span>1</span>
                    <p>Hours</p>
                  </div>
                  <div class="cd-item">
                    <span>50</span>
                    <p>Minutes</p>
                  </div>
                  <div class="cd-item">
                    <span>18</span>
                    <p>Seconds</p>
                  </div>
                </div>
                <NavLink
                  to="/products"
                  className="p-2  bg-black text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 duration-300"
                >
                  Shop now
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BuySteps;

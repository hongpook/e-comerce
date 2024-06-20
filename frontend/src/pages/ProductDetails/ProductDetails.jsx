import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareMinus, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useParams, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Add } from "../../store/redux/cart/CartAction";
import FormatPrice from "../../components/FormatPrice/FormatPrice";
import { AiOutlineRight, AiOutlineRetweet } from "react-icons/ai";
import { BsFillStarFill, BsFillHeartFill } from "react-icons/bs";
import Footer from "../../components/Footer/Footer.jsx";

function ProductDetails() {
  const [data, setData] = useState({});
  const [quantity, setQuantity] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const item = {
    ProductId: data.ProductId,
    ProductName: data.ProductName,
    ProductPrice: data.ProductPrice,
    ProductImage: data.ProductImage,
    quantity: quantity,
    total: data.ProductPrice * quantity,
  };

  const cartSelecter = useSelector((state) => state);
  console.log(cartSelecter);

  const fetch = async () => {
    const res = await axios.get(`http://localhost:4000/products/product/${id}`);
    console.log(res.data);
    setData(res.data);
  };

  const inc = () => {
    setQuantity(quantity + 1);
  };
  const dec = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const AddToCartHandeler = () => {
    if (quantity === 0) {
      alert("Please select quantity");
      return;
    } else {
      if (cartSelecter.cart.find((item) => item.id === data.id)) {
       alert("already added to cart or if you want to add more quantity then go to cart and update quantity");
        return;
      } else {
        dispatch(Add(item));

        alert("added to cart successfully, go to cart to checkout");
        return;
      }
    }
  };
  // const AddToCartHandeler = () => {
  //   if (quantity === 0) {
  //     alert("Please select quantity");
  //     return;
  //   } else {
  //     const existingItem = cartSelecter.cart.find((item) => item.id === data.id);
  
  //     if (existingItem) {
  //       const updatedCart = cartSelecter.cart.map((item) =>
  //         item.id === data.id ? { ...item, quantity: item.quantity + quantity } : item
  //       );
  
  //       dispatch(Update_cart(updatedCart));
  
  //       alert("Quantity updated in the cart, go to cart to checkout");
  //     } else {
  //       dispatch(Add({ ...data, quantity }));
  
  //       alert("Added to cart successfully, go to cart to checkout");
  //     }
  //   }
  // };
  

  useEffect(() => {
    fetch();
  }, []);

  const [activeTabImg, setActiveTabImg] = useState("tabs-1");

  const handleTabClickImg = (tabIdImg) => {
    setActiveTabImg(tabIdImg);
  };
  
  return (
    
    
    <div>
     
    {data ? (
      <>
        <section class="shop-details mt-36">
          <div class="product__details__pic">
            <div class="container m-auto">
              <div class="">
                <div class="col-lg-12">
                  <div class="product__details__breadcrumb flex">
                    <NavLink to="/">Home</NavLink>
                    <AiOutlineRight />
                    <NavLink to="/products">Shop</NavLink>
                    <AiOutlineRight />
                    <span>Product Details</span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="col-lg-3 col-md-3">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                      <a
                        className={`nav-link ${
                          activeTabImg === "tabs-1" ? "active" : ""
                        }`}
                        onClick={() => handleTabClickImg("tabs-1")}
                        role="tab"
                      >
                        <div
                          className="product__thumb__pic set-bg"
                          style={{
                            backgroundImage: `url(${data.ProductImage})`,
                          }}
                        ></div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={`nav-link ${
                          activeTabImg === "tabs-2" ? "active" : ""
                        }`}
                        onClick={() => handleTabClickImg("tabs-2")}
                        role="tab"
                      >
                        <div
                          className="product__thumb__pic set-bg"
                          style={{
                            backgroundImage: `url(${data.ProductImage})`,
                          }}
                        ></div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={`nav-link ${
                          activeTabImg === "tabs-3" ? "active" : ""
                        }`}
                        onClick={() => handleTabClickImg("tabs-3")}
                        role="tab"
                      >
                        <div
                          className="product__thumb__pic set-bg"
                          style={{
                            backgroundImage: `url(${data.ProductImage})`,
                          }}
                        ></div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={`nav-link ${
                          activeTabImg === "tabs-4" ? "active" : ""
                        }`}
                        onClick={() => handleTabClickImg("tabs-4")}
                        role="tab"
                      >
                        <div
                          className="product__thumb__pic set-bg"
                          style={{
                            backgroundImage: `url(${data.ProductImage})`,
                          }}
                        >
                          <i className="fa fa-play"></i>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-md-9">
                  <div className="tab-content">
                    <div
                      className={`tab-pane ${
                        activeTabImg === "tabs-1" ? "active" : ""
                      }`}
                      id="tabs-1"
                      role="tabpanel"
                    >
                      <div className="product__details__pic__item">
                        <img
                          src={ data.ProductImage}
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className={`tab-pane ${
                        activeTabImg === "tabs-2" ? "active" : ""
                      }`}
                      id="tabs-2"
                      role="tabpanel"
                    >
                      <div className="product__details__pic__item">
                        <img
                          src={ data.ProductImage}
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className={`tab-pane ${
                        activeTabImg === "tabs-3" ? "active" : ""
                      }`}
                      id="tabs-3"
                      role="tabpanel"
                    >
                      <div className="product__details__pic__item">
                        <img
                          src={data.ProductImage}
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className={`tab-pane ${
                        activeTabImg === "tabs-4" ? "active" : ""
                      }`}
                      id="tabs-4"
                      role="tabpanel"
                    >
                      <div className="product__details__pic__item">
                        <img
                          src={data.ProductImage}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="product__details__content">
            <div class="container m-auto">
              <div class="row d-flex justify-content-center">
                <div class="col-lg-8">
                  <div class="product__details__text">
                    <h4>{data.ProductName}</h4>
                    <div class="rating flex justify-center">
                      <BsFillStarFill />
                      <BsFillStarFill />
                      <BsFillStarFill />
                      <BsFillStarFill />
                      <BsFillStarFill />
                      <span> - 5 Reviews</span>
                    </div>
                    <h3>
                      <FormatPrice price={data.ProductPrice} />
                    </h3>
                    <div class="product__details__option">
                      <div class="product__details__option__size">
                        <span>Size:</span>
                        <label for="xxl">
                          xxl
                          <input type="radio" id="xxl" />
                        </label>
                        <label class="active" for="xl">
                          xl
                          <input type="radio" id="xl" />
                        </label>
                        <label for="l">
                          l
                          <input type="radio" id="l" />
                        </label>
                        <label for="sm">
                          s
                          <input type="radio" id="sm" />
                        </label>
                      </div>
                      <div class="product__details__option__color">
                        <span>Color:</span>
                        <label class="c-1" for="sp-1">
                          <input type="radio" id="sp-1" />
                        </label>
                        <label class="c-2" for="sp-2">
                          <input type="radio" id="sp-2" />
                        </label>
                        <label class="c-3" for="sp-3">
                          <input type="radio" id="sp-3" />
                        </label>
                        <label class="c-4" for="sp-4">
                          <input type="radio" id="sp-4" />
                        </label>
                        <label class="c-9" for="sp-9">
                          <input type="radio" id="sp-9" />
                        </label>
                      </div>
                    </div>
                    <div class="product__details__cart__option">
                        <div className=" mt-8">
                          <div className="">
                            <h1 className="text-2xl">Quantity</h1>
                            <FontAwesomeIcon
                              icon={faSquareMinus}
                              className=" cursor-pointer text-2xl"
                              onClick={dec}
                            />
                            <input
                              type="number"
                            className="outline-none p-2 m-2  w-10 text-center font-bold"
                              disabled
                              value={quantity}
                            />
                            <FontAwesomeIcon
                              icon={faSquarePlus}
                              className=" cursor-pointer text-2xl"
                              onClick={inc}
                            />
                          </div>
                        </div>
                        <div>
                          <button
                            className="bg-slate-500 ease-in rounded-2xl p-4 hover:bg-slate-300 hover:text-black mt-8"
                            onClick={AddToCartHandeler}
                          >
                            Add to Cart
                          </button>
                        </div> 
                    </div>
                    <div class="product__details__btns__option">
                      <a href="#">
                        <BsFillHeartFill /> add to wishlist
                      </a>
                      <a href="#">
                        <AiOutlineRetweet /> Add To Compare
                      </a>
                    </div>
                    <div class="product__details__last__option">
                      <h5>
                        <span>Guaranteed Safe Checkout</span>
                      </h5>
                      {/* <img
                        src="img/shop-details/details-payment.png"
                        alt=""
                      /> */}
                      <ul>
                        <li>
                          <span>SKU:</span> {data.ProductName}
                        </li>
                        <li>
                          <span>Categories:</span> {data.category}
                        </li>
                        <li>
                          <span>Tag:</span> {data.ProductName}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Outlet/>
                </div>
              </div>
            </div>
          </div>
        </section>

        
      </>
    ) : (
      <p>Loading...</p>
    )}
  <Footer/>
  </div>
  );
}

export default ProductDetails;

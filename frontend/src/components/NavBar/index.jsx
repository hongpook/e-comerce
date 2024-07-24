import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/imgs/Adidas_Logo.png";
import authContext from "../../store/store";
// import { signOut } from "firebase/auth";
// import { auth } from "../../firebase/firebase-config";
import { useContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./style.scss"

function index() {
  const [toggle, setToggle] = useState(false);
  const authCtx = useContext(authContext);
  console.log("authCtx", authCtx);

  const user = JSON.parse(window?.localStorage?.getItem("user"))

  const cartLenght = useSelector((state) => state.cart.length);
  console.log(cartLenght);

  const signOutHandler = () => {
    console.log("signout");
    localStorage.removeItem("token");
    authCtx.setToken(null);
    alert("Sign-out successful.");
  };

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  const getToken = () => {
    const token = localStorage.getItem("token");
    authCtx.setToken(token);
    console.log("token", token);
  };

  useEffect(() => {
    getToken();
  }, []);
  return (
    <>
    <div className="">
        <div className='header m-auto  fixed top-0 right-0 left-0 max-lg:flex justify-between items-center backdrop-blur-sm  z-10  shadow-sm '>

          <div className="header__top ">
              <div className="container mx-auto">
                  <div className="row flex justify-between">
                      <div className="">
                          <div className="header__top__left">
                              <p>Free shipping, 30-day return or refund guarantee.</p>
                          </div>
                      </div>
                      <div className="">
                          <div className="header__top__right">
                              <div className="header__top__links">
                                  {/* <Link to="/login">Sign in</Link> */}
                                  <a href="#">FAQs</a>
                              </div>
                              <div className="header__top__hover">

                                  <select>
                                      <option value="">USD</option>
                                      <option value="">AUD</option>
                                      {/* <option value="">{user.email}</option> */}
                                  </select>
                                  
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div className='container mx-auto '>
              <div className="row flex justify-between items-center " >
                  <div className="w-64">
                      <div className="header__logo">
                          <NavLink to="/">
                              <img src={logo} alt="" />
                          </NavLink>
                      </div>
                  </div>
                  <div className="w-80">
                  <div className=" max-lg:hidden">
                    <NavLink to="/" className="text-black  p-3 m-2 font-bold">
                      Home
                    </NavLink>
                    <NavLink to="/products" className="text-black  p-3 m-2 font-bold">
                      Products
                    </NavLink>
                    <NavLink to="/blogs" className="text-black  p-3 m-2 font-bold">
                      Blogs
                    </NavLink>
                    <NavLink to="/about" className="text-black   p-3 m-2 font-bold">
                      About
                    </NavLink>
                    <NavLink to="/contact" className="text-black   p-3 m-2 font-bold">
                      Contact
                    </NavLink>
                  </div>
                  </div>
                  <div className="w-64">
                      <div className="text-black max-lg:hidden flex justify-end">
                        <NavLink to="/cart" className="p-2  ">
                          <FontAwesomeIcon icon={faCartShopping} />
                          <span className="p-1 rounded-full">{cartLenght}</span>
                        </NavLink>

                        {authCtx.token ? (
                          // <button
                          //   onClick={signOutHandler}
                          //   className="p-1 m-1 bg-black text-white"
                          // >
                          //   Logout
                          // </button>
                          <NavLink
                          onClick={signOutHandler}
                          className="p-2  bg-black text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 duration-300"
                        >
                          Log Out
                        </NavLink>
                        ) : (
                          <NavLink to="/login" className="p-2  bg-black text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 duration-300">
                            Login
                          </NavLink>
                        )}
                      </div>
                          <div class="price"></div>
                      {toggle ? (
            <>
              <div className=" bg-white flex flex-col lg:hidden ">
                <FontAwesomeIcon
                  icon={faXmark}
                  className="text-black cursor-pointer lg:hidden"
                  onClick={toggleHandler}
                />
                <NavLink to="/" className="text-black  p-3 m-2 font-bold">
                  Home
                </NavLink>
                <NavLink
                  to="/products"
                  className="text-black  p-3 m-2 font-bold"
                >
                  Products
                </NavLink>
                <NavLink
                  to="/blogs"
                  className="text-black  p-3 m-2 font-bold"
                >
                  Blogs
                </NavLink>
                <NavLink to="/about" className="text-black   p-3 m-2 font-bold">
                  About
                </NavLink>
                <NavLink
                  to="/contact"
                  className="text-black   p-3 m-2 font-bold"
                >
                  Contact
                </NavLink>
                <NavLink to="/cart" className="p-2 m-2 ">
                  <FontAwesomeIcon icon={faCartShopping} />
                  <span className="p-1 rounded-full">{cartLenght}</span>
                </NavLink>
                {authCtx.token ? (
                  <button
                    onClick={signOutHandler}
                    className="p-2 m-2 bg-black text-white"
                  >
                    Logout
                  </button>
                  ) : (
                    <NavLink
                      to="/login"
                      className="p-2 m-2 bg-black text-white text-center"
                    >
                      Login
                    </NavLink>
                  )}
                  </div>
                    </>
                  ) : (
                    <FontAwesomeIcon
                      icon={faBars}
                      className="text-black cursor-pointer lg:hidden"
                      onClick={toggleHandler}
                    />
                  )}
                  </div>
              </div>
          </div>
        </div>
        <div>
          <Outlet />
        </div>
    </div>
      {/* <div className=" ">
        <div className=" container m-auto flex fixed top-0 right-0 left-0 p-2 max-lg:flex justify-between items-center backdrop-blur-sm bg-white/30 z-10  shadow-sm ">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className=" max-lg:hidden">
            <NavLink to="/" className="text-black  p-3 m-2 font-bold">
              Home
            </NavLink>
            <NavLink to="/products" className="text-black  p-3 m-2 font-bold">
              Products
            </NavLink>
            <NavLink to="/about" className="text-black   p-3 m-2 font-bold">
              About
            </NavLink>
            <NavLink to="/contact" className="text-black   p-3 m-2 font-bold">
              Contact
            </NavLink>
          </div>
          <div className="text-black max-lg:hidden">
            <NavLink to="/cart" className="p-2 m-2 ">
              <FontAwesomeIcon icon={faCartShopping} />
              <span className="p-1 rounded-full">{cartLenght}</span>
            </NavLink>

            {authCtx.token ? (
              <button
                onClick={signOutHandler}
                className="p-1 m-1 bg-black text-white"
              >
                Logout
              </button>
            ) : (
              <NavLink to="/login" className="p-2 m-2 bg-black text-white">
                Login
              </NavLink>
            )}
          </div>
          {toggle ? (
            <>
              <div className=" bg-white flex flex-col lg:hidden ">
                <FontAwesomeIcon
                  icon={faXmark}
                  className="text-black cursor-pointer lg:hidden"
                  onClick={toggleHandler}
                />
                <NavLink to="/" className="text-black  p-3 m-2 font-bold">
                  Home
                </NavLink>
                <NavLink
                  to="/products"
                  className="text-black  p-3 m-2 font-bold"
                >
                  Products
                </NavLink>
                <NavLink to="/about" className="text-black   p-3 m-2 font-bold">
                  About
                </NavLink>
                <NavLink
                  to="/contact"
                  className="text-black   p-3 m-2 font-bold"
                >
                  Contact
                </NavLink>
                <NavLink to="/cart" className="p-2 m-2 ">
                  <FontAwesomeIcon icon={faCartShopping} />
                  <span className="p-1 rounded-full">{cartLenght}</span>
                </NavLink>
                {authCtx.token ? (
                  <button
                    onClick={signOutHandler}
                    className="p-2 m-2 bg-black text-white"
                  >
                    Logout
                  </button>
                ) : (
                  <NavLink
                    to="/login"
                    className="p-2 m-2 bg-black text-white text-center"
                  >
                    Login
                  </NavLink>
                )}
              </div>
            </>
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              className="text-black cursor-pointer lg:hidden"
              onClick={toggleHandler}
            />
          )}
        </div>

        <div>
          <Outlet />
        </div>
      </div> */}
    </>
  );
}

export default index;

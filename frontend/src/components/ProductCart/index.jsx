import { useNavigate, Outlet } from "react-router-dom";
import './../../assets/styles/style.scss';
import './style.css';
import { BsStarFill } from "react-icons/bs";
import FormatPrice from "../FormatPrice/FormatPrice";

const ProductCart = ({ image, name, price, id }) => {
  const navigate = useNavigate();
  return (
    <>
      {/* <div className="relative overflow-hidden min-h-screen">
        <div className="flex flex-col w-80 h-96 m-4 p-8 justify-center text-center items-center rounded-3xl backdrop-blur-xl bg-white/30  group">
          <img
            src={image}
            alt=""
            srcSet=""
            className="overflow-hidden  mix-blend-soft-light	rounded-3xl"
            sizes="(max-width: 479px) 41vw, (max-width: 767px) 44vw, (max-width: 991px) 21vw, 20vw"
          />
          <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0  rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button
              className="bg-black text-white py-2 px-5"
              onClick={() => {
                navigate(`/product/${id}`);
              }}
            >
              View Product
            </button>
          </div>

          <div className="m-5">
            <h5 className="font-bold flex-wrap text-slate-600 ">{name?.slice(0,10)}</h5>
            <p className="product-price text-blue-700 font-bold">{`${price}$`}</p>
          </div>
        </div>
      </div> */}

          <div class="product__item bg-gray-200 p-4 text-center grid-item" key={id}>
                          <div class="product__item__pic set-bg" style={{ backgroundImage: `url(${image})` }}>
                              <span class="label">New</span>
                              <ul class="product__hover">
                                  {/* <li><a href="#"><img src={heart} alt=""/></a></li>
                                  <li><a href="#"><img src={compare} alt=""/> <span>Compare</span></a></li>
                                  <li><a href="#"><img src={search} alt=""/></a></li> */}
                              </ul>
                          </div>
                          <div class="product__item__text">
                              <h6>{name}</h6>
                              <a href="#" class="add-cart" onClick={() => {navigate(`/product/${id}`); }}>+ Add To Cart</a>
                              <div class="rating flex justify-center ">
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                              </div>
                              <h5><FormatPrice price={price}/></h5>
                              <div class="product__color__select">
                                  <label for="pc-1">
                                      <input type="radio" id="pc-1"/>
                                  </label>
                                  <label class="active black" for="pc-2">
                                      <input type="radio" id="pc-2"/>
                                  </label>
                                  <label class="grey" for="pc-3">
                                      <input type="radio" id="pc-3"/>
                                  </label>
                              </div>
                          </div>
                      </div>
        <Outlet />
    </>
  );
};

export default ProductCart;

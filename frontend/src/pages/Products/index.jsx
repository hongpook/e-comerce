import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCart from "../../components/ProductCart";
import { Outlet } from "react-router-dom";
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import '../../assets/styles/style/pagination.css';
import './style.scss';
import Footer from "../../components/Footer/Footer.jsx";

const Products = () => {
  const [product, setProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(2); // Số lượng sản phẩm trên mỗi trang
  const [search, setSearch] = useState("");
  const [FilterArray, setFilterArray] = useState([]);
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  async function fetchProducts() {
    try {
      const data = await axios.get("http://localhost:4000/products/allProduct");
      const sortedData = data.data.sort(compareName);
      setProduct(sortedData);
      setFilterArray(sortedData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    filterProducts();
    setCurrentPage(1); // Đặt lại trang hiện tại về 1 khi search hoặc thay đổi bộ lọc
  }, [search, min, max]);

  function compareName(a, b) {
    const name1 = a.ProductName.toUpperCase();
    const name2 = b.ProductName.toUpperCase();

    let comparison = 0;

    if (name1 > name2) {
      comparison = 1;
    } else if (name1 < name2) {
      comparison = -1;
    }
    return comparison;
  }

  const filterProducts = () => {
    let filtered = product;

    if (search) {
      filtered = filtered.filter((item) =>
        item.ProductName.toUpperCase().includes(search.toUpperCase())
      );
    }

    if (min !== "") {
      filtered = filtered.filter((item) => item.ProductPrice >= parseFloat(min));
    }

    if (max !== "") {
      filtered = filtered.filter((item) => item.ProductPrice <= parseFloat(max));
    }

    setFilterArray(filtered);
  };

  // Tính chỉ số sản phẩm đầu tiên và cuối cùng trên trang hiện tại
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = FilterArray.slice(indexOfFirstProduct, indexOfLastProduct);

  // Chuyển trang
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Outlet />
      <div className="  mt-36 ">
        
        <Breadcrumb title={'Products'}/>
        
        <div className="container m-auto">
          <div className="">

            <div className="grid grid-cols-4 gap-5">
              <div className="input_form"> 

                <input
                  type="search"
                  className="outline-none  p-2 m-2"
                  placeholder="Search Products"
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="number"
                    placeholder="MIN"
                    className="outline-none w-20 p-2 m-2"
                    onChange={(e) => setMin(e.target.value)}
                    value={min}
                  />
                  <input
                    type="number"
                    placeholder="MAX"
                    className="outline-none w-20 p-2 m-2"
                    onChange={(e) => setMax(e.target.value)}
                    value={max}
                  />
                </div>
              </div>

              <div className="input_form pt-2"> 

              <select name="" id="">
                    <option value="">Màu</option>
                    <option value="">Xanh</option>
                    <option value="">Đen</option>
                  </select>
              </div>
              <div className="input_form pt-2"> 

                  <select name="" id="">
                    <option value="">Brand</option>
                    <option value="">Original</option>
                    <option value="">Adidas</option>
                  </select>
              </div>
              <div className="input_form pt-2"> 
                  <select name="" id="">
                    <option value="">Size</option>
                    <option value="">S</option>
                    <option value="">M</option>
                  </select>
              </div>
            </div>
            <div className="container mt-10">
              <div className="flex-wrap gap-4 justify-center mt-4 grid-container">
                {currentProducts.length === 0 ? (
                  <div className="m-4 p-4">
                    <h1 className="text-black">No products found.</h1>
                  </div>
                ) : (
                  currentProducts.map((item, index) => (
                    <ProductCart
                      key={index}
                      id={item.ProductId}
                      name={item.ProductName}
                      price={item.ProductPrice}
                      image={item.ProductImage}
                    />
                  ))
                )}
              </div>
              {/* Hiển thị nút chuyển trang */}
              <div className="flex justify-center mb-10">
                {FilterArray.length > productsPerPage && (
                  <nav>
                    <ul className="pagination">
                      {Array.from({ length: Math.ceil(FilterArray.length / productsPerPage) }, (_, i) => (
                        <li key={i} className="page-item flex items-center">
                          <button onClick={() => paginate(i + 1)} className="page-link">
                            {i + 1}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </nav>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Products;

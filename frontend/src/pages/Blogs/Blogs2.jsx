import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import '../../assets/styles/style/pagination.css';
import Footer from "../../components/Footer/Footer.jsx";
import BlogCard from "../../components/BlogCard/BlogCard.jsx";

const Blogs2 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(1); // Số lượng sản phẩm trên mỗi trang
  const [search, setSearch] = useState("");
  const [FilterArray, setFilterArray] = useState([]);
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/blogs");
        setBlogs(response.data); // Lưu danh sách bài đăng vào state
        setFilterArray(response.data); // Khởi tạo FilterArray với dữ liệu từ API
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []); // Chỉ gọi API khi component được mount lần đầu tiên

  useEffect(() => {
    filterProducts();
    setCurrentPage(1); // Đặt lại trang hiện tại về 1 khi search hoặc thay đổi bộ lọc
  }, [search, min, max]);

  const filterProducts = () => {
    let filtered = blogs;

    if (search) {
      filtered = filtered.filter(blog =>
        blog.title.toLowerCase().includes(search.toLowerCase()) ||
        blog.content.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (min) {
      filtered = filtered.filter(blog => blog.price >= min);
    }

    if (max) {
      filtered = filtered.filter(blog => blog.price <= max);
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
      <div className="mt-36">
        <Breadcrumb title={'Products'} />
        <div className="container m-auto">
          <div className="container mt-10">
            <div className="flex-wrap gap-4 justify-center mt-4 grid-container">
              {currentProducts.length === 0 ? (
                <div className="m-4 p-4">
                  <h1 className="text-black">No products found.</h1>
                </div>
              ) : (
                currentProducts.map((blog) => (
                  <BlogCard
                    key={blog.id} // Đảm bảo key là duy nhất trong React
                    title={blog.title}
                    author={blog.author}
                    content={blog.content}
                    image={blog.image}
                    created_at={blog.created_at}
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
      <Footer />
    </>
  );
};

export default Blogs2;

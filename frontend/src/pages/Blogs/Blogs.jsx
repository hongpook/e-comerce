import React, { useState, useEffect } from "react";
import BreadCrumb from "../../components/Breadcrumb/Breadcrumb";
import Footer from "../../components/Footer/Footer.jsx";
import BlogCard from "../../components/BlogCard/BlogCard.jsx";
import axios from "axios";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/blogs");
        setBlogs(response.data); // Lưu danh sách bài đăng vào state
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []); // Chỉ gọi API khi component được mount lần đầu tiên

  return (
    <>
      <div className="mt-36 mb-10">
        <div>
          <BreadCrumb title={"Blogs"} />
        </div>
        <div className="container m-auto mt-10">
            <div className="flex-wrap gap-4 justify-center mt-4 grid-container">

                {/* Lặp qua danh sách bài đăng và render BlogCard */}
                {blogs.map((blog) => (
                    <BlogCard
                    key={blog.id} // Đảm bảo key là duy nhất trong React
                    title={blog.title}
                    author={blog.author}
                    content={blog.content}
                    image={blog.image}
                    created_at={blog.created_at}
                    />
                ))}
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;

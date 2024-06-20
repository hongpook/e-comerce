import React from "react";
import { NavLink } from "react-router-dom";
import admin_1 from '../../assets/imgs/me/ll.jpg'
import admin_2 from '../../assets/imgs/me/vd.jpg'
import admin_3 from '../../assets/imgs/me/a.jpg'

function Hero() {
  return (
    <div className="container m-auto mt-10">
      <div className="grid grid-cols-3 gap-4">
        <div className=" bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-cover bg-center h-56 p-4" style={{ backgroundImage: `url(${admin_1})` }}>
          </div>
          <div className="p-4">
            <h2 className="text-2xl font-bold text-gray-800">Phúc</h2>
            <p className="mt-2 text-gray-600">đepọ </p>
            <div className="mt-4">
              <span className="text-gray-900 font-bold text-xl">dvgd</span>
            </div>
            <div className="mt-4">
              
            <NavLink
                  to="/"
                  className="p-2  bg-black text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 duration-300"
                >
                  Xem thêm thông tin
                </NavLink>
              </div>
          </div>
        </div>
        <div className=" bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-cover bg-center h-56 p-4" style={{ backgroundImage: `url(${admin_2})` }}>
          </div>
          <div className="p-4">
            <h2 className="text-2xl font-bold text-gray-800">Phúc</h2>
            <p className="mt-2 text-gray-600">đepọ </p>
            <div className="mt-4">
              <span className="text-gray-900 font-bold text-xl">dvgd</span>
            </div>
            <div className="mt-4">
              <NavLink
                  to="/"
                  className="p-2  bg-black text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 duration-300"
                >
                  Xem thêm thông tin
                </NavLink>
            </div>
          </div>
        </div>
        <div className=" bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-cover bg-center h-56 p-4" style={{ backgroundImage: `url(${admin_3})` }}>
          </div>
          <div className="p-4">
            <h2 className="text-2xl font-bold text-gray-800">Phúc</h2>
            <p className="mt-2 text-gray-600">đepọ </p>
            <div className="mt-4">
              <span className="text-gray-900 font-bold text-xl">dvgd</span>
            </div>
            <div className="mt-4">
                <NavLink
                  to="/"
                  className="p-2  bg-black text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 duration-300"
                >
                  Xem thêm thông tin
                </NavLink>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Hero;

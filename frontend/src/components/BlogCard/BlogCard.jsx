import { BsCalendar } from "react-icons/bs";
import { NavLink } from "react-router-dom";


// const BlogCard = ({image, name, created_at, id}) => {
//   return (
//     <>
//       <div className="col-lg-4 col-md-6 col-sm-6" key={id}>
//         {/* <div className="blog__item">
//           <div
//             className="blog__item__pic set-bg"
//             style={{
//               backgroundImage: `url(${image})`,
//             }}
//           ></div>
//           <div className="blog__item__text">
//             <span>
//               <BsCalendar /> {formatDate(created_at)}
//             </span>
//             <h5>{name}</h5>
//             <NavLink to={`/blogs/${id}`}>Read More</NavLink>
//           </div>
//         </div> */}
//         <h1>{name}</h1>
//         <img src={image} alt="" />
//         <p>{created_at}</p>
//       </div>
//       <Outlet />
//     </>
//   );
// };

// export default BlogCard;

import React from 'react';
import { useNavigate, Outlet } from "react-router-dom";

const BlogCard = ({ title, author, content, image, created_at , id }) => {
  const navigate = useNavigate();
  return (
    <>  
      <div className="grid-item" key={id}>
         <div className="blog__item">
           <div
             className="blog__item__pic set-bg"
             style={{
               backgroundImage: `url(${image})`,
             }}
           ></div>
           <div className="blog__item__text">
             <span>
               {/* <BsCalendar /> {formatDate(created_at)} */}
               {created_at}
             </span>
             <h5>{title}</h5>
             <NavLink to={`/blogs/${id}`}>Read More</NavLink>
           </div>
         </div>
       </div>
       <Outlet />
    </>
  );
};

export default BlogCard;

import React from "react";
import BreadCrumb from "../../components/Breadcrumb/Breadcrumb";
import Footer from "../../components/Footer/Footer.jsx";

const Blogs = () =>{

    return (
        <>
        
            <div className="mt-36">
                <div>
                    <BreadCrumb title={'Blogs'}/>
                </div>
            </div>
            <Footer/>
        </>
    )
}



export default Blogs;
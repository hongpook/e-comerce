
import { AiOutlineRight } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import '../../assets/styles/style.scss';

const BreadCrumb = ({title}) =>{
    return (
        <>
            <section class="breadcrumb-option">
                <div class="container breadcrumb-wrap">
                    <div class="">
                        <div class="">
                            <div class="breadcrumb__text ">
                                <h4>{title}</h4>
                                <div class="breadcrumb__links flex">
                                    <NavLink to="/">Home</NavLink>
                                    <AiOutlineRight />
                                    <span>{title}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BreadCrumb;
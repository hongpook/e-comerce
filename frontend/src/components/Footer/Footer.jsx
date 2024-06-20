
import "./style.scss";
import { AiOutlineHeart, AiOutlineMail } from "react-icons/ai";

import logoFooter from "../../assets/imgs/logo_adidas_footer.png";
import payment from "../../assets/imgs/payment.png";

const Footer = () =>{
    return (
        <footer class="footer">
        <div class="container">
            <div class="row footer_1 flex">
                <div class="flex-none w-80">
                    <div class="footer__about">
                        <div class="footer__logo">
                            <a href="#"><img className="logo_footer" src={logoFooter}  alt=""/></a>
                        </div>
                        <p>"Impossible is nothing", This slogan is an encouragement, a call to encourage everyone to participate and experience the joy of sport.</p>
                        <a href="#"><img src={payment} alt=""/></a>
                    </div>
                </div>
                <div class="flex-none w-64">
                    <div class="footer__widget">
                        <h6>Brands</h6>
                        <ul>
                            <li><a href="#">Originals</a></li>
                            <li><a href="#">SportWear</a></li>
                            <li><a href="#">Terrex</a></li>
                            <li><a href="#">Sustainability</a></li>
                        </ul>
                    </div>
                </div>
                <div class="flex-none w-64">
                    <div class="footer__widget">
                        <h6>Shopping</h6>
                        <ul>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Payment Methods</a></li>
                            <li><a href="#">Delivary</a></li>
                            <li><a href="#">Return & Exchanges</a></li>
                        </ul>
                    </div>
                </div>
                <div class="flex-none w-64">
                    <div class="footer__widget">
                        <h6>NewLetter</h6>
                        <div class="footer__newslatter">
                            <p>Be the first to know about new arrivals, look books, sales & promos!</p>
                            <form action="#">
                                <input type="text" placeholder="Your email"/>
                                <button type="submit"><AiOutlineMail class="icon_mail_alt"/></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="footer__copyright__text">
                        <p>Copyright ©
                            <script>
                                document.write(new Date().getFullYear());
                            </script>2024
                            All rights reserved | This website is made with by <a href="#" target="_blank">HongPook</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
};

export default Footer;
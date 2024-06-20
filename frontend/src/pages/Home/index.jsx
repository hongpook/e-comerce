import BuySteps from "../../components/BuyStepsCard/BuySteps.jsx";
import Fproduct from "../../components/Fproduct/Fproduct.jsx";
import Carousel from "../../components/Carousel/Carousel.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const HOME = () => {

  return (
    <>
      <div className="scroll-smooth focus:scroll-auto mb-20"> 
        
        <Carousel  />  
        <Fproduct />
        <BuySteps />
      </div>
      <Footer/>
    </>
  );
};

export default HOME;

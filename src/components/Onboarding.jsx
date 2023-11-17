import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import"/src/index.css"
import { Link } from "react-router-dom";

export default  function Onboarding()  {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };


    
    return (
      <div  className="Onboarding-container">
        <div className="Onboarding-main">
        <Slider {...settings}>
          <div className="img1">
            <h3><img src="/src/img/Ilustration1.jpg" alt="" /></h3>
            <h1>Gain total control of your money</h1>
                <p>Become your own money manager and make every cent count</p>
          </div>
          <div className="img2">
            <h3><img src="/src/img/Illustration2.jpg" alt="" /></h3>
            <h1>Know where your money goes</h1>
            <p>Track your transaction easily, with categories and financial report</p>
          </div>
          <div className="img3">
            <h3><img src="/src/img/Illustration3.jpg" alt="" /></h3>
            <h1>Planning ahead</h1>
            <p>Setup your budget for each category so you in control</p>
          </div>
        </Slider>
            <div className="Onboarding-text">
                <Link to={"/signup"}><button className="inputbtn"> Sign Up</button></Link>
                <Link to={"/login"}> <button className="login">Login</button></Link>
            </div>
        </div>
            
      </div>
    );
  }

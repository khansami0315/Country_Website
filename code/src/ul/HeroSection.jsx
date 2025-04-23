import { FaLongArrowAltRight } from "react-icons/fa";
//import profileImage from '../assets/download.jpeg';
//import './Home.css'; // if CSS is in separate file
import profileImage from '../assets/country.jpeg';



 const HeroSection = () => {
  return (
    <main className="hero-section main">

      <div className="container grid grid-two-cols">

        {/* Left side content */}
        <div className="hero-content"> 
          <h1 className="heading-xl">
            Explore the World One Country at a Time
          </h1>

          <p className="paragraph">
            Discover the history, culture, and beauty of every nation.
            Search and filter through countries to find detailed information.
          </p>

          <button className="btn btn-darken btn-inline bg-white-box">
            Start Exploring <FaLongArrowAltRight />
          </button>
        </div>

        {/* Right side image */}
        <div className="hero-image">
          <img src={profileImage} alt="Speaker" className="hero-img-circle" />
        </div>

      </div>
      
    </main>
  );
};

export default HeroSection;
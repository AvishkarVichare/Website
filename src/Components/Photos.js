import React from 'react';
// import '../css/slider.css'
// import { SliderData } from './SliderData';
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import '../css/photo.css'
import {Link} from "react-router-dom";

const Photos = () => {

  return (
    <div className='mainphoto'>
      <h2>Some photos</h2>
      <div id="photoslider" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#photoslider" data-slide-to="0" className="active"></li>
    <li data-target="#photoslider" data-slide-to="1"></li>
    <li data-target="#photoslider" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://raw.githubusercontent.com/YashDeshmukh2610/Shivjayanti/master/main/WhatsApp%20Image%202022-03-18%20at%202.22.10%20PM.jpeg"/>
    </div>
    
    <div className="carousel-item">
      <img className="d-block w-100" src="https://raw.githubusercontent.com/YashDeshmukh2610/Shivjayanti/master/main/WhatsApp%20Image%202022-03-18%20at%202.25.02%20PM.jpeg"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://static.toiimg.com/photo/62996111.cms"/>
    </div>
  </div>
  <Link className="carousel-control-prev" to="#photoslider" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </Link>
  <Link className="carousel-control-next" to="#photoslider" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </Link>
</div>

<Link className='more' to="/gallery">More photos</Link>
    </div>

  );
};

export default Photos;
import React from 'react';
// import '../css/slider.css'
// import { SliderData } from './SliderData';
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import '../css/photo.css'
const Photos = () => {

  return (
    <div className='mainphoto'>
      <h2>Some photos</h2>
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/article_images/2020/05/19/file741k0ojtu7aehkidmzv-1144509568-1549945904.jpg?itok=B3lCJ0X4" alt="First slide"/>
    </div>
    
    <div class="carousel-item">
      <img class="d-block w-100" src="https://images.tv9marathi.com/wp-content/uploads/2022/02/19231909/chandrapur-shivjayanti.jpg"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://static.toiimg.com/photo/62996111.cms"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    </div>

  );
};

export default Photos;
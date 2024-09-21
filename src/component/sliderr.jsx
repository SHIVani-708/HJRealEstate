import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.css";
import img1 from "../img/img1.jpg";
import img3 from "../img/img3.jpeg";
import img5 from "../img/img5.jpg";
import img6 from "../img/img6.jpeg";
import img7 from "../img/img7.jpg";
import img8 from "../img/img8.jpg";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const sliderImageUrl = [
  //First image url
  {
    url: img1
  },
  {
    url: img3
  },
  //Second image url
  {
    url: img5
  },
  //Third image url
  {
    url: img6
  },

  //Fourth image url

  {
    url: img7
  },
  {
    url: img8
  }
];
const Slider = () => {
  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
              <img src={imageUrl.url} alt="movie" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Slider;

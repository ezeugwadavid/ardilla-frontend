import React from "react";
import { TestimonialsContainer } from "./testimonials.styles";
import BoyImage from "../../assets/boy-photo.svg";
import ManImage from "../../assets/man-photo.svg";
import WomanImage from "../../assets/woman-photo.svg";
import WomanVideo from "../../assets/woman-video.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const images = [
    {
      id: 1,
      src: WomanVideo,
    },
    {
      id: 2,
      src: BoyImage,
    },
    {
      id: 3,
      src: ManImage,
    },
    {
      id: 4,
      src: WomanImage,
    },
    {
      id: 5,
      src: ManImage,
    },
    {
      id: 6,
      src: BoyImage,
    },
  ];

  return (
    <TestimonialsContainer>
      <div className="testm-content">
        <div className="testm-header">
          Don’t Take Our <span className="coloured">Word</span> For It
        </div>
        <div className="testm-text">
          Listen to testimonials from Ardilla users building wealth
        </div>
        <div className="photo-container">
          <Swiper slidesPerView={3} spaceBetween={0}>
            {images.map((image) => {
              return (
                <SwiperSlide index={image.id}>
                  <img
                    index={image.id}
                    className="image"
                    src={image.src}
                    alt=""
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </TestimonialsContainer>
  );
};

export default Testimonials;

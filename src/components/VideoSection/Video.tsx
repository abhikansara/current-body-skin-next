import React from "react";
import ReactPlayer from "react-player/lazy";
import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SwiperWrapper } from "./style";

const videos = [
  {
    src: "https://www.youtube.com/shorts/AKtqv3vv9ww",
    caption: "Relax mommy, I'm using Kim & Kimmy diapers",
  },
  {
    src: "https://www.youtube.com/shorts/AoAcGoMcDl8",
    caption: <a href="https://kim-kimmy.com">Kim-kimmy.com</a>,
  },
  {
    src: "https://www.youtube.com/shorts/nQkSHNpwQyM",
    caption: "Thin and Incredibly soft",
  },
  {
    src: "https://www.youtube.com/shorts/w86kbtpoEn0",
    caption: "Perfect for sensitive skin 😊",
  },
];
const Video = () => {
  return (
    <SwiperWrapper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={"auto"}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 0,
      }}
      loop={false}
      slidesPerView={4}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }}
    >
      {videos.map((video, index) => (
        <SwiperSlide key={index}>
          <ReactPlayer
            url={video.src}
            width={300}
            height={500}
            playing={true}
            muted
          />
        </SwiperSlide>
      ))}
    </SwiperWrapper>
  );
};

export default Video;

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
    // src: "https://www.youtube.com/shorts/AKtqv3vv9ww",
    src: "",
    caption: "Relax mommy, I'm using Kim & Kimmy diapers",
  },
  {
    // src: "https://www.youtube.com/shorts/AoAcGoMcDl8",
    src: "",

    caption: <a href="https://kim-kimmy.com">Kim-kimmy.com</a>,
  },
  {
    // src: "https://www.youtube.com/shorts/nQkSHNpwQyM",
    src: "",

    caption: "Thin and Incredibly soft",
  },
  {
    // src: "https://www.youtube.com/shorts/w86kbtpoEn0",
    src: "",

    caption: "Perfect for sensitive skin 😊",
  },
  {
    // src: "https://www.youtube.com/shorts/llyqEMY90E8",
    src: "",

    caption: "12hrs leakproof protection",
  },
];
const Video = () => {
  return (
    <SwiperWrapper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={"auto"}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      loop={true}
      slidesPerView={3}
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
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1440: {
          slidesPerView: 3,
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
            loop={true}
          />
        </SwiperSlide>
      ))}
    </SwiperWrapper>
  );
};

export default Video;

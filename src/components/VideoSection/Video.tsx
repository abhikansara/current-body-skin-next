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
    src: "https://cdn4.fireworktv.com/medias/2022/7/14/1657792613-fyrivnmq/watermarked/540/10000000_555824985962160_1494333877945714038_n.mp4",
    caption: "Relax mommy, I'm using Kim & Kimmy diapers",
  },
  {
    src: "https://cdn4.fireworktv.com/medias/2022/7/14/1657791396-pirfnaot/watermarked/540/10000000_468799037753186_3138776627433085089_n.mp4",
    caption: <a href="https://kim-kimmy.com">Kim-kimmy.com</a>,
  },
  {
    src: "https://cdn4.fireworktv.com/medias/2022/7/14/1657791918-wjobaflc/watermarked/540/10000000_3169424163270133_4593080676021649237_n.mp4",
    caption: "Thin and Incredibly soft",
  },
  {
    src: "https://cdn4.fireworktv.com/medias/2022/7/14/1657792120-acznwigx/watermarked/540/10000000_1220842515067374_9156743976455283835_n.mp4",
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
            loop={true}
            muted
          />
        </SwiperSlide>
      ))}
    </SwiperWrapper>
  );
};

export default Video;

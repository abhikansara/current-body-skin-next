"use client";

import React from "react";
import {
  BeeImage,
  Container,
  Content,
  CurveImage,
  Header,
  SwiperWrapper,
} from "./style";
import Card from "./Card";
import HoneyImg from "@/assets/images/gamechanger/honey.svg";
import RunningImg from "@/assets/images/gamechanger/running.svg";
import RadianceImg from "@/assets/images/gamechanger/radiance.svg";
import BeeImg from "@/assets/images/gamechanger/bee.png";
import CurveLine from "@/assets/images/gamechanger/curveline.svg";
import { useMediaQuery } from "react-responsive";
import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const GameChanger = () => {
  const isMobileView = useMediaQuery({ maxWidth: 1024 });

  const items = [
    {
      img: HoneyImg,
      label: "Experience 100% Pure Goodness",
      para: "Absolutely natural, glyphosate-free, and pure—that's what you'll put into your body.",
    },
    {
      img: RunningImg,
      label: "Regain Strength Like a Hero",
      para: "Spartan Bee Bread isn't just about recovery; it's about bouncing back stronger than ever. ",
    },
    {
      img: HoneyImg,
      label: "Become a Detox Dynamo",
      para: "Imagine your body, fully detoxed and thriving. Our superfood will cleanse you from the inside out, every single day.",
    },

    {
      img: RadianceImg,
      label: "Defy Time with Radiance",
      para: "Who says aging has to show? Look and feel rejuvenated with Spartan Bee Bread's potent anti-aging nutrients.",
    },
  ];

  const mobileView = () => {
    return (
      <SwiperWrapper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
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
        }}
      >
        {items?.map((i, ind) => (
          <SwiperSlide key={ind}>
            <Card key={ind} img={i?.img} label={i?.label} para={i?.para} />
          </SwiperSlide>
        ))}
      </SwiperWrapper>
    );
  };

  return (
    <Container>
      <BeeImage unoptimized src={BeeImg} alt={"bee"} />
      <CurveImage src={CurveLine} alt={"line"} />
      <Header>
        <div>
          Why Spartan Bee Bread <br />
          is the Ultimate <b>Game-Changer</b>
        </div>
      </Header>
      <Content>
        {isMobileView
          ? mobileView()
          : items?.map((i, ind) => (
              <Card key={ind} img={i?.img} label={i?.label} para={i?.para} />
            ))}
      </Content>
    </Container>
  );
};

export default GameChanger;

"use client";

import React from "react";
import { Button, Container, Footer, Header, SwiperWrapper } from "./style";
import BeforeAfterCard from "./BeforeAfterCard";
import UnderarmBefore from "@/assets/images/reviews/underarm.png";
import UnderarmAfter from "@/assets/images/reviews/underarm-after.png";
import NeckBefore from "@/assets/images/reviews/neck-before.png";
import NeckAfter from "@/assets/images/reviews/neck-after.png";
import BackBefore from "@/assets/images/reviews/back-before.png";
import BackAfter from "@/assets/images/reviews/back-after.png";
import AvatarImg from "@/assets/images/reviews/avatar.png";
import Avatar2Img from "@/assets/images/reviews/Avatar2.png";
import Avatar3Img from "@/assets/images/reviews/Avatar3.png";

import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CardSwipper from "./CardSwipper";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const items = [
    {
      title: "Underarm",
      beforeImg: UnderarmBefore,
      afterImg: UnderarmAfter,
    },
    {
      title: "Neck",
      beforeImg: NeckBefore,
      afterImg: NeckAfter,
    },
    {
      title: "Back",
      beforeImg: BackBefore,
      afterImg: BackAfter,
    },
  ];

  const reviews = [
    {
      msg: "I love the glow pads. I like the pink bag better. It has better quality pads.",
      name: "Tee",
      imgSrc: AvatarImg,
    },
    {
      msg: "This product works its only been 2 weeks and I can tell the difference in my skin. Currently this is the only product I use and I see improvement!",
      name: "Stephanie Whitmore",
      imgSrc: Avatar2Img,
    },
    {
      msg: "I’m glad I got these before they sold out! I absolutely love the way it makes my skin look and feel! Now be patient it takes some time as they are ...",
      name: "Karen",
      imgSrc: Avatar3Img,
    },
  ];

  return (
    <Container>
      <Header>Results & happy customers never lie</Header>

      <div>
        <CardSwipper>
          {items?.map((i, ind) => (
            <SwiperSlide key={ind}>
              <BeforeAfterCard
                title={i?.title}
                beforeImg={i?.beforeImg}
                afterImg={i?.afterImg}
              />
            </SwiperSlide>
          ))}
        </CardSwipper>
      </div>
      <div>
        <CardSwipper>
          {reviews?.map((i, ind) => (
            <SwiperSlide key={ind}>
              <ReviewCard msg={i?.msg} name={i?.name} imgSrc={i?.imgSrc} />
            </SwiperSlide>
          ))}
        </CardSwipper>
      </div>
      <Footer>
        <Button>More Reviews</Button>
      </Footer>
    </Container>
  );
};

export default Reviews;

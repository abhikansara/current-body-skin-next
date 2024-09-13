"use client";

import React from "react";
import {
  Container,
  Content,
  Header,
  MobileWrapper,
  SwiperWrapper,
} from "./style";
import CardItem from "./CardItem";
import BreadImg from "@/assets/images/ingredients/bread.png";
import FruitsImg from "@/assets/images/ingredients/fruits.png";
import MoleculesImg from "@/assets/images/ingredients/molecules.png";
import MineralsImg from "@/assets/images/ingredients/minerals.png";
import ProtienImg from "@/assets/images/ingredients/protien.png";
import EatableImg from "@/assets/images/ingredients/eatable.png";
import { useMediaQuery } from "react-responsive";
import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CardMobile from "./CardMobile";

const Ingredients = () => {
  const isMobileView = useMediaQuery({ maxWidth: 860 });

  const items = [
    {
      image: BreadImg,
      label: "Bee Bread – Nature's Powerhouse of Nutrients",
      para: "Scientifically speaking, bee bread isn't just a buzzword. This phenomenal ingredient is a natural reservoir of field-gathered flower pollen, curated by worker honey bees. Rich in essential nutrients, it serves as the cornerstone of Spartan Bee Bread's effectiveness.",
    },
    {
      image: FruitsImg,
      label: "A Thoughtfully Curated Fruit Blend",
      para: "Our mix of blackcurrant, sea buckthorn, apples, and a touch of cinnamon isn't just a flavorful afterthought. These natural elements amplify the nutritional profile, making each bite not only delicious but also extraordinarily beneficial for your well-being.",
    },
    {
      image: MoleculesImg,
      label: "Essential Amino Acids and a Full Vitamin Spectrum",
      para: "The Spartan Bee Bread formula is full of amino acids and vitamins A, B, C, D, E, K—you name it. And because they're naturally occurring, your body absorbs them more efficiently, aiding in optimal health.",
    },
    {
      image: MineralsImg,
      label: "The Richness of Minerals",
      para: "You're not just eating food; you're consuming essential minerals like iron, magnesium, calcium, and potassium in their most natural form. These are the building blocks for cellular health and overall well-being, sourced directly from nature.",
    },
    {
      image: ProtienImg,
      label: "A Stack of Over 240 Ingredients",
      para: "Don't let the simplicity fool you. With more than 240 natural ingredients working in synergy, Spartan Bee Bread upgrades ordinary nutrition to offer a holistic approach to your health.",
    },
    {
      image: EatableImg,
      label: "Only the Purest for Our Spartans",
      para: "Rest easy knowing that bee bread's unique creation process ensures it's untainted by waste products, poisons, or toxins.",
    },
  ];

  const mobileView = () => {
    return (
      <MobileWrapper>
        {items?.map((i, ind) => (
          <CardMobile key={ind} img={i?.image} title={i?.label} />
        ))}
      </MobileWrapper>
    );
  };

  return (
    <Container>
      <Header>
        <div>
          What Goes Inside <b>Spartan</b> <br /> <b>Bee Bread</b> Matters
        </div>
      </Header>
      {isMobileView ? (
        mobileView()
      ) : (
        <Content>
          {items?.map((i, ind) => (
            <CardItem
              img={i?.image}
              key={ind}
              label={i?.label}
              para={i?.para}
            />
          ))}
        </Content>
      )}
    </Container>
  );
};

export default Ingredients;

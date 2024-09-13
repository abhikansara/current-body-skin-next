"use client";

import React from "react";
import {
  Accordion,
  Container,
  Content,
  DownFlowerImage,
  Flower2,
  Flower3,
  Flower4,
  HalfFlowerImage,
  Header,
  Info,
  Para,
  PeachShadeImage,
  PurpleShadeImage,
  Title,
} from "./style";
import Image from "next/image";
import BottleImg from "@/assets/images/about/bottle.png";
import UpArrowIcon from "@/assets/images/about/upArrow.svg";
import DownArrowIcon from "@/assets/images/about/downArrow.svg";
import PeachShade from "@/assets/images/about/peachshade.jpg";
import PurpleShade from "@/assets/images/about/purpleshade.png";
import HalfFlowerImg from "@/assets/images/about/half-flower.png";
import FullFlowerImg from "@/assets/images/about/flower.png";
import DownFlowerImg from "@/assets/images/about/downFlower.png";

const About = () => {
  return (
    <Container>
      <PeachShadeImage src={PeachShade} alt="peachShade" />
      <PurpleShadeImage src={PurpleShade} alt="purpleShade" />
      <HalfFlowerImage src={HalfFlowerImg} alt="halfFlower" />
      <DownFlowerImage src={DownFlowerImg} alt="halfFlower" />

      <Flower2 src={FullFlowerImg} alt="halfFlower" />
      <Flower3 src={FullFlowerImg} alt="halfFlower" />
      <Flower4
        src={FullFlowerImg}
        alt="halfFlower"
        style={{ right: "8%", top: "75%" }}
      />
      <Header>
        Twin Palms Naturals <br />
        Passionate About Your Well-Being
      </Header>
      <Content>
        <Info>
          <Accordion>
            <Title>
              About the Dream Bliss
              <Image src={UpArrowIcon} alt="upArrow" />
            </Title>
            <Para>
              So you know, we’ve always been the type to give more than we take
              always there for friends, family, and even strangers. Helping
              people is what we do.
            </Para>
          </Accordion>

          <Accordion>
            <Title>
              How Dream Bliss Came to
              <Image src={DownArrowIcon} alt="upArrow" />
            </Title>
          </Accordion>

          <Accordion>
            <Title>
              Falling Asleep Doesn't... Complicated
              <Image src={DownArrowIcon} alt="upArrow" />
            </Title>
          </Accordion>

          <Accordion>
            <Title>
              Combat Lack of Sleep and Stress
              <Image src={DownArrowIcon} alt="upArrow" />
            </Title>
          </Accordion>
        </Info>
        <Image src={BottleImg} alt="about" />
      </Content>
    </Container>
  );
};

export default About;

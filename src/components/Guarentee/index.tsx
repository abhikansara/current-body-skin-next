"use client";

import React from "react";
import {
  Container,
  Content,
  MobPeachShadeImage,
  MobPurpleShadeImage,
  Para,
  PeachShadeImage,
  PersonImg1,
  PersonImg2,
  PersonImg3,
  PersonImg4,
  PersonImg5,
  PersonImg6,
  PurpleShadeImage,
  Title,
} from "./style";
import PeachImg from "@/assets/images/guarentee/peach.png";
import PurpleImg from "@/assets/images/guarentee/purple.png";
import Person1 from "@/assets/images/guarentee/1.png";
import Person2 from "@/assets/images/guarentee/2.png";
import Person3 from "@/assets/images/guarentee/3.png";
import Person4 from "@/assets/images/guarentee/4.png";
import Person5 from "@/assets/images/guarentee/5.png";
import Person6 from "@/assets/images/guarentee/6.png";
import BadgeIcon from "@/assets/images/guarentee/badge.png";
import MobPurple from "@/assets/images/guarentee/mob-purple.png";
import MobPeach from "@/assets/images/guarentee/mob-peach.png";
import Image from "next/image";

const Guarentee = () => {
  return (
    <Container>
      <PurpleShadeImage src={PeachImg} alt="" />
      <PeachShadeImage src={PurpleImg} alt="" />
      <MobPeachShadeImage src={MobPeach} alt="" />
      <MobPurpleShadeImage src={MobPurple} alt="" />
      <Content>
        <Image src={BadgeIcon} alt="badge" />
        <Title>
          Sweet Dreams <br />
          or Your Money Back
        </Title>
        <Para>
          Nervous about trying something new? No sweat! Here's the deal: We
          believe in Immune Bliss so much that we offer a 30-day full money-back
          guarantee.
        </Para>
      </Content>
      <PersonImg1 src={Person1} alt="" />
      <PersonImg2 src={Person2} alt="" />
      <PersonImg3 src={Person3} alt="" />
      <PersonImg4 src={Person4} alt="" />
      <PersonImg5 src={Person5} alt="" />
      <PersonImg6 src={Person6} alt="" />
    </Container>
  );
};

export default Guarentee;

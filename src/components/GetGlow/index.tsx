"use client";

import React from "react";
import { Card, Container, Content, Footer, Header, Text } from "./style";
import FaceImg from "@/assets/images/getglow/face.png";
import UnderarmImg from "@/assets/images/getglow/underarm.png";
import ChestImg from "@/assets/images/getglow/chest.png";
import LadypartsImg from "@/assets/images/getglow/ladyparts.png";
import BackImg from "@/assets/images/getglow/backimg.png";
import LegsImg from "@/assets/images/getglow/legs.png";
import Image from "next/image";

const GetGlow = () => {
  const items = [
    {
      img: FaceImg,
      label: "Face, Smoker Lips & Neck",
    },
    {
      img: UnderarmImg,
      label: "Underarms",
    },
    {
      img: ChestImg,
      label: "Chest",
    },
    {
      img: LadypartsImg,
      label: "Lady Parts",
    },
    {
      img: BackImg,
      label: "Back",
    },
    {
      img: LegsImg,
      label: "Legs",
    },
  ];

  return (
    <Container>
      <Header>Get your glow from head to toe</Header>
      <Content>
        {items?.map((i, ind) => (
          <Card key={ind}>
            <Image src={i?.img} alt={i?.label} />
            <Text>{i?.label}</Text>
          </Card>
        ))}
      </Content>
      <Footer>And more.. It works everywhere!</Footer>
    </Container>
  );
};

export default GetGlow;

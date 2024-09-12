"use client";

import React from "react";
import { Container, Content, Header } from "./style";
import ReelIcon from "@/assets/images/videoSection/reel.svg";
import Image from "next/image";
import Video from "./Video";

const VideoSection = () => {
  return (
    <Container>
      <Header>
        <Image unoptimized src={ReelIcon} alt="reel" />
        Here’s What Our Happy Customers Think
      </Header>
      <Content>
        <Video />
      </Content>
    </Container>
  );
};

export default VideoSection;

"use client";

import React from "react";
import {
  BlissCard,
  BlissImage,
  Capsules,
  Card,
  Container,
  Content,
  FlowerImage,
  Header,
  ListItem,
} from "./style";
import BlissImg from "@/assets/images/bladderbliss/bliss.png";
import FlowerImg from "@/assets/images/bladderbliss/flower.svg";
import CapsuleImg from "@/assets/images/bladderbliss/capsules.png";

const BladderBliss = () => {
  return (
    <Container>
      <Capsules src={CapsuleImg} alt="capsules" />
      <FlowerImage src={FlowerImg} alt="flower" />
      <Header>
        Why Bladder Bliss Stands Out in <br /> the Crowd
      </Header>
      <Content>
        <Card>
          <ListItem>Blend of Natural Sleep Aids</ListItem>
          <ListItem>Drug-free and Non-pharmaceutical</ListItem>
          <ListItem>Awaken Refreshed and Ready</ListItem>
          <ListItem>Longevity and Historical Usage</ListItem>
          <ListItem>Made with Sleep Specialists</ListItem>
        </Card>
        <BlissCard>
          <BlissImage src={BlissImg} alt="bliss" />
          <div className="title">
            BLADDER <br /> BLISS
          </div>
          <Card className="list">
            <ListItem>Comprehensive Solution & Synergistic approach</ListItem>
            <ListItem>Guaranteed</ListItem>
            <ListItem>Guaranteed</ListItem>
            <ListItem>Time-Tested</ListItem>
            <ListItem>Collaborative Design</ListItem>
          </Card>
        </BlissCard>
        <Card className="competition">
          <ListItem>Competition</ListItem>
          <ListItem>Basic Blend</ListItem>
          <ListItem>
            Beware, many leading <br />
            products contain drugs
          </ListItem>
          <ListItem>Unreliable</ListItem>
          <ListItem>Iffy results</ListItem>
          <ListItem>Not Specialist-Approved</ListItem>
        </Card>
      </Content>
    </Container>
  );
};

export default BladderBliss;

"use client";

import React from "react";
import {
  Container,
  Content,
  Footer,
  GetTodayBtn,
  Header,
  ImageWrapper,
  Info,
  Para,
} from "./style";
import KidzImage from "@/assets/images/getyourstoday/kidz.png";
import WarrantyIcon from "@/assets/images/getyourstoday/warranty.svg";
import SupportIcon from "@/assets/images/getyourstoday/support.svg";
import Image from "next/image";

const GetYoursToday = () => {
  return (
    <Container>
      <ImageWrapper>
        <Image
          unoptimized
          src={KidzImage}
          alt={"Kidz image"}
          style={{ height: "100%", width: "100%" }}
        />
      </ImageWrapper>
      <Content>
        <Header>Experience Quality and Safety Without Breaking The Bank</Header>
        <Para>
          When purchasing our product, you can rest easy knowing that our
          thermometers are rigorously tested to ensure they meet the highest
          safety and efficacy standards.
        </Para>
        <Para>
          Our thermometer is ISO 13485, CE, and RoHS certified and TGA No
          382577, and each thermometer is individually clinically tested and
          comes with a quality certificate stamped on it. Plus, with competitive
          pricing and special promotions available, you don't have to sacrifice
          quality for affordability. We also understand the importance of trust
          when it comes to online shopping. That's why we've made it a priority
          to provide personalized support before, during, and after your
          purchase.
        </Para>
        <GetTodayBtn>Get Yours Today!</GetTodayBtn>
        <Footer>
          <Info>
            <Image src={WarrantyIcon} alt={"warranty"} />
            <span>18-Month Warranty</span>
          </Info>
          <Info>
            <Image src={SupportIcon} alt={"warranty"} />
            <span>Personalized Customer Support</span>
          </Info>
        </Footer>
      </Content>
    </Container>
  );
};

export default GetYoursToday;

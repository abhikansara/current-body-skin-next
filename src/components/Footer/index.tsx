"use client";

import React from "react";
import {
  Container,
  Content,
  Labels,
  LeftLabel,
  LogoWrapper,
  RightLabel,
} from "./style";
import Image from "next/image";
import Logo from "@/assets/images/footer/footerlogo.png";

const Footer = () => {
  return (
    <Container>
      <Content>
        <LogoWrapper src={Logo} alt={"footer-logo"} />
      </Content>
      <Labels>
        <RightLabel>
          <span>Copyright © 2022 Twin Palms Naturals</span>{" "}
          <span>Privacy Policy</span>
        </RightLabel>
        <LeftLabel>
          <span>Cookies</span>
          <span>Terms of Service</span>
          <span>Refund policy</span>
        </LeftLabel>
      </Labels>
    </Container>
  );
};

export default Footer;

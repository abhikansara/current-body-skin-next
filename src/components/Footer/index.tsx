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
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  return (
    <Container>
      <Content>
        <LogoWrapper src={Logo} alt={"footer-logo"} />
      </Content>
      <Labels>
        <RightLabel>
          <span className="cursor">Copyright © 2022 Twin Palms Naturals</span>{" "}
          <span
            className="cursor"
            onClick={() => router.push("/privacy-policy")}
          >
            Privacy Policy
          </span>
        </RightLabel>
        <LeftLabel>
          <span className="cursor" onClick={() => router.push("/cookies")}>
            Cookies
          </span>
          <span
            className="cursor"
            onClick={() => router.push("/terms-of-service")}
          >
            Terms of Service
          </span>
          <span
            className="cursor"
            onClick={() => router.push("/refund-policy")}
          >
            Refund policy
          </span>
        </LeftLabel>
      </Labels>
    </Container>
  );
};

export default Footer;

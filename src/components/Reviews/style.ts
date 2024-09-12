import Image from "next/image";
import styled from "styled-components";
import { Swiper } from "swiper/react";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fadef4;
  gap: 30px;
  padding: 30px;
  position: relative;

  .footer-btn {
    position: absolute;
    bottom: 15px;
    display: flex;
    justify-content: space-around;
    width: 100%;

    .before-label {
      border: 1px solid;
      font-size: 16px;
      padding: 8px 16px;
      background-color: #ff5252;
      color: #ffffff;
      border-radius: 38px;
      font-weight: 700;
      text-transform: uppercase;
    }

    .after-label {
      border: 1px solid;
      font-size: 16px;
      padding: 8px 16px;
      background-color: #40e87b;
      color: #ffffff;
      border-radius: 38px;
      font-weight: 700;
      text-transform: uppercase;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  font-weight: 700;
  color: #000000;
  text-align: center;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

export const BACard = styled.div`
  padding: 24px 20px;
  border-radius: 8px;
  background: #ffffff;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: 400;
  color: #000000;
  padding-bottom: 16px;
  text-transform: uppercase;
`;

export const ImageWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const BeforeImage = styled(Image)`
  border-radius: 10px;
`;

export const AfterImage = styled(Image)`
  border-radius: 10px;
`;

export const SwiperWrapper = styled(Swiper)`
  width: 100%;
  .swiper-slide {
    display: flex;
    justify-content: center;
    max-width: 100%;
    width: 100%;
  }
`;

export const ReviewCardItem = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 8px;
  width: 400px;
  max-width: 400px;
  gap: 30px;
  min-height: 260px;
`;

export const Description = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #303030;
`;

export const Avatar = styled.div`
  display: flex;
  gap: 20px;
  margin-top: auto;

  .info {
    display: flex;
    flex-direction: column;

    .name {
      font-size: 16px;
      font-weight: 700;
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.div`
  background-color: #ffffff;
  font-weight: 700;
  font-size: 18px;
  border: 1px solid #f4235c;
  padding: 20px 40px;
`;

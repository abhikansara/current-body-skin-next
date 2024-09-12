import Image from "next/image";
import styled from "styled-components";
import { Swiper } from "swiper/react";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  background: #100f0f;
  justify-content: center;
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  font-weight: 700;
  color: #ffffff;
  text-transform: uppercase;
  text-align: center;

  b {
    color: #ffc406;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 30px;
  padding: 30px;
`;

export const Item = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: #ffffff;
  padding: 20px 30px;
  width: 300px;
  max-width: 300px;
  align-items: center;
`;

export const Label = styled.div`
  font-weight: 500;
  font-size: 22px;
  text-align: center;
  color: #000000;
`;

export const Para = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #363636;
  text-align: center;
`;

export const SwiperWrapper = styled(Swiper)`
  .swiper-slide {
    display: flex;
    justify-content: center;
    max-width: 100%;
    width: 100%;
  }
`;

export const BeeImage = styled(Image)`
  position: absolute;
  right: 272px;
  top: -88px;
  z-index: 1;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const CurveImage = styled(Image)`
  position: absolute;
  right: 0px;
  top: 0px;
  z-index: 1;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

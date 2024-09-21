import Image from "next/image";
import styled from "styled-components";
import { Swiper } from "swiper/react";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f8f8f8;
  padding: 30px;

  .footer-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    margin-top: 16px;
  }

  .get-start {
    background: linear-gradient(270deg, #9dc80a 0%, #1f9f3b 101.38%);
    border-radius: 10px;
    width: fit-content;
    padding: 16px;
    font-size: 18px;
    color: #ffffff;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  font-weight: 700;
  color: #000000;
  text-transform: uppercase;
  text-align: center;
  font-style: italic;
  margin-bottom: 24px;

  b {
    color: #ffc406;
  }

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Item = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: #ffffff;
  padding: 20px 30px;
  width: 390px;
  max-width: 390px;
  align-items: center;
  position: relative;
  min-height: 470px;
  /* margin: 30px; */
`;

export const EllipseImage = styled(Image)`
  position: absolute;
  top: 0;
  z-index: 1;
`;

export const Label = styled.div`
  font-weight: 500;
  font-size: 22px;
  text-align: center;
  color: #000000;
  font-style: italic;
`;

export const Para = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #363636;
  text-align: center;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  place-items: center;

  @media screen and (max-width: 1250px) {
    grid-template-columns: repeat(2, 1fr);
  }
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

export const MobileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
`;

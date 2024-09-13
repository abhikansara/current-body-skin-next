import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 30px;
  position: relative;
  border-bottom: 1px solid #fae2de;

  @media screen and (max-width: 800px) {
    padding: 40px 20px;
  }
`;

export const PurpleShadeImage = styled(Image)`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const PeachShadeImage = styled(Image)`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 1;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const MobPurpleShadeImage = styled(Image)`
  display: none;
  @media screen and (max-width: 800px) {
    display: block;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
  }
`;

export const MobPeachShadeImage = styled(Image)`
  display: none;

  @media screen and (max-width: 800px) {
    display: block;

    position: absolute;
    width: 100%;

    left: 0;
    bottom: 0;
    z-index: 1;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  z-index: 2;

  @media screen and (max-width: 800px) {
    gap: 10px;
    min-height: 440px;
  }
`;

export const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
  text-align: center;
  color: #000000;

  @media screen and (max-width: 800px) {
    font-size: 20px;
  }
`;

export const Para = styled.div`
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  color: #454545;
  max-width: 65%;

  @media screen and (max-width: 800px) {
    font-size: 12px;
  }
`;

export const PersonImg1 = styled(Image)`
  position: absolute;
  left: 24%;
  top: 8%;
  z-index: 1;

  @media screen and (max-width: 800px) {
    height: 50px !important;
    width: 50px !important;
    left: 0;
    top: 2%;
  }
`;
export const PersonImg2 = styled(Image)`
  position: absolute;
  left: 1%;
  z-index: 1;

  @media screen and (max-width: 800px) {
    height: 38px !important;
    width: 38px !important;
    right: 8%;
    top: 7%;
    left: auto;
  }
`;
export const PersonImg3 = styled(Image)`
  position: absolute;
  bottom: 5%;
  left: 12%;
  z-index: 1;

  @media screen and (max-width: 800px) {
    height: 65px !important;
    width: 65px !important;
    left: 8%;
    top: 15%;
  }
`;
export const PersonImg4 = styled(Image)`
  position: absolute;
  right: 9%;
  top: 22%;
  z-index: 1;

  @media screen and (max-width: 800px) {
    height: 70px !important;
    width: 70px !important;
    bottom: 6%;
    top: auto;
    right: 5%;
  }
`;
export const PersonImg5 = styled(Image)`
  position: absolute;
  right: 15%;
  bottom: 0;
  z-index: 1;

  @media screen and (max-width: 800px) {
    height: 52px !important;
    width: 52px !important;
    right: 8%;
    bottom: 14%;
    left: 3%;
  }
`;
export const PersonImg6 = styled(Image)`
  position: absolute;
  right: 0;
  bottom: 25%;
  z-index: 1;

  @media screen and (max-width: 800px) {
    height: 40px !important;
    width: 40px !important;
    bottom: 6%;
    left: 40%;
  }
`;

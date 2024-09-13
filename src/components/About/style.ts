import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px;
  position: relative;
`;

export const PurpleShadeImage = styled(Image)`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 1;

  @media screen and (max-width: 1023px) {
    height: 350px !important;
    width: 300px !important;
    max-width: 300px !important;
    top: 50%;
  }
`;

export const PeachShadeImage = styled(Image)`
  position: absolute;
  left: 23%;
  bottom: 0;
  z-index: 1;

  @media screen and (max-width: 1023px) {
    height: 350px !important;
    width: 300px !important;
    max-width: 300px !important;
    left: 0;
    top: 0;
  }
`;

export const HalfFlowerImage = styled(Image)`
  position: absolute;
  right: 15%;
  top: 0;
  z-index: 2;

  @media screen and (max-width: 1023px) {
    display: none;
  }
`;

export const DownFlowerImage = styled(Image)`
  position: absolute;
  right: 21%;
  bottom: 0;
  z-index: 2;

  @media screen and (max-width: 1023px) {
    display: none;
  }
`;

export const Flower2 = styled(Image)`
  position: absolute;
  right: 13%;
  top: 20%;
  z-index: 2;

  @media screen and (max-width: 1023px) {
    left: 10%;
    top: 14% !important;
  }
`;
export const Flower3 = styled(Image)`
  position: absolute;
  right: 0;
  top: 38%;
  z-index: 2;

  @media screen and (max-width: 1023px) {
    top: 20%;
  }
`;
export const Flower4 = styled(Image)`
  position: absolute;
  right: 8%;
  top: 75%;
  z-index: 2;

  @media screen and (max-width: 1023px) {
    top: 50% !important;
    right: 27% !important;
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
  z-index: 2;

  @media screen and (max-width: 1023px) {
    font-size: 22px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0;
  gap: 30px;
  z-index: 2;

  @media screen and (max-width: 1023px) {
    flex-direction: column-reverse;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: auto;
  z-index: 2;

  @media screen and (max-width: 1023px) {
    margin-left: 0;
  }
`;

export const Accordion = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  /* width: 580px; */
  max-width: 580px;
  border: 1px solid #f1ebea;
  gap: 10px;
  z-index: 2;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  color: #000000;
  font-size: 18px;
  font-weight: 600;
  z-index: 2;
`;

export const Para = styled.div`
  color: #454545;
  font-size: 14px;
  font-weight: 400;
  width: 87%;
  z-index: 2;
`;

import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  background-color: #fafbff;
  height: 38vw;
  @media screen and (max-width: 1920px) {
    max-height: 50vw;
  }
`;

export const Background = styled.img`
  width: 100%;
  max-height: 38vw;
  position: absolute;
  top: 0;
  @media screen and (max-width: 1920px) {
    max-height: 50vw;
  }
  @media screen and (max-width: 1500px) {
    max-height: 70vw;
    height: 52vw;
  }

  @media screen and (max-width: 1440px) {
    height: 60vw;
  }
`;

export const Lines = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  width: 60%;
  @media screen and (max-width: 1920px) {
    width: 80%;
  }

  @media screen and (max-width: 1440px) {
    width: 85%;

  }
`;

export const Mask = styled.img`
  width: 38.5%;
  position: absolute;
  right: 0;
  top: 0;
  @media screen and (max-width: 1920px) {
    width: 48%;
  }
  @media screen and (max-width: 1440px) {
    width: 50%;
  }
`;

export const Content = styled.div`
  z-index: 1;
  position: relative;
  padding: 40px 0px 40px 140px;
  @media screen and (max-width: 1920px) {
    height: 50vw;
  }
  @media screen and (max-width: 1500px) {
    height: 52vw;
  }
  @media screen and (max-width: 1440px) {
    height: 60vw;
  }
`;

export const LikesContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  width: 57%;
`;

export const Likes = styled.img`
  height: 48px;
`;

export const ImgDesc = styled.div`
  font-weight: 600;
  font-size: 14;
`;
export const Title = styled.div`
  font-weight: 600;
  font-size: 42px;
  width: 55%;
  margin-top: 24px;
  line-height: 1.256;
`;
export const TitleDesc = styled.div`
  font-weight: 500;
  width: 40%;
  font-size: 20px;
  color: #282828;
`;

export const ListItemImage = styled.img`
  height: 35px;
`;

export const ListItem = styled.div`
  color: #282828;
  font-weight: 500;
`;

export const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 36px;
  max-width: 65%;
  > div {
    display: flex;
    gap: 16px;
    align-items: center;
  }
`;

export const Button = styled.div`
  border-radius: 500px;
  max-width: 460px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  text-transform: uppercase;
  color: #fff3f3;
  font-weight: 600;
  font-size: 24px;
  box-shadow: 0px 4px 0px 0px #a82323;
  height: 72px;
  background: #e03c3c;
  margin-top: 32px;
  cursor: pointer;
`;

export const MoneyBack = styled.div`
  font-weight: 600;
  text-transform: uppercase;
  color: #4c4c4c;
  display: flex;
  gap: 16px;
  align-items: center;
  img {
    height: 28px;
  }
  margin-top: 22px;
`;

export const RatingsContainer = styled.div`
  display: flex;
  gap: 18px;
  color: #353536;
  background-color: #fff;
  margin-top: 16px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  width: max-content;
  padding: 8px 12px;
  > div:last-child {
    display: flex;
    gap: 8px;
    align-items: center;
  }
`;

export const ImagesDiv = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-left: -8px;
    height: 38px;
  }
  img:first-child {
    margin-left: 0px;
  }
`;

export const FooterContainer = styled.div`
  position: absolute;
  bottom: -78px;
  display: flex;
  gap: 58px;
  padding-left: 140px;
  font-weight: 500;
  font-size: 15;
  line-height: 1.37;
  text-transform: uppercase;
  max-width: 60%;
  margin-top: 20px;
  img {
    height: 60px;
  }
  > div {
    display: flex;
    gap: 24px;
    align-items: center;
  }
  @media screen and (max-width: 1920px) {
    position: static;
  }
`;

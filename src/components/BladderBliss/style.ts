import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: #5d3188;
  padding: 30px;
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
  margin-bottom: 24px;
  z-index: 2;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  z-index: 2;

  @media screen and (max-width: 1023px) {
    flex-direction: column;
    gap: 24px;
  }

  .competition {
    background: #fff4f8;
    width: fit-content;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  color: #000000;
  border-radius: 16px;
  width: 370px;
  /* height: 350px; */

  div:last-of-type {
    border: none;
  }
`;

export const ListItem = styled.div`
  padding: 24px;
  border-bottom: 1px solid #fee8e4;
  font-size: 16px;
  font-weight: 500;
`;

export const BlissCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #5f1f5a;
  color: #000000;
  border-radius: 16px;
  width: 330px;

  .title {
    font-size: 18px;
    font-weight: 700;
    color: #ffffff;
    display: flex;
    padding: 24px;
    margin-left: 40px;
  }

  .list {
    width: 290px;
    margin-bottom: 24px;
  }
`;

export const BlissImage = styled(Image)`
  position: absolute;
  top: -30px;
  left: 30px;
`;

export const FlowerImage = styled(Image)`
  position: absolute;
  bottom: 0;
  right: 30px;
  z-index: 1;
`;

export const Capsules = styled(Image)`
  position: absolute;
  bottom: 0;
  left: 0px;
  z-index: 1;
  height: 100%;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

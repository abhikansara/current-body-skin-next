import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fcb9c2;
  gap: 30px;
  padding: 30px;
  position: relative;
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
  gap: 20px;
  flex-wrap: wrap;
  padding: 40px 0;
`;

export const Card = styled.div`
  background-color: #ffffff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 200px;
  max-width: 200px;
  height: 235px;
  border-radius: 16px;

  @media screen and (max-width: 768px) {
    width: 350px;
    max-width: 350px;
    height: max-content;
  }

  img {
    @media screen and (max-width: 768px) {
      height: 300px;
      width: 300px;
    }
  }
`;

export const Text = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #303030;
  text-align: center;
  margin: auto;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
  color: #303030;
  text-align: center;
`;

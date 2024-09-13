import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  margin: 40px 0;
`;

export const Content = styled.div`
  width: 100%;
  border-bottom: 1px solid #fae2de;
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const LogoWrapper = styled(Image)`
  position: absolute;
  top: -50px;
`;

export const Labels = styled.div`
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 860px) {
    flex-direction: column;
    padding-top: 50px;
  }
`;

export const RightLabel = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-size: 14px;
  font-weight: 400;
  color: #454545;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 860px) {
    flex-direction: column;
    padding-bottom: 20px;

    border-bottom: 1px solid #f2f2f2;
  }
`;

export const LeftLabel = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-size: 14px;
  font-weight: 400;
  color: #454545;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 860px) {
    padding-top: 20px;
  }
`;

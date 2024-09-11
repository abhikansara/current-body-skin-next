import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderWrap = styled.div`
  background-color: #100f0f;
  padding: 30px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: fit-content;
`;

export const ButtonsGroup = styled.div`
  display: flex;
  justify-content: space-around;
  color: #ffffff;

  button {
    font-size: 24px;
    cursor: pointer;
  }
`;

export const Item = styled.div`
  color: #ffffff;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const DashedBorder = styled.div`
  border: 1px solid #ffffff;
  width: 72px;
  max-width: 72px;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 40px 20px 0 20px;
  /* align-items: center; */
  background: #2d2c2c;
  gap: 20px;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const CenterWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  gap: 20px;
  text-align: center;

  @media screen and (max-width: 1200px) {
    width: 70%;
  }
`;

export const SummaryTitle = styled.div`
  font-weight: 700;
  font-size: 28px;
  text-transform: uppercase;
`;

export const SummaryDescription = styled.div`
  font-weight: 400;
  font-size: 20px;
`;

export const ImageContainer = styled(Image)`
  height: 350px;
  width: 400px;
`;

export const StatueImageWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: end;
  justify-content: end;

  @media screen and (max-width: 1200px) {
    justify-content: center;
  }
`;

export const Statue = styled(Image)`
  height: 500px;
  width: 400px;
  bottom: 0;
  z-index: 2;
`;

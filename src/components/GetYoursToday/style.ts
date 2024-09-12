import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f2fbff;
  gap: 10px;
  margin: 20px 0;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  height: 700px;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  width: 100%;
  gap: 30px;
`;

export const Header = styled.div`
  color: #000000;
  font-size: 28px;
  font-weight: 400;
  text-transform: uppercase;
`;

export const Para = styled.div`
  color: #5e5f5f;
  font-size: 16px;
`;

export const GetTodayBtn = styled.button`
  color: #393939;
  background-color: #ffcc29;
  font-size: 20px;
  padding: 10px 20px;
  width: 50%;
  text-transform: uppercase;

  @media screen and (max-width: 660px) {
    width: 80%;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;

export const Info = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  span {
    font-size: 16px;
    color: #5e5f5f;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  padding: 50px 20px;
`;

export const Title = styled.div`
  font-size: 38px;
  font-weight: 700;
  color: #000000;
  text-align: center;

  @media screen and (max-width: 600px) {
    font-size: 22px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Accordion = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  border-bottom: 1px solid #f2f2f2;
`;

export const AccordionTitle = styled.div`
  display: flex;
  gap: 20px;
`;

export const Text = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #000000;

  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

export const Desc = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #454545;
  padding-top: 20px;

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

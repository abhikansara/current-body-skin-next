import Image from "next/image";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  padding: 16px;
  background-color: #ffffff;
  width: 340px;
  max-width: 340px;
  border-radius: 8px;
`;

export const ImageWrapper = styled(Image)`
  height: 65px;
  max-height: 65px;
  width: 100px;
  max-width: 100px;
`;

export const Label = styled.div`
  font-weight: 400;
  font-size: 18px;
  color: #000000;
  font-style: italic;
  text-align: start;
`;

export const Arrow = styled(Image)`
  margin-left: auto;
`;

import styled from "styled-components";
import { Swiper } from "swiper/react";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
  width: 100%;
  height: fit-content;
  padding: 30px 20px;
  font-size: 28px;
  color: #1e326b;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px 0;
`;

export const SwiperWrapper = styled(Swiper)`
  .swiper-slide {
    display: flex;
    justify-content: center;
    max-width: 100%;
    width: 100%;

    video {
      height: fit-content !important;
      border-radius: 10px !important;
    }
  }

  iframe {
    border-radius: 12px;
  }
`;

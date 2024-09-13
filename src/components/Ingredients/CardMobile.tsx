import React from "react";
import { Arrow, Container, ImageWrapper, Label, Wrapper } from "./cardStyle";
import DownArrow from "@/assets/images/ingredients/down-arrow.svg";

const CardMobile = ({
  img,
  title,
  desc,
  handleActiveItem,
  activeIndex,
}: {
  img: any;
  title: string;
  desc: string;
  handleActiveItem: () => void;
  activeIndex: boolean;
}) => {
  return (
    <Container>
      <Wrapper>
        <ImageWrapper src={img} alt={title} />
        <Label>{title}</Label>
        <Arrow src={DownArrow} alt={title} onClick={handleActiveItem} />
      </Wrapper>
      {activeIndex && (
        <div
          style={{
            fontSize: "14px",
            paddingTop: "8px",
          }}
        >
          {desc}
        </div>
      )}
    </Container>
  );
};

export default CardMobile;

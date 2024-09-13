import React from "react";
import { Arrow, ImageWrapper, Label, Wrapper } from "./cardStyle";
import Image from "next/image";
import DownArrow from "@/assets/images/ingredients/down-arrow.svg";

const CardMobile = ({ img, title }: { img: any; title: string }) => {
  return (
    <Wrapper>
      <ImageWrapper src={img} alt={title} />
      <Label>{title}</Label>
      <Arrow src={DownArrow} alt={title} />
    </Wrapper>
  );
};

export default CardMobile;

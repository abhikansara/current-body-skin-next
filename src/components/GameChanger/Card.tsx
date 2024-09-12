import React from "react";
import { Item, Label, Para } from "./style";
import Image from "next/image";

type CardProps = {
  img: any;
  label: string;
  para: string;
};

const Card = ({ img, label, para }: CardProps) => {
  return (
    <Item>
      <Image src={img} alt={"honey"} />
      <Label>{label}</Label>
      <Para>{para}</Para>
    </Item>
  );
};

export default Card;

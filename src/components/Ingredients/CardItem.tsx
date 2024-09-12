import React from "react";
import { EllipseImage, Item, Label, Para } from "./style";
import Image from "next/image";
import Ellipse from "@/assets/images/ingredients/ellipse.svg";
import Ellipse2 from "@/assets/images/ingredients/ellipse2.svg";

type CardItemProps = {
  img: any;
  label: string;
  para: string;
};

const CardItem = ({ img, label, para }: CardItemProps) => {
  return (
    <Item>
      <EllipseImage src={Ellipse} alt={label} />
      <EllipseImage src={Ellipse2} alt={label} />
      <Image src={img} alt={label} style={{ zIndex: 2 }} />
      <Label>{label}</Label>
      <Para>{para}</Para>
    </Item>
  );
};

export default CardItem;

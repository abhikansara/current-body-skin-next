import React from "react";
import { AfterImage, BACard, BeforeImage, ImageWrapper, Title } from "./style";

type BeforeAfterCardProps = { title: string; beforeImg: any; afterImg: any };

const BeforeAfterCard = ({
  title,
  beforeImg,
  afterImg,
}: BeforeAfterCardProps) => {
  return (
    <BACard>
      <Title>{title}</Title>
      <ImageWrapper>
        <BeforeImage src={beforeImg} alt=" Before" />
        <AfterImage src={afterImg} alt=" After" />
      </ImageWrapper>
      <div className="footer-btn">
        <button className="before-label">Before</button>
        <button className="after-label">After</button>
      </div>
    </BACard>
  );
};

export default BeforeAfterCard;

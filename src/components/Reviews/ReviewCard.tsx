import React from "react";
import { Avatar, Description, ReviewCardItem } from "./style";
import Image from "next/image";
import RatingsImg from "@/assets/images/reviews/ratings.png";
import AvatarImg from "@/assets/images/reviews/avatar.png";
import VerifiedImg from "@/assets/images/reviews/verified.png";

const ReviewCard = ({
  msg,
  name,
  imgSrc,
}: {
  msg: string;
  name: string;
  imgSrc: any;
}) => {
  return (
    <ReviewCardItem>
      <Image src={RatingsImg} alt={"ratings"} />
      <Description>{msg}</Description>
      <Avatar>
        <Image src={imgSrc} alt="avatar" />
        <div className="info">
          <div className="name">{name}</div>
          <Image src={VerifiedImg} alt={"verification"} />
        </div>
      </Avatar>
    </ReviewCardItem>
  );
};

export default ReviewCard;

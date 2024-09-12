import React from "react";
import { Avatar, Description, ReviewCardItem } from "./style";
import Image from "next/image";
import RatingsImg from "@/assets/images/reviews/ratings.png";
import AvatarImg from "@/assets/images/reviews/avatar.png";
import VerifiedImg from "@/assets/images/reviews/verified.png";

const ReviewCard = ({ msg, name }: { msg: string; name: string }) => {
  return (
    <ReviewCardItem>
      <Image src={RatingsImg} alt={"ratings"} />
      <Description>{msg}</Description>
      <Avatar>
        <Image src={AvatarImg} alt="avatar" />
        <div className="info">
          <div className="name">{name}</div>
          <Image src={VerifiedImg} alt={"verification"} />
        </div>
      </Avatar>
    </ReviewCardItem>
  );
};

export default ReviewCard;

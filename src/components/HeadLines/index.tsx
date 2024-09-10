"use client";
import React from "react";
import {
  Container,
  Lines,
  Mask,
  Content,
  Likes,
  ImgDesc,
  LikesContainer,
  Title,
  TitleDesc,
  FeaturesContainer,
  ListItemImage,
  ListItem,
  Button,
  MoneyBack,
  RatingsContainer,
  ImagesDiv,
  FooterContainer,
  MobileContainer,
} from "./style";
// import bg from "@/assets/images/headlines/bg.png";
import lines from "@/assets/images/headlines/lines.png";
import line from "@/assets/images/headlines/line.png";
import mask from "@/assets/images/headlines/mask.png";
import likes from "@/assets/images/headlines/likes.png";
import eylLines from "@/assets/images/headlines/eye-lines.png";
import verified from "@/assets/images/headlines/verified.png";
import faceSide from "@/assets/images/headlines/face-side.png";
import glowingFace from "@/assets/images/headlines/glowing-face.png";
import moneyBack from "@/assets/images/headlines/money-back.png";
import user1 from "@/assets/images/headlines/user-5.png";
import user2 from "@/assets/images/headlines/user-4.png";
import user3 from "@/assets/images/headlines/user-3.png";
import user4 from "@/assets/images/headlines/user-2.png";
import user5 from "@/assets/images/headlines/user-1.png";
import doctor from "@/assets/images/headlines/doctor.png";
import fda from "@/assets/images/headlines/fda.png";
import freeShipping from "@/assets/images/headlines/free-shipping.png";
import ArrowRight from "../Icons/ArrowRight";
import StarIcon from "../Icons/StarIcon";
import useIsMobile from "@/hooks/useIsMobile";

const HeadLines = () => {
  const isMobile = useIsMobile();
  console.log({ isMobile });
  return (
    <Container>
      {isMobile ? (
        <MobileContainer>
          <Content>
            <LikesContainer>
              <Likes src={likes.src} />
              <ImgDesc>
                <b>
                  Celebrities like Kourtney Kardashian, Kaley Cuoco, Kristin
                  Davis, Halle Berry
                </b>{" "}
                love their CurrentBody Skin Mask
              </ImgDesc>
            </LikesContainer>
            <div>
              <Title>
                94% of Users Experience <b>Visible Transformation in 8 Weeks</b>
              </Title>
              <TitleDesc>
                See Real, Age-Defying Results with the CurrentBody Skin LED
                Light Therapy Mask
              </TitleDesc>
            </div>
            <Lines src={line.src} />
            <Mask src={mask.src} />
          </Content>
          <Button>
            Rejuvenate MY Skin Now! <ArrowRight />
          </Button>
          <RatingsContainer>
            <ImagesDiv>
              <ListItemImage src={user1.src} />
              <ListItemImage src={user2.src} />
              <ListItemImage src={user3.src} />
              <ListItemImage src={user4.src} />
              <ListItemImage src={user5.src} />
            </ImagesDiv>
            <div>
              200+ <StarIcon /> 5-Star Reviews!
            </div>
          </RatingsContainer>
          <MoneyBack>
            <ListItemImage src={moneyBack.src} />
            60-Day Money Back Guarantee{" "}
          </MoneyBack>
          <FeaturesContainer>
            <div>
              <ListItemImage src={eylLines.src} />
              <ListItem>
                Say Goodbye To Fines Lines & Wrinkles, Get A Brighter Complexion
              </ListItem>
            </div>
            <div>
              <ListItemImage src={verified.src} />
              <ListItem>Clinically Proven Results In Just 4 Weeks</ListItem>
            </div>
            <div>
              <ListItemImage src={faceSide.src} />
              <ListItem>
                Achieve Glowing, Youthful Skin Within Just 10 Mins/ Day
              </ListItem>
            </div>
            <div>
              <ListItemImage src={glowingFace.src} />
              <ListItem>27% More Powerful Than Other LED Masks </ListItem>
            </div>
          </FeaturesContainer>
        </MobileContainer>
      ) : (
        <>
          <Content>
            <LikesContainer>
              <Likes src={likes.src} />
              <ImgDesc>
                <b>
                  Celebrities like Kourtney Kardashian, Kaley Cuoco, Kristin
                  Davis, Halle Berry
                </b>{" "}
                love their CurrentBody Skin Mask
              </ImgDesc>
            </LikesContainer>
            <div>
              <Title>
                94% of Users Experience <b>Visible Transformation in 8 Weeks</b>
              </Title>
              <TitleDesc>
                See Real, Age-Defying Results with the CurrentBody Skin LED
                Light Therapy Mask
              </TitleDesc>
            </div>
            <FeaturesContainer>
              <div>
                <ListItemImage src={eylLines.src} />
                <ListItem>
                  Say Goodbye To Fines Lines & Wrinkles, Get A Brighter
                  Complexion
                </ListItem>
              </div>
              <div>
                <ListItemImage src={verified.src} />
                <ListItem>Clinically Proven Results In Just 4 Weeks</ListItem>
              </div>
              <div>
                <ListItemImage src={faceSide.src} />
                <ListItem>
                  Achieve Glowing, Youthful Skin Within Just 10 Mins/ Day
                </ListItem>
              </div>
              <div>
                <ListItemImage src={glowingFace.src} />
                <ListItem>27% More Powerful Than Other LED Masks </ListItem>
              </div>
            </FeaturesContainer>
            <Button>
              Rejuvenate MY Skin Now! <ArrowRight />
            </Button>
            <MoneyBack>
              <ListItemImage src={moneyBack.src} />
              60-Day Money Back Guarantee{" "}
            </MoneyBack>
            <RatingsContainer>
              <ImagesDiv>
                <ListItemImage src={user1.src} />
                <ListItemImage src={user2.src} />
                <ListItemImage src={user3.src} />
                <ListItemImage src={user4.src} />
                <ListItemImage src={user5.src} />
              </ImagesDiv>
              <div>
                200+ <StarIcon /> 5-Star Reviews!
              </div>
            </RatingsContainer>
          </Content>
          <Lines src={lines.src} />
          <Mask src={mask.src} />
        </>
      )}

      <FooterContainer>
        <div>
          <ListItemImage src={doctor.src} />
          <div>Free Expert Consultations</div>
        </div>
        <div>
          <ListItemImage src={fda.src} />
          <div>FDA Cleared</div>
        </div>
        <div>
          <ListItemImage src={freeShipping.src} />
          <div>Free Shipping</div>
        </div>
      </FooterContainer>
    </Container>
  );
};

export default HeadLines;

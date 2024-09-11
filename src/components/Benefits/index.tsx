"use client";

import React, { useState } from "react";
import {
  ButtonsGroup,
  CenterWrapper,
  Container,
  Content,
  DashedBorder,
  Header,
  HeaderWrap,
  ImageContainer,
  Item,
  Statue,
  StatueImageWrapper,
  Summary,
  SummaryDescription,
  SummaryTitle,
} from "./style";
import VitalityIcon from "@/assets/images/benefits/vitality.svg";
import EnergyIcon from "@/assets/images/benefits/energy.svg";
import ImmunityIcon from "@/assets/images/benefits/immunity.svg";
import RecoveryIcon from "@/assets/images/benefits/good-heart.svg";
import AntiAgingIcon from "@/assets/images/benefits/anti-age.svg";
import DetoxIcon from "@/assets/images/benefits/detoxification.svg";
import ProtienImage from "@/assets/images/benefits/protien.png";
import StatueImage from "@/assets/images/benefits/statue.png";
import LeftArrowIcon from "@/assets/images/benefits/left-arrow.svg";
import RightArrowIcon from "@/assets/images/benefits/right-arrow.svg";
import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";

const Benefits = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const isMobile = useIsMobile();
  const numberOfItems = 2;

  const items = [
    {
      label: "Vitality",
      icon: VitalityIcon,
    },
    {
      label: "Energy",
      icon: EnergyIcon,
    },
    {
      label: "Immunity",
      icon: ImmunityIcon,
    },
    {
      label: "Recovery",
      icon: RecoveryIcon,
    },
    {
      label: "Anti-Aging",
      icon: AntiAgingIcon,
    },
    {
      label: "Full Body Detox",
      icon: DetoxIcon,
    },
  ];

  const handleNext = () => {
    if (selectedItem <= numberOfItems) {
      setSelectedItem(selectedItem + numberOfItems);
    }
  };

  const handlePrev = () => {
    if (selectedItem >= numberOfItems) {
      setSelectedItem(selectedItem - numberOfItems);
    }
  };

  console.log({ isMobile });

  return (
    <Container>
      <HeaderWrap>
        {!isMobile ? (
          <Header>
            {items?.map((i, index) => {
              return (
                <>
                  <Item key={index}>
                    <Image
                      unoptimized
                      src={i?.icon}
                      alt={"logo" + index}
                      className=""
                    />
                    <span className="">{i?.label}</span>
                  </Item>
                  {items.length - 1 !== index && <DashedBorder />}
                </>
              );
            })}
          </Header>
        ) : (
          <>
            <Header>
              {items
                ?.filter(
                  (i, ind) =>
                    ind >= selectedItem && ind <= selectedItem + numberOfItems
                )
                ?.map((i, index) => {
                  return (
                    <>
                      <Item key={index}>
                        <Image
                          unoptimized
                          src={i?.icon}
                          alt={"logo" + index}
                          className=""
                        />
                        <span className="">{i?.label}</span>
                      </Item>
                      {items?.filter(
                        (i, ind) =>
                          ind >= selectedItem &&
                          ind <= selectedItem + numberOfItems
                      ).length -
                        1 !==
                        index && <DashedBorder />}
                    </>
                  );
                })}
            </Header>
            <ButtonsGroup>
              <Image
                onClick={handlePrev}
                unoptimized
                src={LeftArrowIcon}
                alt={"left-logo"}
              />
              <Image
                onClick={handleNext}
                unoptimized
                src={RightArrowIcon}
                alt={"right-logo"}
              />
            </ButtonsGroup>
          </>
        )}
      </HeaderWrap>
      <Content>
        <CenterWrapper>
          <ImageContainer unoptimized src={ProtienImage} alt="protien logo" />
        </CenterWrapper>
        <CenterWrapper>
          <Summary>
            <SummaryTitle>
              The food <br />
              of the Gods
            </SummaryTitle>
            <SummaryDescription>
              Known as the food of the gods in Ancient Greece and Egypt, Spartan
              Bee Bread is a holistic, 100% natural, biologically active, and
              highly bioavailable superfood that contains about 240 natural
              substances.
            </SummaryDescription>
            <SummaryDescription>
              It is the only naturally occurring supplement in the world that
              contains every single essential nutrient required for a
              well-functioning human body.
            </SummaryDescription>
          </Summary>
        </CenterWrapper>
        <StatueImageWrapper>
          <Statue
            unoptimized
            src={StatueImage}
            alt="protien logo"
            className=""
            height={350}
            width={400}
          />
        </StatueImageWrapper>
      </Content>
    </Container>
  );
};

export default Benefits;

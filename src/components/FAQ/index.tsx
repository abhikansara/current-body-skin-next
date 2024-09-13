"use client";

import React from "react";
import {
  Accordion,
  AccordionTitle,
  Container,
  Content,
  Desc,
  Text,
  Title,
} from "./style";
import MinusIcon from "@/assets/images/faq/minus.svg";
import PlusIcon from "@/assets/images/faq/plus.svg";
import FooterLogo from "@/assets/images/faq/footerlogo.png";
import Image from "next/image";

const FAQ = () => {
  return (
    <Container>
      <Title>Frequently Asked Questions</Title>
      <Content>
        <Accordion>
          <AccordionTitle>
            <Image src={MinusIcon} alt="minus" />
            <Text>Q: Melatonin - Is it my bedtime buddy?</Text>
          </AccordionTitle>
          <Desc>
            Most people only need one, but if you need, due to extra anxiety or
            overload, take two.
          </Desc>
        </Accordion>

        <Accordion>
          <AccordionTitle>
            <Image src={PlusIcon} alt="plus" />
            <Text>
              Q: I like things natural and safe. Is this the right blend for me?
            </Text>
          </AccordionTitle>
        </Accordion>

        <Accordion>
          <AccordionTitle>
            <Image src={PlusIcon} alt="plus" />
            <Text>Q: Will I wake up ready to conquer the world?</Text>
          </AccordionTitle>
        </Accordion>

        <Accordion>
          <AccordionTitle>
            <Image src={PlusIcon} alt="plus" />
            <Text>Q: What if the product and I don't click?</Text>
          </AccordionTitle>
        </Accordion>

        <Accordion>
          <AccordionTitle>
            <Image src={PlusIcon} alt="plus" />
            <Text>
              Q: Special diets and me, can we all get along with this product?
            </Text>
          </AccordionTitle>
        </Accordion>
      </Content>
    </Container>
  );
};

export default FAQ;

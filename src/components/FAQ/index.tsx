"use client";

import React, { useState } from "react";
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
import Image from "next/image";

const items = [
  {
    title: "Q: Melatonin - Is it my bedtime buddy?",
    desc: "Most people only need one, but if you need, due to extra anxiety or overload, take two.",
  },
  {
    title: "Q: I like things natural and safe. Is this the right blend for me?",
    desc: "Most people only need one, but if you need, due to extra anxiety or overload, take two.",
  },
  {
    title: "Q: Will I wake up ready to conquer the world?",
    desc: "Most people only need one, but if you need, due to extra anxiety or overload, take two.",
  },
  {
    title: "Q: What if the product and I don't click?",
    desc: "Most people only need one, but if you need, due to extra anxiety or overload, take two.",
  },
  {
    title: "Q: Special diets and me, can we all get along with this product?",
    desc: "Most people only need one, but if you need, due to extra anxiety or overload, take two.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(
    items?.map((i) => {
      return {
        isActive: false,
      };
    })
  );

  const handleActiveItem = (index: number) => {
    setActiveIndex((prev) => {
      return prev.map((i, iIndex) => {
        if (iIndex === index) {
          return {
            ...i,
            isActive: !i.isActive,
          };
        }
        return i;
      });
    });
  };

  return (
    <Container>
      <Title>Frequently Asked Questions</Title>
      <Content>
        {items.map((item, index) => (
          <Accordion key={index}>
            <AccordionTitle>
              <Image
                src={activeIndex[index]?.isActive ? MinusIcon : PlusIcon}
                alt="plus"
                onClick={() => handleActiveItem(index)}
              />
              <Text>{item.title}</Text>
            </AccordionTitle>
            {activeIndex[index]?.isActive && <Desc>{item.desc}</Desc>}
          </Accordion>
        ))}
      </Content>
    </Container>
  );
};

export default FAQ;

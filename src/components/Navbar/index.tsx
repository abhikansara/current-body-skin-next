"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/images/loveherbz-logo.jpeg";
import { Button, Container, Link, Links } from "./style";
import useIsMobile from "@/hooks/useIsMobile";
import MenuIcon from "../Icons/MenuIcon";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Container isMenuOpen={isMenuOpen}>
      <Image
        unoptimized
        src={logo}
        alt="logo"
        height={isMobile ? 24 : 40}
        className=""
      />
      {isMobile && <MenuIcon onClick={() => setIsMenuOpen((prev) => !prev)} />}
      {((isMenuOpen && isMobile) || !isMobile) && (
        <Links>
          <Link>Benefits</Link>
          <Link>Why Us</Link>
          <Link>How to use</Link>
          <Link>Results</Link>
          <Link>Compare</Link>
          <Button>Buy now</Button>
        </Links>
      )}
    </Container>
  );
};

export default Navbar;

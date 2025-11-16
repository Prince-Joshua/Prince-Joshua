import { Flex, Container } from "@chakra-ui/react";
import React, { useState } from "react";
import Logo from "./Logo";

import DoubleSlider from "./Slider";

import NavIcons from "./NavIcon";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container pos={"fixed"} top={0} left={0} right={0} zIndex={1000}>
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        h={50}
        mb={15}
        px={4}
        backdropFilter={"blur(14px)"}
      >
        <Logo />

        <NavIcons open={open} setOpen={setOpen} />
      </Flex>

      <DoubleSlider open={open} setOpen={setOpen} />
    </Container>
  );
};

export default Header;

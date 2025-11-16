import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"}>
      <Flex alignItems={"center"} justifyContent={"center"}>
        <FaChevronLeft />
        <Text fontFamily={"cursive"}>P.J/</Text>
        <FaChevronRight />
      </Flex>
    </Link>
  );
};

export default Logo;

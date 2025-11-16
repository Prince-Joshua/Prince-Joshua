import { Box, Heading } from "@chakra-ui/react";
import React from "react";

export const HeadingText = ({ text }) => (
  <Box
    size={"lg"}
    alignSelf={"center"}
    shadow={"xl"}
    maxW={"fit-content"}
    borderRadius={"2xl"}
    mb={5}
  >
    <Heading
      borderColor={"inherit"}
      borderStyle={"double"}
      borderWidth={2}
      borderRadius={"2xl"}
      pt={1}
      pb={1}
      pl={5}
      pr={5}
    >
      {text}
    </Heading>
  </Box>
);

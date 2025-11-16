import {
  Box,
  Flex,
  Heading,
  Image,
  Separator,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

export const ProcessCard = ({ title, description, number, image }) => {
  return (
    <Stack>
      <Flex
        w={"full"}
        flexDir={{
          base: "column",
          md: "row",
        }}
        p={2}
        gap={2}
      >
        <Box w={20}>
          <Text fontWeight={"bold"} fontSize={"2xl"}>
            {String(number + 1).padStart(2, "0")}.
          </Text>
        </Box>

        <Stack flex={1} gap={3}>
          <Heading fontWeight={"bolder"} fontSize={"xl"}>
            {title}
          </Heading>
          <Text fontSize={"md"} mb={1} color={"fg.mute"}>
            {description}
          </Text>
        </Stack>
        <Flex w={{ base: "auto", md: 200 }} justify={"center"} align={"center"}>
          <Image
            src={image}
            h={"150px"}
            w={"auto"}
            objectFit={"contain"}
            objectPosition={"center"}
          />
        </Flex>
      </Flex>
      <Separator />
    </Stack>
  );
};

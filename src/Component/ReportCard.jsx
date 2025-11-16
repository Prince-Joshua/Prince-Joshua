import {
  Box,
  Container,
  Flex,
  Image,
  List,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

import React, { useRef } from "react";
import { LuCircleCheck, LuCircleDotDashed } from "react-icons/lu";
import UserCard from "./ProjectReport/UserCard";
import { motion, useScroll, useTransform } from "framer-motion";

const ReportCard = ({ type, data }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const section = data.projectReport[type];

  const renderListItems = (items) =>
    items.map((item, index) => (
      <List.Root
        key={index}
        variant={"plain"}
        align={"start"}
        gap={2}
        mb={2}
        color={"fg.mute"}
      >
        <List.Item>
          <List.Indicator asChild color="green.500" mr={2}>
            {type === "projectGoal" ? (
              <LuCircleCheck size={19} />
            ) : (
              <LuCircleDotDashed size={19} />
            )}
          </List.Indicator>
          {item}
        </List.Item>
      </List.Root>
    ));

  const getTitle = () => {
    switch (type) {
      case "problemSession":
        return "Problems Identified";
      case "userPersonas":
        return "User Persona";
      case "projectGoal":
        return "Project Goals";
      default:
        return "";
    }
  };

  const MotionStack = motion.create(Stack);
  const stackRef = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: stackRef,
  //   offset: ["start end", "end start"],
  // });
  // const clipPath = useTransform(
  //   scrollYProgress,
  //   [0, 0.92, 1],
  //   [
  //     "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%) ",
  //     "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%) ",
  //     "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)",
  //   ]
  // );
  // const scale = useTransform(scrollYProgress, [0, 0.92, 1], [1, 1, 0.97]);
  // const opacity = useTransform(scrollYProgress, [0, 0.92, 1], [1, 1, 0.75]);

  return (
    <Container maxW={"5xl"}>
      <MotionStack
        mt={10}
        initial={{
          opacity: 0,
        }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, ease: "easeOut" }}
      >
        <Flex
          gap={4}
          justifyContent="space-between"
          boxShadow="md"
          borderRadius="xl"
          p={4}
          mb={4}
          direction={{ base: "column", md: "row" }}
          minWidth={{ base: "auto", lg: "4xl" }}
        >
          {/* Left image */}
          <Box
            flex={1}
            h={300}
            w={"auto"}
            display={isMobile ? "none" : "block"}
          >
            {
              <Image
                src={`/images/${section.image}`}
                w="full"
                h="full"
                objectFit="contain"
              />
            }
          </Box>

          {/* Right content */}
          <Box flex={2} maxWidth={"xl"}>
            <Text fontSize="lg" fontWeight="bold" mb={2} textAlign={"center"}>
              {getTitle()}
            </Text>

            <Box>
              {type === "problemSession" && renderListItems(section.statement)}

              {type === "userPersonas" &&
                section.map((persona, index) => (
                  <UserCard key={index} section={persona} />
                ))}

              {type === "projectGoal" && renderListItems(section.statement)}
            </Box>
          </Box>
        </Flex>
      </MotionStack>
    </Container>
  );
};

export default ReportCard;

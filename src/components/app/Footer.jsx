import { HeadingText } from "@/components/app/HeadingText";
import {
  Box,
  Container,
  HStack,
  Icon,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import React from "react";

import { BsInstagram } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { SiX } from "react-icons/si";

const Footer = () => {
  const socialLinks = [
    { icon: BsInstagram, url: "www.instagram.com" },
    { icon: FaLinkedin, url: "www.instagram.com" },
    { icon: SiX, url: "www.instagram.com" },
    { icon: FaGithub, url: "www.instagram.com" },
  ];
  const MotionStack = motion.create(Stack);
  const MotionHStack = motion.create(HStack);
  const MotionBox = motion.create(Box);

  const LinkContainerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: -30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const fromLeft = {
    hidden: { opacity: 0, x: -40 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <Container mt={10}>
      <HeadingText text={"Get In Touch! "} />
      <MotionStack
        mb={5}
        Stack
        gap={4}
        variants={LinkContainerVariants}
        initial="hidden"
        whileInView={"show"}
        viewport={{
          amount: 0.2,
        }}
      >
        <HStack gap={4}>
          {socialLinks.map(({ icon, url }, index) => {
            return (
              <MotionBox key={index} variants={childVariants}>
                <Link href={url} target="_blank" rel="noopener noreferrer">
                  <Icon
                    as={icon}
                    cursor={"pointer"}
                    boxSize={5}
                    _hover={{ color: "secondary.default" }}
                    transition={"all 0.35s ease-in"}
                  />
                </Link>
              </MotionBox>
            );
          })}
        </HStack>

        <Stack gap={2}>
          <MotionHStack
            variants={fromLeft}
            cursor={"pointer"}
            w={"fit-content"}
            color={"fg.mute"}
          >
            <Icon as={IoCall} size={20} color="primary.default" />
            <Link color="fg.mute" href="tel: +2348100495859">
              +2348100495859
            </Link>
          </MotionHStack>

          <MotionHStack
            variants={fromLeft}
            cursor={"pointer"}
            w={"fit-content"}
          >
            <Icon as={MdEmail} color={"primary.default"} size={20} />
            <Link
              variant={"plain"}
              color="fg.mute"
              href="mailto:Joshuaprince891@gmail.com"
              isExternal
            >
              joshuaprince891@gmail.com
            </Link>
          </MotionHStack>
        </Stack>
      </MotionStack>

      <Text textAlign={"center"} mb={4}>
        &copy; 2025 Prince Joshua
      </Text>
    </Container>
  );
};

export default Footer;

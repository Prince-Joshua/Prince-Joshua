import { HeadingText } from "@/components/app/HeadingText";
import { ProcessCard } from "@/components/app/ProcessCard";

import { webDevProcesses } from "@/constant/devProcesses";
import { intro } from "@/constant/intro";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Highlight,
  Image,
  Separator,
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const MotionStack = motion.create(Stack);
  const MotionBox = motion.create(Box);
  const Motionflex = motion.create(Flex);

  const LinkContainerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.17,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: -30, x: 30 },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const ContainerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: -60 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const fadeInWithDelay = {
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
    <Container mt={20}>
      <MotionStack
        variants={ContainerVariants}
        initial="hidden"
        whileInView={"show"}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        mb={5}
      >
        <MotionBox
          variants={fadeIn}
          display={"flex"}
          maxW={{ base: "xs", md: "sm" }}
          justifyContent={"center"}
          mx={"auto"}
          mb={5}
          pos={"relative"}
          overflow={"hidden"}
        >
          <Image src="Snapchat-4649321~3_1.jpg" />
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              mixBlendMode: "soft-light",
              background:
                "radial-gradient(circle at center, rgba(0,200,180,0.6) 0%, transparent 70%)",
            }}
            animate={{
              x: ["-40%", "40%", "-40%"],
              y: ["-40%", "40%", "-40%"],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "linear",
            }}
          ></motion.div>
        </MotionBox>

        <Stack mx={"auto"} maxW={"4xl"}>
          <Text
            fontSize={"sm"}
            fontWeight={600}
            fontFamily={"heading"}
            color={"primary.default"}
            mb={5}
          >
            INTRO
          </Text>
          <Heading mb={5}>
            I craft responsive, accessible web applications with a focus on
            user-centric design and seamless experience
          </Heading>

          <MotionBox
            variants={ContainerVariants}
            initial="hidden"
            whileInView={"show"}
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >
            {intro.map((item, index) => (
              <MotionBox mb={5} key={index} variants={fadeInWithDelay}>
                <Text fontFamily={"body"} color={"fg.mute"}>
                  {item.text}
                  {/* <Highlight
                    query={[
                      "Frontend Developer",
                      "React",
                      "JavaScript",
                      "Tailwind",
                      "Chakra UI",
                      "accessibility",
                      "performance",
                      "scalable",
                      "digital solutions",
                    ]}
                    styles={{
                      fontWeight: "medium",
                      color: "primary.default",
                    }}
                  ></Highlight> */}
                </Text>
              </MotionBox>
            ))}
          </MotionBox>

          <Flex alignItems={"center"} justifyContent={"center"} mt={5}>
            <Link to={"/projects"}>
              <Button fontWeight={"bold"} colorPalette={"teal"}>
                Explore My Projects
              </Button>
            </Link>
          </Flex>
        </Stack>
      </MotionStack>
      <Separator mb={5} />
      <Box w={"full"}>
        <HeadingText text={"My Web Dev Processes"} />
        <MotionStack
          gap={4}
          variants={LinkContainerVariants}
          initial="hidden"
          whileInView={"show"}
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          {webDevProcesses.map((process, index) => {
            return (
              <MotionBox key={index} variants={childVariants}>
                <ProcessCard {...process} number={index} />
              </MotionBox>
            );
          })}
        </MotionStack>
      </Box>
    </Container>
  );
};

export default AboutPage;

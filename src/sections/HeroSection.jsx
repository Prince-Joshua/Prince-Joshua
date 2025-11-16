import { Box, VStack, Text, Heading, Button, HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";

const MotionHeading = motion.create(Heading);
const MotionText = motion.create(Text);
const MotionButton = motion.create(Button);

const HeroSession = () => {
  return (
    <Box
      w="full"
      h="100vh"
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      px={4}
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        bg: "rgba(15,17,23,0.85)", // dark overlay
        zIndex: 0,
      }}
    >
      <VStack gap={4} position="relative" zIndex={1}>
        {/* Name */}
        <MotionHeading
          as="h1"
          fontSize={{ base: "3xl", md: "5xl" }}
          fontWeight="bold"
          fontFamily="body"
          color="fg.default"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          I'm Prince Joshua
        </MotionHeading>
        {/* Role */}
        <MotionText
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="medium"
          fontFamily="Epilogue, sans-serif"
          color="primary.default"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          A Frontend Web Developer
        </MotionText>
        {/* Tagline */}
        <MotionText
          fontSize={{ base: "md", md: "lg" }}
          lineHeight="1.8"
          maxW="3xl"
          fontFamily="Epilogue, sans-serif"
          color="fg.mute"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          I build high-quality, modern, and interactive user interfaces that are
          accessible, responsive, and performant.
        </MotionText>
        <HStack gap={4} mt={6}>
          <Link to={"/projects"}>
            <MotionButton
              colorPalette="teal"
              variant="solid"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </MotionButton>
          </Link>

          <Link to={"/contact"}>
            <MotionButton
              colorPalette="teal"
              variant="outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </MotionButton>
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
};

export default HeroSession;

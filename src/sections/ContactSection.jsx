import { Box, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

import ContactForm from "../components/app/ContactForm";

const MotionBox = motion.create(Box);

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ContactSection = () => {
  return (
    <Box
      w="full"
      py={{ base: 10, md: 18 }}
      px={{ base: 0, md: 16 }}
      bg="bg.default"
      color="fg.default"
    >
      <MotionBox
        textAlign="center"
        mb={6}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
      >
        <Heading
          fontSize={{ base: "3xl", md: "4xl" }}
          fontFamily="Poppins, sans-serif"
        >
          Get In Touch
        </Heading>
        <Text mt={3} color="fg.mute" fontSize="lg">
          Let’s build something amazing together. Drop a message or connect via
          socials.
        </Text>
      </MotionBox>
      <ContactForm />
    </Box>
  );
};

export default ContactSection;

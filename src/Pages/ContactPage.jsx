import ContactForm from "@/components/app/ContactForm";

import { Center, Stack, Text } from "@chakra-ui/react";
import React from "react";

const ContactPage = () => {
  return (
    <Center>
      <Stack align={"center"} mt={50} gap={5}>
        <Text
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight={700}
          fontFamily={"heading"}
          bgGradient={"to-r"}
          gradientFrom={"primary.default"}
          gradientTo={"secondary.default"}
          bgClip={"text"}
        >
          Let's Connect
        </Text>

        <Text
          fontSize={{ base: "md", md: "lg" }}
          color={"fg.mute"}
          fontFamily={"body"}
          maxW={"lg"}
        >
          Thanks for stopping by! Whether you'd like to collaborate, discuss a
          project or just say hello - I'd love to hear from you.
        </Text>

        <Text color={"fg.mute"}>Drop a message or connect via socials</Text>

        <ContactForm />
      </Stack>
    </Center>
  );
};

export default ContactPage;

import { projects } from "@/constant/projects";
import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const ProjectCard = ({
  title,
  image,
  description,
  techStack,
  id,
  number,
  showDes = true,
}) => {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  // Card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const navigate = useNavigate();

  const project = projects;

  // Overlay animation
  const overlayVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  const MotionBox = motion.create(Box);
  const MotionHStack = motion.create(HStack);
  const MotionStack = motion.create(Stack);

  const MotionHeading = motion.create(Heading);
  const MotionText = motion.create(Text);

  return (
    <MotionStack>
      <MotionStack
        as={RouterLink}
        to={`/project/${title}/${id}`}
        position="relative"
        borderRadius="2xl"
        overflow="hidden"
        cursor="pointer"
        whileHover={{ scale: 1.03 }}
        variants={cardVariants}
        transition={{ duration: 0.5 }}
        mx={{ base: "20px", md: "auto" }}
        gap={0}
        maxW={"sm"}
      >
        {/* Project Image */}
        {showDes && (
          <MotionBox mt={2} bg={"bg.surface"}>
            <Heading fontSize="xl" mb={2}>
              {title}
            </Heading>
            <Text color="fg.mute" fontSize="sm" textAlign="center" mb={3}>
              {description}
            </Text>
          </MotionBox>
        )}

        <Image src={image} alt={title} w="full" h="auto" objectFit="cover" />

        {/* Hover overlay */}
        <MotionBox
          position="absolute"
          top={0}
          left={0}
          w="full"
          h="full"
          // bg="rgba(15,17,23,0.85)"
          // bg="rgba(15,17,23,0.85)"
          bg="rgba(5,6,10,0.9)"
          // bg="rgba(18, 20, 25, 0.88)"
          opacity={0}
          initial="hidden"
          whileHover="visible"
          variants={overlayVariants}
          transition={{ duration: 0.3 }}
          display={{ base: "none", md: "flex" }}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={6}
        >
          <Heading fontSize="xl" mb={2}>
            {title}
          </Heading>
          <Text color="fg.mute" fontSize="sm" textAlign="center" mb={3}>
            {description}
          </Text>

          {/* Animated tech icons */}
          <MotionHStack gap={5} mb={3} wrap="wrap" justify="center">
            {techStack &&
              Object.values(techStack)
                .flat()
                .map((tech) => (
                  <MotionBox
                    key={tech.name}
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Box display="flex" alignItems="center" gap={1}>
                      <Icon as={tech.icon} color={tech.color} boxSize={5} />
                      <Text fontSize="xs">{tech.name}</Text>
                    </Box>
                  </MotionBox>
                ))}
          </MotionHStack>

          <Text
            onClick={(e) => {
              e.preventDefault();
              navigate(`/project/${title}/${id}`);
            }}
            color="primary.default"
            fontWeight="bold"
            _hover={{ textDecoration: "underline" }}
          >
            View Project
          </Text>
        </MotionBox>
      </MotionStack>
    </MotionStack>
  );
};

export default ProjectCard;

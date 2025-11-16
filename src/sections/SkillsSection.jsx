import { Tooltip } from "@/components/ui/tooltip";
import { Box, Heading, SimpleGrid, VStack, Text, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { DiMongodb } from "react-icons/di";
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
} from "react-icons/fa";
import { SiChakraui, SiTailwindcss } from "react-icons/si";

const MotionVStack = motion.create(VStack);
const MotionBox = motion.create(Box);

// Parent animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // stagger each skill
    },
  },
};

// Child animation variants
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const skills = [
  {
    name: "React",
    icon: FaReact,
    color: "#61DAFB",
    tooltip: "2+ years experience",
  },
  {
    name: "JavaScript",
    icon: FaJsSquare,
    color: "#F7DF1E",
    tooltip: "3+ years experience",
  },

  {
    name: "Chakra UI",
    icon: SiChakraui,
    color: "#14B8A6",
    tooltip: "2+ years experience",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#38BDF8",
    tooltip: "2+ years experience",
  },
  {
    name: "NodeJs",
    icon: FaNodeJs,
    color: "#3C873A",
    tooltip: "1+ years experience",
  },
  {
    name: "Express",
    icon: SiTailwindcss,
    color: "#000000",
    tooltip: "1+ years experience",
  },
  {
    name: "MongoDB",
    icon: DiMongodb,
    color: "#4DB33D",
    tooltip: "1+ years experience",
  },
];

const SkillsSection = () => {
  return (
    <Box
      w="full"
      py={{ base: 16, md: 24 }}
      px={{ base: 4, md: 16 }}
      bg="bg.default"
      color="fg.default"
      textAlign="center"
    >
      {/* Section Heading */}
      <Heading mb={6} fontSize={{ base: "3xl", md: "4xl" }}>
        Skills & Technologies
      </Heading>
      <Text mb={12} fontSize={{ base: "md", md: "lg" }} color="fg.mute">
        Technologies I work with daily to build modern, responsive, and
        accessible web applications.
      </Text>

      {/* Skills Grid with parent stagger animation */}
      <MotionBox
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <SimpleGrid
          templateColumns={"repeat(auto-fit, minmax(100px, 1fr))"}
          gap={5}
        >
          {skills.map((skill) => (
            <Tooltip
              content={skill.tooltip}
              key={skill.name}
              label={skill.tooltip}
              hasArrow
              bg="fg.default"
              color="bg.default"
              openDelay={300} // delay tooltip appearance
              closeDelay={100} // smooth closing
              motionPreset="scale"
            >
              <MotionVStack
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                bg="bg.surface"
                borderRadius="2xl"
                p={6}
                gap={3}
                variants={itemVariants}
                border={"1px solid"}
                boxShadow={"0 0 10px rgba(20, 184, 166, 0.2)"}
                borderColor={"border.default"}
                _hover={{
                  transform: "scale(1.05)",
                  boxShadow: "0 0 10px rgba(20, 184, 166, 0.5)",
                }}
              >
                <Icon as={skill.icon} boxSize={10} color={skill.color} />
                <Text fontWeight="semibold">{skill.name}</Text>
              </MotionVStack>
            </Tooltip>
          ))}
        </SimpleGrid>
      </MotionBox>
    </Box>
  );
};

export default SkillsSection;

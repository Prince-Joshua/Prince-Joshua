import { Box, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaReact, FaJsSquare } from "react-icons/fa";
import { SiChakraui, SiTailwindcss, SiFirebase } from "react-icons/si";
import Pcard2 from "../components/app/ProjectCard";

const MotionBox = motion.create(Box);
const MotionStack = motion.create(Stack);

// Project data with icons
const projects = [
  {
    title: "SassyBlend",
    description:
      "Fast food ordering app with real-time menu, cart, and favorites.",
    image: "/images/bg.jpg",
    tech: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Chakra UI", icon: SiChakraui, color: "#14B8A6" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "JavaScript", icon: FaJsSquare, color: "#F7DF1E" },
    ],
    link: "#",
  },
  {
    title: "Griot",
    description:
      "Storytelling app for African stories with user profiles and content sharing.",
    image: "/images/bg.jpg",
    tech: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Chakra UI", icon: SiChakraui, color: "#14B8A6" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ],
    link: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio website showcasing projects and skills.",
    image: "/images/bg.jpg",
    tech: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Chakra UI", icon: SiChakraui, color: "#14B8A6" },
      { name: "Framer Motion", icon: SiTailwindcss, color: "#38BDF8" },
    ],
    link: "#",
  },
];

// Parent container animation for stagger
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

// Card animation
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Overlay animation
const overlayVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ProjectsSection = () => {
  return (
    <Box
      w="full"
      pb={{ base: 16, md: 24 }}
      px={{ base: 4, md: 16 }}
      bg="bg.default"
      color="fg.default"
      textAlign="center"
    >
      <Heading mb={12} fontSize={{ base: "3xl", md: "4xl" }}>
        Projects
      </Heading>

      <MotionBox
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={10}>
          {projects.slice(0, 3).map((project) => (
            <MotionStack key={project.title}>
              <Pcard2 {...project} showDes={true} key={project.title} />
            </MotionStack>
          ))}
        </SimpleGrid>
      </MotionBox>
    </Box>
  );
};

export default ProjectsSection;

// import { HeadingText } from "@/Component/HeadingText";
// import Pcard2 from "@/Component/Pcard2";

// import { projects } from "@/constant/projects";

// import {
//   Box,
//   Container,
//   Flex,
//   Heading,
//   HStack,
//   Stack,
//   Text,
// } from "@chakra-ui/react";
// import { motion, useAnimation, useInView } from "framer-motion";
// import { useEffect, useRef } from "react";

// const ProjectPage = () => {
//   const ref = useRef(null);
//   const controls = useAnimation();
//   const inView = useInView(ref, { once: true, margin: "-50px" });
//   const MotionContainer = motion.create(Container);

//   const MotionHeading = motion.create(Heading);
//   const MotionText = motion.create(Text);

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     }
//   }, [inView, controls]);

//   projects.map((project) => {
//     const { techStack } = project;
//     console.log(techStack);
//   });

//   return (
//     <MotionContainer
//       ref={ref}
//       variants={{
//         hidden: { opacity: 0, y: 50 },
//         visible: { opacity: 1, y: 0 },
//       }}
//       initial="hidden"
//       animate={controls}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       mt={16}
//       w="full"
//       py={{ base: 10, md: 18 }}
//       px={{ base: 0, md: 16 }}
//       bg="bg.default"
//       color="fg.default"
//     >
//       <Flex
//         alignItems={"center"}
//         justifyContent={"center"}
//         flexDir={"column"}
//         mb={5}
//       >
//         <HeadingText text={"My Projects"} />
//       </Flex>

//       <Stack
//         // variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//       >
//         {projects.map((project, index) => {
//           const number = index;
//           const { techStack } = project;
//           const frontend = techStack.map((tech) => {
//             const { frontend } = tech;
//             console.log(frontend);

//             return frontend;
//           });

//           return (
//             <Stack key={index}>
//               <HStack align={"start"} mb={{ base: 4, md: 10 }}>
//                 <Box w={{ base: 10, md: 20 }}>
//                   <Text fontWeight={"bold"} fontSize={"2xl"}>
//                     {String(number + 1).padStart(2, "0")}.
//                   </Text>
//                 </Box>

//                 <Stack gap={0}>
//                   <MotionHeading
//                     fontFamily={"heading"}
//                     mb={6}
//                     fontSize={{ base: "3xl", md: "4xl" }}
//                     as="h2"
//                     fontWeight="bold"
//                     color="fg.default"
//                     initial={{ opacity: 0, y: -20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8 }}
//                   >
//                     {project.title}
//                   </MotionHeading>

//                   <MotionText
//                     fontSize={"md"}
//                     mb={1}
//                     color={"fg.mute"}
//                     fontWeight="medium"
//                     fontFamily="body"
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.5, duration: 0.8 }}
//                   >
//                     {project.description}
//                   </MotionText>
//                 </Stack>
//               </HStack>
//               <Stack gap={5}>
//                 <Pcard2
//                   {...project}
//                   frontend={frontend}
//                   number={index}
//                   showDes={false}
//                 />
//               </Stack>
//             </Stack>
//           );
//         })}
//       </Stack>
//     </MotionContainer>
//   );
// };

// export default ProjectPage;

import { HeadingText } from "@/components/app/HeadingText";
import Pcard2 from "@/components/app/ProjectCard";

import { projects } from "@/constant/projects";

import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const ProjectPage = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const MotionContainer = motion.create(Container);

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <MotionContainer
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.8, ease: "easeOut" }}
      mt={16}
      w="full"
      py={{ base: 10, md: 18 }}
      px={{ base: 0, md: 16 }}
      bg="bg.default"
      color="fg.default"
    >
      <Flex align="center" justify="center" flexDir="column" mb={5}>
        <HeadingText text="My Projects" />
      </Flex>

      <Stack
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {projects.map((project, index) => {
          const number = index + 1;

          return (
            <Stack key={project.id}>
              <HStack align="start" mb={{ base: 4, md: 10 }}>
                {/* Project Number */}
                <Box w={{ base: 10, md: 20 }}>
                  <Text fontWeight="bold" fontSize="2xl">
                    {String(number).padStart(2, "0")}.
                  </Text>
                </Box>

                {/* Title + Description */}
                <Stack gap={0}>
                  <Heading
                    fontFamily="heading"
                    mb={6}
                    fontSize={{ base: "3xl", md: "4xl" }}
                    fontWeight="bold"
                  >
                    {project.title}
                  </Heading>

                  <Text
                    fontSize="md"
                    mb={1}
                    color="fg.mute"
                    fontWeight="medium"
                    fontFamily="body"
                  >
                    {project.description}
                  </Text>
                </Stack>
              </HStack>

              {/* Project Card */}
              <Stack gap={5}>
                <Pcard2 {...project} showDes={false} />
              </Stack>
            </Stack>
          );
        })}
      </Stack>
    </MotionContainer>
  );
};

export default ProjectPage;

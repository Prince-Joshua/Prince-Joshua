import FadeInSection from "@/components/animation/FadeInSection";
import { CollapsibleCard } from "@/Component/CollapsibleCard";
import { HeadingText } from "@/components/app/HeadingText";
import { FlowDiagram } from "@/Component/FlowDiagram";

import { projects } from "@/constant/projects";

import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  List,
  Stack,
  Text,
  HStack,
  Icon,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { LuCircleDotDashed } from "react-icons/lu";
import { useParams } from "react-router-dom";

const SingleProjectPage = () => {
  const MotionCenter = motion.create(Center);
  const MotionBox = motion.create(Box);
  const { id } = useParams();

  // Find project by ID
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <Box h="100vh" display="flex" justifyContent="center" alignItems="center">
        <Text fontSize="4xl" color="red.500">
          Project not found.
        </Text>
      </Box>
    );
  }

  const {
    title,
    description,
    isCaseStudy,
    intro,
    goal,
    role,
    techStack,
    overview,
    problemSession,
    addressedProblems,
  } = project;

  /**
   * Tech Stack Display
   */
  const TechStackDisplay = ({ stack }) => (
    <Stack gap={3} mb={4}>
      <List.Root variant="plain" align="start" gap={2} mb={2} color="fg.mute">
        {stack &&
          Object.entries(stack).map(([category, items], index) => (
            <MotionBox
              key={category}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <List.Item>
                <List.Indicator asChild color="teal.500" mr={2}>
                  <LuCircleDotDashed size={19} />
                </List.Indicator>

                <Box gap={2} key={category}>
                  <Text
                    fontWeight="bold"
                    mb={1}
                    textTransform="capitalize"
                    color={"primary.default"}
                  >
                    {category}
                  </Text>
                  <HStack wrap="wrap" gap={4} pl={2}>
                    {items.map((tech) => (
                      <HStack key={tech.name} gap={1}>
                        <Icon as={tech.icon} boxSize={5} color={tech.color} />
                        <Text fontSize="sm" color={"pri.mute"}>
                          {tech.name}
                        </Text>
                      </HStack>
                    ))}
                  </HStack>
                </Box>
              </List.Item>
            </MotionBox>
          ))}
      </List.Root>
    </Stack>
  );

  /**
   * -------------------------------------------------------------
   * NORMAL PROJECT VIEW (non-case study)
   * -------------------------------------------------------------
   */
  if (!isCaseStudy) {
    return (
      <Container py={50} maxW="5xl">
        <Stack minH="100vh">
          <HeadingText text={title} />

          <Flex direction={{ base: "column", md: "row" }} gap={6}>
            <Box flex={1}>
              <CollapsibleCard project={project} />

              {/* Technologies Used */}
              <Heading mt={6} mb={3}>
                Technologies Used
              </Heading>
              <TechStackDisplay stack={techStack} />
            </Box>

            <Box flex={1} bg="bg.muted" borderRadius="lg" p={4}></Box>
          </Flex>
        </Stack>
      </Container>
    );
  }

  /**
   * -------------------------------------------------------------
   * CASE STUDY VIEW
   * -------------------------------------------------------------
   */
  return (
    <Container py={50}>
      <MotionCenter
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Stack gap={3}>
          <HeadingText text={`${title}`} />
          <Stack gap={0} align={"center"} justify={"center"}>
            <Text color={"fg.mute"}>{description}</Text>
            <Text textStyle={"sm"} color={"primary.default"}>
              {" "}
              Case Study
            </Text>
          </Stack>
          {/* INTRO + OVERVIEW */}
          <Box
            p={4}
            boxShadow={"sm"}
            boxShadowColor={"rgba(0,0,0,0.05)"}
            borderRadius={"sm"}
          >
            <Text fontSize="lg" fontWeight="bold" mb={2}>
              Introduction
            </Text>
            <Text mb={2} color="fg.mute">
              {intro}
            </Text>
          </Box>

          {/* Overview */}
          <FadeInSection>
            <Box
              p={4}
              boxShadow={"sm"}
              boxShadowColor={"rgba(0,0,0,0.05)"}
              borderRadius={"sm"}
            >
              {overview && (
                <Box mb={5}>
                  <Text fontSize="lg" fontWeight="bold" mb={2}>
                    Overview
                  </Text>

                  {overview.map((item, index) => (
                    <Text key={index} mb={2} color="fg.mute">
                      {item}
                    </Text>
                  ))}
                </Box>
              )}
            </Box>
          </FadeInSection>

          {/* Goal */}
          <FadeInSection>
            <Box
              p={4}
              boxShadow={"sm"}
              boxShadowColor={"rgba(0,0,0,0.05)"}
              borderRadius={"sm"}
            >
              <Text fontSize="lg" fontWeight="bold" mb={2}>
                Goal
              </Text>
              <Text color="fg.mute">{goal}</Text>
            </Box>
          </FadeInSection>

          {/* My Role */}
          <FadeInSection>
            <Box
              p={4}
              boxShadow={"sm"}
              boxShadowColor={"rgba(0,0,0,0.05)"}
              borderRadius={"sm"}
            >
              <Text fontSize="lg" fontWeight="bold" mb={2}>
                My Role
              </Text>
              <List.Root
                variant="plain"
                align="start"
                gap={2}
                mb={2}
                color="fg.mute"
              >
                {role?.map((item, index) => (
                  <MotionBox
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <List.Item>
                      <List.Indicator asChild color="teal.500" mr={2}>
                        <LuCircleDotDashed size={19} />
                      </List.Indicator>
                      {item}
                    </List.Item>
                  </MotionBox>
                ))}
              </List.Root>
            </Box>
          </FadeInSection>

          {/* Technologies Used */}
          <FadeInSection>
            <Box
              p={4}
              boxShadow={"sm"}
              boxShadowColor={"rgba(0,0,0,0.05)"}
              borderRadius={"sm"}
            >
              <Text fontSize="lg" fontWeight="bold" mb={2}>
                Technologies Used
              </Text>
              <TechStackDisplay stack={techStack} />
            </Box>
          </FadeInSection>

          {/* Problem Space */}
          <FadeInSection>
            <Box
              p={4}
              boxShadow={"sm"}
              boxShadowColor={"rgba(0,0,0,0.05)"}
              borderRadius={"sm"}
            >
              {problemSession && problemSession.challenges && (
                /* <ProblemSpaceCarousel challenges={problemSession.challenges} /> */
                <Box>
                  <Text fontSize="lg" fontWeight="bold" mb={2}>
                    Problem Space
                  </Text>
                  <Text mb={2} color={"fg.mute"}>
                    {problemSession.description}
                  </Text>

                  <Flex
                    gap={6}
                    mb={10}
                    align="center"
                    justify="center"
                    flexWrap="wrap"
                  >
                    {problemSession.challenges.map((item) => (
                      <Box
                        key={item.challenge}
                        borderRadius="xl"
                        shadow="sm"
                        p={6}
                        maxW="230px"
                        _hover={{
                          transform: "translateY(-5px)",
                          shadow: "2xl",
                        }}
                        transition="all 0.3s"
                      >
                        <Heading size="md" mb={2} color={"primary.default"}>
                          {item.challenge}
                        </Heading>
                        <Text color="fg.mute" textStyle={"sm"}>
                          {item.explanation}
                        </Text>
                      </Box>
                    ))}
                  </Flex>

                  <Text color={"fg.mute"}>
                    {addressedProblems || problemSession.summary}
                  </Text>
                </Box>
              )}
            </Box>
          </FadeInSection>

          {/* KeyFeature Space */}
          <FadeInSection>
            <Box
              p={4}
              boxShadow={"sm"}
              boxShadowColor={"rgba(0,0,0,0.05)"}
              borderRadius={"sm"}
            >
              {project.keyFeatures && (
                <Box>
                  <Text fontSize="lg" fontWeight="bold" mb={2}>
                    Key Features
                  </Text>

                  {Object.entries(project.keyFeatures).map(
                    ([category, features]) => (
                      <Box key={category} mb={4}>
                        <Text
                          fontWeight={"bold"}
                          mb={2}
                          color={"primary.default"}
                        >
                          {category
                            .replace(/([A-Z])/g, " $1")
                            .replace(/^./, (s) => s.toUpperCase())}
                        </Text>

                        <Stack>
                          {features.map((feature, index) => (
                            <List.Root
                              key={index}
                              variant="plain"
                              align="start"
                              color="fg.mute"
                            >
                              <MotionBox
                                key={index}
                                initial={{ opacity: 0, y: 20, x: -20 }}
                                whileInView={{ opacity: 1, y: 0, x: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                  delay: index * 0.1,
                                  duration: 0.5,
                                }}
                              >
                                <List.Item>
                                  <List.Indicator
                                    asChild
                                    color="teal.500"
                                    mr={2}
                                  >
                                    <LuCircleDotDashed size={19} />
                                  </List.Indicator>
                                  {feature}
                                </List.Item>
                              </MotionBox>
                            </List.Root>
                          ))}
                        </Stack>
                      </Box>
                    )
                  )}
                </Box>
              )}
            </Box>
          </FadeInSection>

          {/* enginerring decision*/}
          <FadeInSection>
            <Box
              p={4}
              boxShadow={"sm"}
              boxShadowColor={"rgba(0,0,0,0.05)"}
              borderRadius={"sm"}
            >
              {project.engineeringDecisions && (
                <Box>
                  <Text fontSize="lg" fontWeight="bold" mb={2}>
                    Engineering Decisions
                  </Text>
                  <Stack>
                    {project.engineeringDecisions.map((item, index) => (
                      <List.Root
                        key={index}
                        variant="plain"
                        align="start"
                        color="fg.mute"
                      >
                        <MotionBox
                          key={index}
                          initial={{ opacity: 0, y: 20, x: -20 }}
                          whileInView={{ opacity: 1, y: 0, x: 0 }}
                          viewport={{ once: true, amount: 0.2 }}
                          transition={{
                            delay: index * 0.1,
                            duration: 0.5,
                          }}
                        >
                          <List.Item>
                            <List.Indicator asChild color="teal.500" mr={2}>
                              <LuCircleDotDashed size={19} />
                            </List.Indicator>
                            {item.decision} - {item.reason}
                          </List.Item>
                        </MotionBox>
                      </List.Root>
                    ))}
                  </Stack>
                </Box>
              )}
            </Box>
          </FadeInSection>

          {/* Outcome and Impact Space */}

          <FadeInSection>
            <Box
              p={4}
              boxShadow={"sm"}
              boxShadowColor={"rgba(0,0,0,0.05)"}
              borderRadius={"sm"}
            >
              {project.outcomes && (
                <Box>
                  <Text fontSize="lg" fontWeight="bold" mb={2}>
                    Outcome and Impact
                  </Text>

                  <Text color={"fg.mute"} mb={4}>
                    {project.outcomes.summary}
                  </Text>

                  <List.Root
                    variant="plain"
                    align="start"
                    gap={2}
                    mb={2}
                    color="fg.mute"
                  >
                    {project.outcomes.points.map((item, index) => (
                      <MotionBox
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                          delay: index * 0.1,
                          duration: 0.5,
                        }}
                      >
                        <List.Item key={index}>
                          <List.Indicator asChild color="teal.500" mr={2}>
                            <LuCircleDotDashed size={19} />
                          </List.Indicator>
                          {item}
                        </List.Item>
                      </MotionBox>
                    ))}
                  </List.Root>

                  <Text fontSize="lg" fontWeight="bold" mb={2}>
                    What I learned
                  </Text>

                  <List.Root
                    variant="plain"
                    align="start"
                    gap={2}
                    mb={2}
                    color="fg.mute"
                  >
                    {project.outcomes.lessonsLearned.map((item, index) => (
                      <MotionBox
                        key={index}
                        initial={{ opacity: 0, y: 20, x: -20 }}
                        whileInView={{ opacity: 1, y: 0, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                          delay: index * 0.1,
                          duration: 0.5,
                        }}
                      >
                        <List.Item key={index}>
                          <List.Indicator asChild color="teal.500" mr={2}>
                            <LuCircleDotDashed size={19} />
                          </List.Indicator>
                          {item}
                        </List.Item>
                      </MotionBox>
                    ))}
                  </List.Root>

                  {project.outcomes.Kips && (
                    <Box mb={4}>
                      <Text fontSize="lg" fontWeight="bold" mb={2}>
                        KPIs
                      </Text>

                      <List.Root
                        variant="plain"
                        align="start"
                        gap={2}
                        mb={2}
                        color="fg.mute"
                      >
                        {project.outcomes.Kips.map((item, index) => {
                          const ArrowIcon =
                            item.direction === "up" ? BsArrowUp : BsArrowDown;

                          const color =
                            item.direction === "up" ? "green.400" : "red.400";

                          return (
                            <List.Item key={index}>
                              <List.Indicator asChild color="teal.500" mr={2}>
                                <LuCircleDotDashed size={19} />
                              </List.Indicator>
                              <Stack key={index} mb={1} gap={0}>
                                <Text
                                  textStyle={"xs"}
                                  color={"primary.default"}
                                >
                                  {item.metric}
                                </Text>
                                <HStack gap={0} align={"center"}>
                                  <Icon
                                    as={ArrowIcon}
                                    color={color}
                                    size={"xs"}
                                  />

                                  <Text color={"fg.mute"}> {item.value}</Text>
                                </HStack>
                              </Stack>
                            </List.Item>
                          );
                        })}
                      </List.Root>
                    </Box>
                  )}
                </Box>
              )}
            </Box>
          </FadeInSection>

          {/*User Persona*/}
          <FadeInSection>
            <Box
              p={4}
              boxShadow={"sm"}
              boxShadowColor={"rgba(0,0,0,0.05)"}
              borderRadius={"sm"}
            >
              {project.userPersonas && (
                <Box>
                  <Text fontSize="lg" fontWeight="bold" mb={2}>
                    User Persona
                  </Text>

                  {project.userPersonas.map((person, index) => (
                    <Stack key={index} gap={3}>
                      <Text
                        fontWeight={"bold"}
                        fontSize="lg"
                        color={"primary.default"}
                        mt={2}
                      >
                        {person.name}
                      </Text>

                      <Image w={50} h={50} />

                      {person.summary.map((item, index) => (
                        <Text textStyle={"sm"} color={"fg.mute"} key={index}>
                          {item}
                        </Text>
                      ))}
                    </Stack>
                  ))}
                </Box>
              )}
            </Box>
          </FadeInSection>
        </Stack>
      </MotionCenter>

      {/* <FlowDiagram /> */}

      <Text mt={5} fontWeight="bold" fontSize="2xl" textAlign="center">
        Thank You!
      </Text>
    </Container>
  );
};

export default SingleProjectPage;

// import { CollapsibleCard } from "@/Component/CollapsibleCard";
// import { HeadingText } from "@/Component/HeadingText";
// import { FlowDiagram } from "@/Component/ProjectReport/FlowDiagram";

// import { projects } from "@/constant/projects";

// import {
//   Box,
//   Center,
//   Container,
//   Flex,
//   Heading,
//   List,
//   Stack,
//   Text,
//   HStack,
//   Icon,
// } from "@chakra-ui/react";
// import { motion } from "framer-motion";
// import { BsArrowDown, BsArrowUp } from "react-icons/bs";
// import { LuCircleDotDashed } from "react-icons/lu";
// import { useParams } from "react-router-dom";

// const MotionBox = motion(Box);
// const MotionStack = motion(Stack);

// const SingleProjectPage = () => {
//   const { id } = useParams();

//   // Find project by ID
//   const project = projects.find((p) => p.id === id);

//   if (!project) {
//     return (
//       <Box h="100vh" display="flex" justifyContent="center" alignItems="center">
//         <Text fontSize="4xl" color="red.500">
//           Project not found.
//         </Text>
//       </Box>
//     );
//   }

//   const {
//     title,
//     description,
//     isCaseStudy,
//     intro,
//     goal,
//     role,
//     techStack,
//     overview,
//     problemSession,
//     addressedProblems,
//     keyFeatures,
//     outcomes,
//   } = project;

//   // Tech Stack Display
//   const TechStackDisplay = ({ stack }) => (
//     <Stack gap={3} mb={4}>
//       <List.Root variant="plain" align="start" gap={2} mb={2} color="fg.mute">
//         {stack &&
//           Object.entries(stack).map(([category, items]) => (
//             <List.Item key={category}>
//               <List.Indicator asChild color="teal.500" mr={2}>
//                 <LuCircleDotDashed size={19} />
//               </List.Indicator>
//               <Box gap={2}>
//                 <Text
//                   fontWeight="bold"
//                   mb={1}
//                   textTransform="capitalize"
//                   color="primary.default"
//                 >
//                   {category}
//                 </Text>
//                 <HStack wrap="wrap" gap={4} pl={2}>
//                   {items.map((tech) => (
//                     <HStack key={tech.name} gap={1}>
//                       <Icon as={tech.icon} boxSize={5} color={tech.color} />
//                       <Text fontSize="sm" color="pri.mute">
//                         {tech.name}
//                       </Text>
//                     </HStack>
//                   ))}
//                 </HStack>
//               </Box>
//             </List.Item>
//           ))}
//       </List.Root>
//     </Stack>
//   );

//   if (!isCaseStudy) {
//     return (
//       <Container py={50} maxW="5xl">
//         <Stack minH="100vh" spacing={6}>
//           <HeadingText text={title} />
//           <Flex direction={{ base: "column", md: "row" }} gap={6}>
//             <Box flex={1}>
//               <CollapsibleCard project={project} />
//               <Heading mt={6} mb={3}>
//                 Technologies Used
//               </Heading>
//               <TechStackDisplay stack={techStack} />
//             </Box>
//             <Box flex={1} bg="bg.muted" borderRadius="lg" p={4}></Box>
//           </Flex>
//         </Stack>
//       </Container>
//     );
//   }

//   return (
//     <Container py={50}>
//       <MotionStack gap={5} initial="hidden" animate="visible">
//         {/* Title & Description */}
//         <MotionStack
//           align="center"
//           justify="center"
//           spacing={1}
//           variants={{
//             hidden: { opacity: 0, y: 30 },
//             visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//           }}
//         >
//           <HeadingText text={title} />
//           <Text color="fg.mute">{description}</Text>
//           <Text textStyle="sm" color="primary.default">
//             Case Study
//           </Text>
//         </MotionStack>

//         {/* Intro, Overview, Goal */}
//         {[
//           { label: "Introduction", content: intro },
//           { label: "Overview", content: overview?.join("\n") },
//           { label: "Goal", content: goal },
//         ].map((section, idx) => (
//           <MotionBox
//             key={idx}
//             p={4}
//             boxShadow="sm"
//             borderRadius="sm"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: idx * 0.15 }}
//             whileHover={{ scale: 1.02 }}
//           >
//             <Text fontSize="lg" fontWeight="bold" mb={2}>
//               {section.label}
//             </Text>
//             <Text color="fg.mute">{section.content}</Text>
//           </MotionBox>
//         ))}

//         {/* My Role */}
//         <MotionBox p={4} boxShadow="sm" borderRadius="sm">
//           <Text fontSize="lg" fontWeight="bold" mb={2}>
//             My Role
//           </Text>
//           <Stack
//             as={motion.div}
//             variants={{
//               hidden: {},
//               visible: { transition: { staggerChildren: 0.1 } },
//             }}
//           >
//             {role?.map((item, idx) => (
//               <MotionBox
//                 key={idx}
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 mb={2}
//               >
//                 <List.Root
//                   variant="plain"
//                   align="start"
//                   gap={2}
//                   color="fg.mute"
//                 >
//                   <List.Item>
//                     <List.Indicator asChild color="teal.500" mr={2}>
//                       <LuCircleDotDashed size={19} />
//                     </List.Indicator>
//                     {item}
//                   </List.Item>
//                 </List.Root>
//               </MotionBox>
//             ))}
//           </Stack>
//         </MotionBox>

//         {/* Tech Stack */}
//         <MotionBox p={4} boxShadow="sm" borderRadius="sm">
//           <Heading mt={6} mb={3}>
//             Technologies Used
//           </Heading>
//           <TechStackDisplay stack={techStack} />
//         </MotionBox>

//         {/* Problem Space */}
//         {problemSession?.challenges && (
//           <MotionBox p={4} boxShadow="sm" borderRadius="sm">
//             <Heading size="xl" mb={2}>
//               Problem Space
//             </Heading>
//             <Text mb={2} color="fg.mute">
//               {problemSession.description}
//             </Text>
//             <Flex
//               gap={6}
//               mb={10}
//               align="center"
//               justify="center"
//               flexWrap="wrap"
//             >
//               {problemSession.challenges.map((item, idx) => (
//                 <MotionBox
//                   key={item.challenge}
//                   borderRadius="xl"
//                   shadow="sm"
//                   p={6}
//                   maxW="230px"
//                   whileHover={{ y: -5, shadow: "2xl" }}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: idx * 0.1 }}
//                 >
//                   <Heading size="md" mb={2} color="primary.default">
//                     {item.challenge}
//                   </Heading>
//                   <Text color="fg.mute" textStyle="sm">
//                     {item.explanation}
//                   </Text>
//                 </MotionBox>
//               ))}
//             </Flex>
//             <Text color="fg.mute">
//               {addressedProblems || problemSession.summary}
//             </Text>
//           </MotionBox>
//         )}

//         {/* Key Features */}
//         {keyFeatures && (
//           <MotionBox p={4} boxShadow="sm" borderRadius="sm">
//             <Heading size="xl" mb={2}>
//               Key Features
//             </Heading>
//             {Object.entries(keyFeatures).map(([category, features], idx) => (
//               <MotionBox
//                 key={category}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//               >
//                 <Text fontWeight="bold" mb={2} color="primary.default">
//                   {category
//                     .replace(/([A-Z])/g, " $1")
//                     .replace(/^./, (s) => s.toUpperCase())}
//                 </Text>
//                 <Stack>
//                   {features.map((feature, i) => (
//                     <MotionBox
//                       key={i}
//                       initial={{ opacity: 0, x: -20 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: i * 0.05 }}
//                     >
//                       <List.Root
//                         variant="plain"
//                         align="start"
//                         gap={2}
//                         color="fg.mute"
//                       >
//                         <List.Item>
//                           <List.Indicator asChild color="teal.500" mr={2}>
//                             <LuCircleDotDashed size={19} />
//                           </List.Indicator>
//                           {feature}
//                         </List.Item>
//                       </List.Root>
//                     </MotionBox>
//                   ))}
//                 </Stack>
//               </MotionBox>
//             ))}
//           </MotionBox>
//         )}

//         {/* Outcome & Lessons Learned */}
//         {outcomes && (
//           <MotionBox p={4} boxShadow="sm" borderRadius="sm">
//             <Heading size="xl" mb={2}>
//               Outcome and Impact
//             </Heading>
//             <Text color="fg.mute" mb={4}>
//               {outcomes.summary}
//             </Text>

//             {/* Points */}
//             <Stack>
//               {outcomes.points.map((item, idx) => (
//                 <MotionBox
//                   key={idx}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: idx * 0.05 }}
//                 >
//                   <List.Root
//                     variant="plain"
//                     align="start"
//                     gap={2}
//                     color="fg.mute"
//                   >
//                     <List.Item>
//                       <List.Indicator asChild color="teal.500" mr={2}>
//                         <LuCircleDotDashed size={19} />
//                       </List.Indicator>
//                       {item}
//                     </List.Item>
//                   </List.Root>
//                 </MotionBox>
//               ))}
//             </Stack>

//             <Heading size="xl" mt={4} mb={2}>
//               What I Learned
//             </Heading>
//             <Stack>
//               {outcomes.lessonsLearned.map((item, idx) => (
//                 <MotionBox
//                   key={idx}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: idx * 0.05 }}
//                 >
//                   <List.Root
//                     variant="plain"
//                     align="start"
//                     gap={2}
//                     color="fg.mute"
//                   >
//                     <List.Item>
//                       <List.Indicator asChild color="teal.500" mr={2}>
//                         <LuCircleDotDashed size={19} />
//                       </List.Indicator>
//                       {item}
//                     </List.Item>
//                   </List.Root>
//                 </MotionBox>
//               ))}
//             </Stack>

//             {/* KPIs */}
//             {outcomes.Kips && (
//               <Box mt={4}>
//                 <Heading size="xl" mb={2}>
//                   Project KPIs
//                 </Heading>
//                 <Stack>
//                   {outcomes.Kips.map((item, idx) => {
//                     const ArrowIcon =
//                       item.direction === "up" ? BsArrowUp : BsArrowDown;
//                     const color =
//                       item.direction === "up" ? "green.400" : "red.400";
//                     return (
//                       <MotionBox
//                         key={idx}
//                         initial={{ opacity: 0, x: -20 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: idx * 0.05 }}
//                       >
//                         <List.Root
//                           variant="plain"
//                           align="start"
//                           gap={2}
//                           color="fg.mute"
//                         >
//                           <List.Item>
//                             <List.Indicator asChild color="teal.500" mr={2}>
//                               <LuCircleDotDashed size={19} />
//                             </List.Indicator>
//                             <Stack gap={0}>
//                               <Text textStyle="xs" color="primary.default">
//                                 {item.metric}
//                               </Text>
//                               <HStack gap={1} align="center">
//                                 <Icon as={ArrowIcon} color={color} size="xs" />
//                                 <Text color="fg.mute">{item.value}</Text>
//                               </HStack>
//                             </Stack>
//                           </List.Item>
//                         </List.Root>
//                       </MotionBox>
//                     );
//                   })}
//                 </Stack>
//               </Box>
//             )}
//           </MotionBox>
//         )}

//         {/* Flow Diagram */}
//         <MotionBox
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <FlowDiagram />
//         </MotionBox>

//         <Text mt={5} fontWeight="bold" fontSize="2xl" textAlign="center">
//           Thank You!
//         </Text>
//       </MotionStack>
//     </Container>
//   );
// };

// export default SingleProjectPage;

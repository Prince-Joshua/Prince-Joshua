// import { HeadingText } from "@/Component/HeadingText";
// import {
//   Box,
//   Center,
//   Container,
//   Flex,
//   Image,
//   List,
//   Stack,
//   Text,
// } from "@chakra-ui/react";
// import { LuCircleCheck } from "react-icons/lu";

// export const FlowDiagram = () => {
//   return (
//     <Container mt={20}>
//       <Center>
//         <Stack gap={5}>
//           <HeadingText text={"FLOW DIAGRAM"} />

//           <Flex
//             gap={{
//               base: 4,
//               md: 0,
//             }}
//             justifyContent={"space-between"}
//           >
//             <Box flex={1} h={300} w={"auto"}>
//               <Image
//                 src={"lorin-both-tDUkm1M0tvg-unsplash.jpg"}
//                 w={"auto"}
//                 h={"full"}
//                 objectFit={"contain"}
//               />
//             </Box>
//             <Box flex={1}>
//               <Text mb={3} fontWeight={"bold"} fontSize={"md"}>
//                 User opens the app
//               </Text>
//               <List.Root gap={2} variant={"plain"} align={"start"}>
//                 <List.Item>
//                   <List.Indicator asChild color={"green.500"}>
//                     <LuCircleCheck />
//                   </List.Indicator>
//                   Lands on a clean home screen with featured meals and category
//                 </List.Item>
//                 <List.Item>
//                   <List.Indicator asChild color={"green.500"}>
//                     <LuCircleCheck />
//                   </List.Indicator>
//                   Browse and selects a meal and adds it to cart, using search or
//                   category filter
//                 </List.Item>
//               </List.Root>
//             </Box>
//           </Flex>

//           <Flex
//             gap={{
//               base: 4,
//               md: 0,
//             }}
//           >
//             <Box flex={1}>
//               <List.Root gap={2} variant={"plain"} align={"start"}>
//                 <List.Item>
//                   <List.Indicator asChild color={"green.500"}>
//                     <LuCircleCheck />
//                   </List.Indicator>
//                   View meal details in the cart
//                 </List.Item>
//                 <List.Item>
//                   <List.Indicator asChild color={"green.500"}>
//                     <LuCircleCheck />
//                   </List.Indicator>
//                   Confirms meal choices, quantity and total cost
//                 </List.Item>
//                 <List.Item>
//                   <List.Indicator asChild color={"green.500"}>
//                     <LuCircleCheck />
//                   </List.Indicator>
//                   Proceed to Checkout.
//                 </List.Item>
//               </List.Root>
//             </Box>
//             <Box flex={1} h={300} w={"auto"}>
//               <Image
//                 src={"lorin-both-tDUkm1M0tvg-unsplash.jpg"}
//                 w={"full"}
//                 h={"full"}
//                 objectFit={"contain"}
//               />
//             </Box>
//           </Flex>

//           <Flex
//             gap={{
//               base: 4,
//               md: 0,
//             }}
//             justifyContent={"space-between"}
//           >
//             <Box flex={1} h={300} w={"auto"}>
//               <Image
//                 src={"lorin-both-tDUkm1M0tvg-unsplash.jpg"}
//                 w={"auto"}
//                 h={"full"}
//                 objectFit={"contain"}
//               />
//             </Box>
//             <Box flex={1}>
//               <List.Root gap={2} variant={"plain"} align={"center"}>
//                 <List.Item>
//                   <List.Indicator asChild color={"green.500"}>
//                     <LuCircleCheck />
//                   </List.Indicator>
//                   Enter Delivery details
//                 </List.Item>
//                 <List.Item>
//                   <List.Indicator asChild color={"green.500"}>
//                     <LuCircleCheck />
//                   </List.Indicator>
//                   Enter payment details
//                 </List.Item>
//                 <List.Item>
//                   <List.Indicator asChild color={"green.500"}>
//                     <LuCircleCheck />
//                   </List.Indicator>
//                   Confirm payment
//                 </List.Item>
//               </List.Root>
//             </Box>
//           </Flex>

//           <Flex
//             gap={{
//               base: 4,
//               md: 0,
//             }}
//           >
//             <Box flex={1}>
//               <List.Root gap={2} variant={"plain"} align={"start"}>
//                 <List.Item>
//                   <List.Indicator asChild color={"green.500"}>
//                     <LuCircleCheck />
//                   </List.Indicator>
//                   Receive success message
//                 </List.Item>
//                 <List.Item>
//                   <List.Indicator asChild color={"green.500"}>
//                     <LuCircleCheck />
//                   </List.Indicator>
//                   Order Summary
//                 </List.Item>
//                 <List.Item>
//                   <List.Indicator asChild color={"green.500"}>
//                     <LuCircleCheck />
//                   </List.Indicator>
//                   Estimated Delivery Time
//                 </List.Item>
//               </List.Root>
//             </Box>
//             <Box flex={1} h={300} w={"auto"}>
//               <Image
//                 src={"lorin-both-tDUkm1M0tvg-unsplash.jpg"}
//                 w={"full"}
//                 h={"full"}
//                 objectFit={"contain"}
//               />
//             </Box>
//           </Flex>
//         </Stack>
//       </Center>
//     </Container>
//   );
// };

"use client";

import { HeadingText } from "@/components/app/HeadingText";
import {
  Box,
  Center,
  Container,
  Flex,
  Image,
  List,
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import { LuCircleCheck } from "react-icons/lu";
import { useEffect, useRef } from "react";

// ✅ Motion wrapper
const MotionBox = motion.create(Box);

// ✅ Reusable Step Component
const FlowStep = ({ step, reverse }) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <MotionBox
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Flex
        direction={{ base: "column", md: reverse ? "row-reverse" : "row" }}
        align="top"
        justify="space-between"
        gap={{ base: 6, md: 10 }}
        py={4}
      >
        {/* Image Section */}
        <Box flex={1} w="full">
          <Image
            src={step.image}
            w="full"
            h={{ base: 200, md: 300 }}
            objectFit="contain"
            borderRadius="xl"
          />
        </Box>

        {/* Text Section */}
        <Box flex={1} w="full">
          <List.Root
            gap={2}
            variant="plain"
            align="start"
            color={"fg.mute"}
            fontSize={"lg"}
          >
            {step.items.map((item, i) => (
              <List.Item key={i}>
                <List.Indicator asChild color="green.500">
                  <LuCircleCheck />
                </List.Indicator>
                {item}
              </List.Item>
            ))}
          </List.Root>
        </Box>
      </Flex>
    </MotionBox>
  );
};

// ✅ Main Component
export const FlowDiagram = () => {
  const steps = [
    {
      image: "lorin-both-tDUkm1M0tvg-unsplash.jpg",
      items: [
        "Lands on a clean home screen with featured meals and category",
        "Browses and selects a meal using search or category filter",
      ],
    },
    {
      image: "lorin-both-tDUkm1M0tvg-unsplash.jpg",
      items: [
        "Views meal details in the cart",
        "Confirms meal choices, quantity, and total cost",
        "Proceeds to checkout",
      ],
    },
    {
      image: "lorin-both-tDUkm1M0tvg-unsplash.jpg",
      items: [
        "Enters delivery details",
        "Provides payment details",
        "Confirms payment",
      ],
    },
    {
      image: "lorin-both-tDUkm1M0tvg-unsplash.jpg",
      items: [
        "Receives success message",
        "Views order summary",
        "Checks estimated delivery time",
      ],
    },
  ];

  return (
    <Container maxW="6xl" mt={20}>
      <Center>
        <Stack w="full" gap={10}>
          <HeadingText text="FLOW DIAGRAM" />

          <Text
            textAlign={"center"}
            color={"primary.default"}
            fontSize={"md"}
            fontWeight={600}
            fontFamily={"heading"}
            mb={5}
          >
            User opens the app
          </Text>
          {steps.map((step, index) => (
            <FlowStep
              key={index}
              step={step}
              reverse={index % 2 === 1} // alternate layout
            />
          ))}
        </Stack>
      </Center>
    </Container>
  );
};

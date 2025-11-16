import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

const FadeInSection = ({ children, delay = 0 }) => (
  <MotionBox
    initial={{
      opacity: 0,
      y: 30,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
    }}
    viewport={{
      once: true,
      amount: 0.2,
    }}
    transition={{
      duration: 0.8,
      ease: "easeOut",
    }}
  >
    {children}
  </MotionBox>
);

export default FadeInSection;

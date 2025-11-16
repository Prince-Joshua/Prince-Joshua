import { HeadingText } from "@/components/app/HeadingText";
import TestimonialCard from "@/components/app/TestimonialCard";
import { testimonials } from "@/constant/testimonials";

import {
  Box,
  Container,
  Flex,
  IconButton,
  useBreakpointValue,
  HStack,
  Separator,
} from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useEffect, useState, useMemo } from "react";
import { useSwipeable } from "react-swipeable";
import { motion, AnimatePresence } from "framer-motion";

const MotionFlex = motion.create(Flex);

const TestimonialSection = () => {
  const cardsPerView = useBreakpointValue({ base: 1, md: 2, lg: 3 }) || 1;
  const [index, setIndex] = useState(0);
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [isPaused, setIsPaused] = useState(false); // Handles
  // hover & touch

  const totalSlides = Math.ceil(testimonials.length / cardsPerView);

  const next = () => {
    setIndex((prev) => (prev + 1) % totalSlides);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Auto-scroll (pause on hover or touch)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [cardsPerView, isPaused]);

  const handlers = useSwipeable({
    onSwipedLeft: next,
    onSwipedRight: prev,
    trackMouse: true,
  });

  const visibleTestimonials = useMemo(() => {
    const visible = [];
    for (let i = 0; i < cardsPerView; i++) {
      const currentIndex = (index + i) % totalSlides;
      visible.push(testimonials[currentIndex]);
    }
    return visible;
  }, [index, cardsPerView]);

  const variants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, rotate: -2 },
    visible: { opacity: 1, y: 0, rotate: 0 },
  };

  const MotionBox = motion.create(Box);

  return (
    <Container
      mb={5}
      maxW="container.xl"
      minH={"sm"}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      onTouchCancel={() => setIsPaused(false)}
      {...handlers}
    >
      <HeadingText text="Some Proud Stories!" />

      <HStack minHeight={"sm"}>
        {!isMobile && (
          <IconButton
            onClick={prev}
            aria-label="Previous"
            variant="ghost"
            colorPalette={"teal"}
          >
            <FaChevronLeft />
          </IconButton>
        )}

        <Box flex="1" mx={4} overflow="hidden">
          <AnimatePresence mode="wait" initial={false}>
            <MotionFlex
              key={index}
              justify="center"
              gap={6}
              initial="enter"
              animate="center"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.5 }}
              px={2}
            >
              {visibleTestimonials.map((testimony, i) => (
                <MotionBox
                  maxW={{ base: "100%", md: "45%" }}
                  key={i + index}
                  variants={cardVariants}
                  transition={{
                    delay: 0.2 * index,
                    duration: 0.7,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.04,
                    rotate: 0.5,
                    shadow: "2xl",
                  }}
                >
                  <TestimonialCard {...testimony} />
                </MotionBox>
              ))}
            </MotionFlex>
          </AnimatePresence>
        </Box>
        {!isMobile && (
          <IconButton
            onClick={next}
            colorPalette={"teal"}
            aria-label="Next"
            variant="ghost"
          >
            <FaChevronRight />
          </IconButton>
        )}
      </HStack>
    </Container>
  );
};

export default TestimonialSection;

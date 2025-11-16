import links from "@/constant/links";
import { Box, Button, CloseButton, Flex, Stack, Text } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import ContactForm from "./ContactForm";
import { useEffect } from "react";

const MotionBox = motion.create(Box);

// Drawer animation for start/end placement
const drawerAnimation = (placement) => ({
  initial:
    placement === "start" ? { opacity: 0, y: -80 } : { opacity: 0, y: 80 },
  animate: { opacity: 1, y: 0 },
  exit: placement === "start" ? { opacity: 0, y: -80 } : { opacity: 0, y: 80 },
});

// ============================
// Single Drawer Component
// ============================
const Slider = ({ placement, open, onClose }) => {
  const { initial, animate, exit } = drawerAnimation(placement);
  const navigate = useNavigate();

  const handleNavClick = (e, path) => {
    e.preventDefault();
    onClose();
    setTimeout(() => {
      navigate(path);
    }, 400);
  };

  return (
    <AnimatePresence mode="wait">
      {open && (
        <>
          {/*  Backdrop Fade */}
          <MotionBox
            position="fixed"
            inset="0"
            bg="black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.3 }}
            zIndex={10}
            pointerEvents={"none"}
          />

          {/* Drawer Content */}
          <Box
            position={"fixed"}
            top={0}
            left={"50%"}
            transform={"translateX(-50%)"}
            w={"100%"}
            maxW={"1300px"}
            h={"100vh"}
            zIndex={20}
            pointerEvents={"none"}
          >
            <MotionBox
              position="absolute"
              top="0"
              left={placement === "start" ? 0 : "auto"}
              right={placement === "end" ? 0 : "auto"}
              w={placement === "start" ? "33.33%" : "66.66%"}
              flex={placement === "start" ? 1 : 2}
              h="100vh"
              zIndex={30}
              bg={"bg.default"}
              initial={initial}
              animate={animate}
              exit={exit}
              transition={{
                duration: 1.3,
                ease: [0.25, 0.8, 0.25, 1],
              }}
              pointerEvents={"auto"}
            >
              {/* Header */}

              <Flex align={"center"} justify={"space-between"}>
                <Box
                  p={4}
                  borderBottom="1px solid rgba(0,0,0,0.1)"
                  position="relative"
                  fontWeight="bold"
                >
                  {placement === "start" ? "Menu" : "Contact"}
                </Box>

                <Box>
                  {/* Close button only in end drawer */}
                  {placement === "end" && <CloseButton onClick={onClose} />}
                </Box>
              </Flex>

              {/* Body */}
              <Box flex="1" p={6} zIndex={30}>
                {placement === "start" ? (
                  <Stack gap={2} mr={4}>
                    {links.map((link) => (
                      <NavLink
                        key={link.path}
                        to={link.path}
                        onClick={(e) => handleNavClick(e, link.path)}
                      >
                        {({ isActive }) => (
                          <Text
                            textStyle={{ base: "xs", md: "sm" }}
                            fontWeight={isActive ? "bolder" : "normal"}
                            textDecoration="none"
                            color={isActive ? "teal" : "gray"}
                          >
                            {link.name}
                          </Text>
                        )}
                      </NavLink>
                    ))}
                  </Stack>
                ) : (
                  <ContactForm />
                )}
              </Box>

              {/* Footer (for end drawer) */}
              {placement === "end" && (
                <Box p={4} borderTop="1px solid rgba(0,0,0,0.1)">
                  <Button variant="outline" onClick={onClose}>
                    Close
                  </Button>
                </Box>
              )}
            </MotionBox>
          </Box>
        </>
      )}
    </AnimatePresence>
  );
};

// ============================
// Double Drawer Wrapper
// ============================
const DoubleSlider = ({ open, setOpen }) => {
  const closeDrawers = () => {
    setOpen(false);
  };

  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [open]);
  return (
    <>
      <Slider placement="start" open={open} onClose={closeDrawers} />

      <Slider placement="end" open={open} onClose={closeDrawers} />
    </>
  );
};

export default DoubleSlider;

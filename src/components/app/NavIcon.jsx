import { Box, IconButton } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

const NavIcons = ({ open, setOpen }) => {
  const handleClick = () => setOpen((prev) => !prev);

  return (
    <IconButton
      aria-label="Menu"
      variant="ghost"
      colorPalette={"teal"}
      onClick={handleClick}
    >
      <Box display="flex" flexDir="column" alignItems="center" gap="5px">
        <MotionBox
          h="2px"
          bg={"white"}
          borderRadius="full"
          width="18px"
          animate={{ scaleX: open ? 0 : 1 }}
          transformOrigin="center"
          transition={{ duration: 0.3, delay: open ? 0 : 0.3 }}
        />
        <MotionBox
          h="2px"
          bg={"white"}
          borderRadius="full"
          width="12px"
          animate={{ scaleX: open ? 0 : 1 }}
          transformOrigin="center"
          transition={{ duration: 0.3, delay: open ? 0.05 : 0.35 }}
        />
        <MotionBox
          h="2px"
          bg={"white"}
          borderRadius="full"
          width="6px"
          animate={{ scaleX: open ? 0 : 1 }}
          transformOrigin="center"
          transition={{ duration: 0.3, delay: open ? 0.1 : 0.4 }}
        />
      </Box>
    </IconButton>
  );
};

export default NavIcons;

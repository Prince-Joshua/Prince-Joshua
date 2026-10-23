import { RouterProvider } from "react-router-dom";
import router from "./Route";

import { motion } from "framer-motion";
import { Box, ChakraProvider, Container } from "@chakra-ui/react";
import "@fontsource/epilogue/400.css";
import "@fontsource/epilogue/500.css";
import "@fontsource/epilogue/700.css";
import { system } from "./theme";
import { ColorModeProvider } from "./components/ui/color-mode";

function App() {
  const MotionContainer = motion.create(Box);
  return (
    <MotionContainer
      maxW={"1200px"}
      mx={'auto'}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <ChakraProvider value={system}>
        <ColorModeProvider forcedTheme="dark">
          <RouterProvider router={router} />
        </ColorModeProvider>
      </ChakraProvider>
    </MotionContainer>
  );
}

export default App;

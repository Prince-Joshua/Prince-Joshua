import { Spinner, Text, VStack } from "@chakra-ui/react";

const PreLoader = () => {
  return (
    <VStack
      colorPalette={"teal"}
      align={"center"}
      justify={"center"}
      h={"100vh"}
      bg={"bg.default"}
    >
      <Spinner color={"colorPalette.600"} animationDuration={1} />
      <Text color={"colorPalette.600"}>Loading</Text>
    </VStack>
  );
};

export default PreLoader;

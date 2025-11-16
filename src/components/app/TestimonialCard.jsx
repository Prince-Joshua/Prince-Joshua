import { Avatar, HStack, RatingGroup, Stack, Text } from "@chakra-ui/react";

const TestimonialCard = ({ name, title, text, image }) => {
  return (
    <Stack
      maxW="320px"
      gap="4"
      p={4}
      boxShadow={"0 4px 20px rgba(0,0,0,0.3)"}
      borderRadius={"2xl"}
      mb={2}
      bg={"bg.surface"}
    >
      <HStack gap="4">
        <Avatar.Root>
          <Avatar.Fallback name={name} />
          <Avatar.Image src={image} />
        </Avatar.Root>
        <Stack textStyle="sm" gap="0">
          <Text fontWeight="medium">{name}</Text>
          <Text color="fg.muted" textStyle={"xs"}>
            {title}
          </Text>
        </Stack>
      </HStack>
      <Text textStyle={"sm"} color={"fg.mute"}>
        " {text}"
      </Text>

      <RatingGroup.Root
        colorPalette="yellow"
        count={5}
        defaultValue={5}
        size="xs"
        readOnly
      >
        <RatingGroup.HiddenInput />
        <RatingGroup.Control />
      </RatingGroup.Root>
    </Stack>
  );
};
export default TestimonialCard;

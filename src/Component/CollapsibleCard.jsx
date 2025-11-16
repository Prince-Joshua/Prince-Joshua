import { Collapsible, HStack, Stack, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { LuSquareMinus, LuSquarePlus } from "react-icons/lu";

export const CollapsibleCard = ({ project }) => {
  const [isOpen, setIsOpen] = useState();
  return (
    <Collapsible.Root
      onOpenChange={({ open }) => setIsOpen(open)}
      borderTop={1}
      borderColor={"gray.950"}
      borderStyle={"solid"}
      mb={3}
      paddingTop={3}
    >
      <HStack justify={"space-between"}>
        <Stack textStyle="sm" gap="0">
          <Text fontWeight="medium" fontSize={"md"}>
            {project.description}
          </Text>
        </Stack>
        <AnimatePresence initial={false}>
          <Collapsible.Trigger
            cursor={"pointer"}
            size={"xs"}
            variant={"ghost"}
            rounded={"full"}
          >
            <motion.div
              key={isOpen ? "minus" : "plus"}
              initial={{ rotate: -90, opacity: 1 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {isOpen ? <LuSquareMinus /> : <LuSquarePlus />}
            </motion.div>
          </Collapsible.Trigger>
        </AnimatePresence>
      </HStack>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0 }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
          >
            <Collapsible.Content>
              <motion.div
                initial={{ height: 0 }}
                animate={{
                  height: "auto",
                  opacity: 1,
                }}
                transition={{ duration: 0.75, ease: "easeInOut" }}
              >
                <Stack mt={3}>
                  {project.reviews.map((review, index) => {
                    return <Text key={index}>{review}</Text>;
                  })}
                </Stack>
              </motion.div>
            </Collapsible.Content>
          </motion.div>
        )}
      </AnimatePresence>
    </Collapsible.Root>
  );
};

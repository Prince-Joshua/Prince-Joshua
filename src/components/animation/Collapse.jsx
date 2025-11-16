import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export const Collapse = ({ children, isOpen }) => {
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1, background: "red" }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 5, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

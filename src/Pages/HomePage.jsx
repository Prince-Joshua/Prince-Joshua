import ContactSection from "@/sections/ContactSection";
import SkillsSection from "@/sections/SkillsSection";
import { Container } from "@chakra-ui/react";
import React, { useEffect } from "react";
import HeroSession from "@/sections/HeroSection";
import ProjectsSection from "@/sections/ProjectSession";
import TestimonialSection from "@/sections/TestimonialSection";

export const HomePage = () => {
  useEffect(() => {
    window.history.pushState(null, "", window.location.href);

    const handlePopState = () => {
      window.history.pushState(null, "", window.location.href);
    };

    window.addEventListener("popstate", handlePopState);

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);
  return (
    <Container>
      <HeroSession />
      <SkillsSection />
      <ProjectsSection />
      <TestimonialSection />
      <ContactSection />
    </Container>
  );
};

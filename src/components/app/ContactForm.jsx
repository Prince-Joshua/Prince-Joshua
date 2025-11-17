import {
  Box,
  Button,
  Field,
  Input,
  Spinner,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { toaster } from "@/components/ui/toaster";
import { useForm, useFormState } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const MotionBox = motion.create(Box);
const MotionErrorText = motion.create(Field.ErrorText);

const ContactForm = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const [isSending, setIsSending] = useState(false);
  const [lastSent, setLastSent] = useState(0);
  const { register, handleSubmit, control, reset } = useForm();
  const { errors } = useFormState({ control });
  const navigate = useNavigate();

  const scrollToFirstError = () => {
    const firstError = document.querySelector("[aria-invalid='true']");
    if (firstError) {
      firstError.scrollIntoView({ behavior: "smooth", block: "center" });
      firstError.focus({ preventScroll: true });
    }
  };

  const onSubmit = async (data) => {
    const now = Date.now();

    // Rate limiting: 30 seconds
    if (now - lastSent < 30000) {
      toaster.create({
        title: "Slow down!",
        description: "Please wait 30 seconds before sending again.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });

      return;
    }

    // Honeypot check
    if (data.website) return;

    // const token = recaptchaRef.current?.getValue();
    // if (!token) {
    //   toaster.create({
    //     title: "Verification required",
    //     description: "Please confirm you are not a robot.",
    //     status: "warning",
    //     duration: 3000,
    //     isClosable: true,
    //   });
    //   return;
    // }

    // Check for validation errors
    if (Object.keys(errors).length > 0) {
      scrollToFirstError();
      return;
    }

    setIsSending(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: data.name.trim(),
          email: data.email.trim(),
          subject: data.subject.trim(),
          message: data.message.trim(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      // DEVELOPMENT MODE: just log the form data
      console.log("Form submitted:", data);

      // Show success toast for testing
      toaster.create({
        title: "Message sent!",
        description: "I'll get back to you soon.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });

      reset();
      // recaptchaRef.current.reset();
      setLastSent(now);

      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      console.error("Error:", error);
      toaster.create({
        title: "Failed to send message",
        description: "Please try again later.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } finally {
      setIsSending(false);
    }
  };

  // const recaptchaRef = useRef(null);

  const errorAnimation = {
    initial: { opacity: 0, y: -4, height: 0 },
    animate: { opacity: 1, y: 0, height: "auto" },
    exit: { opacity: 1, y: -4, height: 0 },
    transition: {
      opacity: { duration: 0.2, ease: "easeInOut" },
      height: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <MotionBox
      w="full"
      p={3}
      align="center"
      justify="center"
      maxW="3xl"
      mx="auto"
      borderRadius="2xl"
      boxShadow={"0 4px 20px rgba(0,0,0,0.3)"}
      initial="hidden"
      whileInView="visible"
      variants={fadeInUp}
      transition={{ delay: 0.3, duration: 0.7 }}
      layout
    >
      <VStack gap={5} as={"form"} onSubmit={handleSubmit(onSubmit)}>
        <Field.Root invalid={!!errors.name || ""}>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            placeholder="Your Name"
            variant="filled"
            bg="bg.surface"
            _focus={{ borderColor: "primary.default" }}
            {...register("name", { required: "Name is required" })}
          />
          <AnimatePresence mode="wait">
            {errors.name && (
              <MotionErrorText layout {...errorAnimation}>
                {errors.name.message}
              </MotionErrorText>
            )}
          </AnimatePresence>
          {/* 
          <Field.ErrorText>{errors.name?.message}</Field.ErrorText> */}
        </Field.Root>

        <Field.Root invalid={!!errors.email || ""}>
          <Input
            id="email"
            name="email"
            autoComplete="email"
            placeholder="Your Email"
            variant="filled"
            bg="bg.surface"
            _focus={{ borderColor: "primary.default" }}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
          />

          <AnimatePresence mode="wait">
            {errors.email && (
              <MotionErrorText layout {...errorAnimation}>
                {errors.email.message}
              </MotionErrorText>
            )}
          </AnimatePresence>
          {/* 
          <Field.ErrorText>{errors.email?.message}</Field.ErrorText> */}
        </Field.Root>

        <Field.Root invalid={!!errors.subject || ""}>
          <Input
            id="subject"
            name="subject"
            autoComplete="subject"
            placeholder="Subject"
            variant="filled"
            bg="bg.surface"
            _focus={{ borderColor: "primary.default" }}
            {...register("subject", { required: "Subject is required" })}
          />
          <AnimatePresence mode="wait">
            {errors.subject && (
              <MotionErrorText layout {...errorAnimation}>
                {errors.subject.message}
              </MotionErrorText>
            )}
          </AnimatePresence>
          {/* <Field.ErrorText>{errors.subject?.message}</Field.ErrorText> */}
        </Field.Root>

        <Field.Root invalid={!!errors.message || ""}>
          <Textarea
            id="message"
            name="message"
            autoComplete="message"
            placeholder="Your Message"
            variant="filled"
            bg="bg.surface"
            _focus={{ borderColor: "primary.default" }}
            {...register("message", { required: "Message is required" })}
          />
          <AnimatePresence mode="wait">
            {errors.message && (
              <MotionErrorText layout {...errorAnimation}>
                {errors.message.message}
              </MotionErrorText>
            )}
          </AnimatePresence>
          {/* <Field.ErrorText>{errors.message?.message}</Field.ErrorText> */}
        </Field.Root>

        <Input
          type="text"
          autoComplete="message"
          placeholder="Your website"
          style={{ display: "none" }}
          {...register("website")}
        />

        {/* reCAPTCHA */}
        {/* <ReCAPTCHA
          sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
          ref={recaptchaRef}
          onExpired={() => recaptchaRef.current?.reset()}
        /> */}

        <Button
          type="submit"
          size="lg"
          colorScheme="teal"
          bg="primary.default"
          _hover={{ bg: "primary.emphasized" }}
          width="full"
          isDisabled={isSending}
        >
          {isSending ? <Spinner size="sm" /> : "Send Message"}
        </Button>
      </VStack>
    </MotionBox>
  );
};

export default ContactForm;

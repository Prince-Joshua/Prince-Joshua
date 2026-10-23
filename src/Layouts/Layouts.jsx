import Header from "@/components/app/Header";
import PreLoader from "@/components/app/PreLoader";
import { ScrollToTop } from "@/components/app/ScrollToTop";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/app/Footer";

import { Box, Container } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

const Layouts = () => {
  const [Loading, setLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return Loading ? (
    <PreLoader />
  ) : (
    <Box>
      <Box minH={"fit-content"} flexGrow={1}>
        <Toaster />
        <Header />
        <ScrollToTop />
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default Layouts;

import { createBrowserRouter } from "react-router-dom";
import ProjectPage from "./Pages/ProjectPage";
import { NotFoundPage } from "./Pages/NotFoundPage";
import ContactPage from "./Pages/ContactPage";
import Layouts from "./Layouts/Layouts";
import SingleProjectPage from "./Pages/SingleProjectPage";

import AboutPage from "./Pages/AboutPage";
import { HomePage } from "./Pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },

      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "projects",
        element: <ProjectPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },

      {
        path: "project/:title/:id",
        element: <SingleProjectPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;

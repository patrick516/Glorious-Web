// src/routes/routes.tsx
import type { RouteObject } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

// Top-Level Pages
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import ProjectDetails from "../components/ProjectDetails";

// About Section
import AboutLayout from "../pages/About/AboutLayout";
import History from "../pages/About/History";
import Mission from "../pages/About/Mission";
import Staff from "../pages/About/Team/Staff";
import Board from "../pages/About/Team/Board";
import Partners from "../pages/About/Partners";
import Sustainability from "../pages/About/Sustainability";
import Media from "../pages/About/Media";
import Impact from "../pages/About/Impact";
import { Navigate } from "react-router-dom"; // <-- also required for the redirect

// Services Section
import ServicesLayout from "../pages/services/ServicesLayout";
import Services from "../pages/Services";
import Method from "../pages/services/Method";
import Programs from "../pages/services/Programs";
import Tree from "../pages/services/programs/Tree";
import MillionFarmTransformation from "../pages/services/Initiatives/MillionFarmTransformation";
import ClintonGlobalInitiative from "../pages/services/Initiatives/ClintonGlobalInitiative";
import Research from "../pages/services/Research";

// Get Involved Section
import GetInvolvedLayout from "../pages/get-involved/GetInvolvedLayout";
import GetInvolved from "../pages/get-involved";
import WaysToGive from "../pages/get-involved/WaysToGive";
import BecomeSustainer from "../pages/get-involved/BecomeSustainer";
import SignUp from "../pages/get-involved/SignUp";
import Events from "../pages/get-involved/Events";
import Employment from "../pages/get-involved/Employment";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "contact", element: <Contact /> },
      { path: "projects", element: <Projects /> },
      { path: "projects/:slug", element: <ProjectDetails /> },

      {
        path: "about",
        element: <AboutLayout />, // has sidebar + <Outlet />
        children: [
          { index: true, element: <Navigate to="history" replace /> }, // Redirect default to history
          { path: "history", element: <History /> },
          { path: "mission", element: <Mission /> },
          { path: "team/staff", element: <Staff /> },
          { path: "team/board", element: <Board /> },
          { path: "partners", element: <Partners /> },
          { path: "sustainability", element: <Sustainability /> },
          { path: "media", element: <Media /> },
          { path: "impact", element: <Impact /> },
        ],
      },

      {
        path: "services",
        element: <ServicesLayout />,
        children: [
          { index: true, element: <Services /> },
          { path: "method", element: <Method /> },
          { path: "programs", element: <Programs /> },
          { path: "programs/tree", element: <Tree /> },
          {
            path: "initiatives/million-farm-transformation",
            element: <MillionFarmTransformation />,
          },
          {
            path: "initiatives/clinton-global-initiative",
            element: <ClintonGlobalInitiative />,
          },
          { path: "research", element: <Research /> },
          { path: "tree", element: <Tree /> },
        ],
      },

      {
        path: "get-involved",
        element: <GetInvolvedLayout />,
        children: [
          { index: true, element: <GetInvolved /> },
          { path: "ways-to-give", element: <WaysToGive /> },
          { path: "become-sustainer", element: <BecomeSustainer /> },
          { path: "signup", element: <SignUp /> },
          { path: "events", element: <Events /> },
          { path: "employment", element: <Employment /> },
        ],
      },
    ],
  },
];

export default routes;

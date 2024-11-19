import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AnimePage from "./pages/AnimePage";
import MangaPage from "./pages/MangaPage";
import ForumPage from "./pages/ForumPage";
import MusicPage from "./pages/MusicPage";
import EventPage from "./pages/IndustryPage";
import IndustryPage from "./pages/IndustryPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/anime",
    element: <AnimePage />,
  },
  {
    path: "/manga",
    element: <MangaPage />,
  },
  {
    path: "/forum",
    element: <ForumPage />,
  },
  {
    path: "/music",
    element: <MusicPage />,
  },
  {
    path: "/events",
    element: <EventPage />,
  },
  {
    path: "/industry",
    element: <IndustryPage />,
  },
  {
    path: "/auth/login",
    element: <LoginPage />,
  },
  {
    path: "/auth/register",
    element: <RegisterPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);

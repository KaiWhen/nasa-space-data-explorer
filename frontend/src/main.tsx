import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home/index.tsx";
import NotFoundPage from "./pages/NotFound/index.tsx";
import MarsRoverPage from "./pages/MarsRover/index.tsx";
import InSightWeatherPage from "./pages/InSight/index.tsx";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/rover-photos", element: <MarsRoverPage /> },
  { path: "/insight", element: <InSightWeatherPage /> },
  { path: "*", element: <NotFoundPage /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

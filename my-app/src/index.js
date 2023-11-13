import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import Navbar from "./navbar";
import Books from "./book";
import ErrorPage from "./error-page";
import Toys from "./toy";
import Selling from "./selling";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Books />,
    errorElement: <ErrorPage />
  },

  {
    path: "/toy",
    element: <Toys />
  },
  {
    path: "/selling",
    element: <Selling />
  }
]);
root.render(
  <StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
// import Login from './pages/auth/Login.tsx'
import Layout from "@/layout";
import Login from "@/pages/auth/Login";
import Chat from "@/pages/Dashboard/chats";
import { Toaster } from "react-hot-toast";
import Friends from "./pages/Dashboard/friends/Friends";
import Request from "./pages/Dashboard/request/Request";
import Trash from "./pages/Dashboard/trash/Trash";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  {
    path: "/dashboard",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Chat />,
      },
      {
        path: "chats",
        element: <Chat />,
      },
      {
        path: "friends",
        element: <Friends />,
      },
      {
        path: "request",
        element: <Request />,
      },
       {
        path: "trash",
        element: <Trash />,
      }
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster position="top-right" />
    <RouterProvider router={router} />
  </StrictMode>
);

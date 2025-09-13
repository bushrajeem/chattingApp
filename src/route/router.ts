import Layout from "@/layout";
import Login from "@/pages/auth/Login";
import Chat from "@/pages/Dashboard/chats";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  { path: "/", Component: Login },
  {
    path: "/dashboard",
    Component: Layout,
    children: [
    {
      path: "chats",
      Component: Chat
    }
    ]
    
  },
]);

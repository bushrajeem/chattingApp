import {
  ArchiveX,
  Inbox,
  PersonStanding,
  Send,
  Trash2
} from "lucide-react";

export const SidebarMenuList = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Inbox",
      url: "/dashboard/",
      icon: Inbox,
      isActive: true,
    },
    {
      title: "Friends",
      url: "/dashboard/friends",
      icon: PersonStanding,
      isActive: false,
    },
    {
      title: "Sent",
      url: "/dashboard/chats",
      icon: Send,
      isActive: false,
    },
    {
      title: "Request",
      url: "/dashboard/request",
      icon: ArchiveX,
      isActive: false,
    },
    {
      title: "Trash",
      url: "/dashboard/trash",
      icon: Trash2,
      isActive: false,
    },
  ],
};

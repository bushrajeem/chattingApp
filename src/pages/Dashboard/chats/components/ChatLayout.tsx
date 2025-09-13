import type React from "react";
import ChatSidebar from "./ChatSidebar";

function ChatLayout({ children }: { children: React.ReactNode }) {
  return <div className="flex">
    <ChatSidebar>hello</ChatSidebar>
    {children}
    </div>;
}

export default ChatLayout;

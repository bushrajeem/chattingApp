import { SidebarProvider } from "@/components/ui/sidebar";
import type React from "react";
import ChatSidebar from "./ChatSidebar";

function ChatLayout({ children, selectedfriend }: { children: React.ReactNode, selectedFriend: string }) {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <SidebarProvider
        style={
          {
            "--sidebar-width": "350px",
          } as React.CSSProperties
        }
        className="flex h-full w-full" 
      >
        <ChatSidebar>
          <div className="p-2">{selectedfriend
              ? `Selected Friend: ${selectedfriend}`
              : "No friend selected"}</div>
        </ChatSidebar>
        <div className="flex-1 h-full overflow-auto w-fit">
          {children}
        </div>
      </SidebarProvider>
    </div>
  );
}


export default ChatLayout;

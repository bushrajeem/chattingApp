import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInput,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { Switch } from "@/components/ui/switch";
import { SidebarMenuList } from "@/SidebarMenuList";
import React, { useState } from "react";
import ConvoDialog from "./ConvoDialog";

function ChatSidebar({ children }: { children: React.ReactNode }) {
  const [activeItem, setActiveItem] = useState(SidebarMenuList.navMain[0]);
  // const [mails, setMails] = useState(mails);

  return (
    <div className="shadow-lg h-screen">
      <SidebarProvider>
        <Sidebar collapsible="none" className="hidden flex-1 md:flex">
          <SidebarHeader className="gap-3.5 border-b p-4">
            <div className="flex w-full items-center justify-between">
              <div className="text-foreground text-base font-medium">
                {activeItem?.title}
              </div>
              <Label className="flex items-center gap-2 text-sm">
                <span>Unreads</span>
                <Switch className="shadow-none" />
              </Label>

            </div>
            <div className="flex gap-4">
              <SidebarInput placeholder="Type to search..." />
              <ConvoDialog />
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup className="px-0">
              <SidebarGroupContent>{children}</SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </SidebarProvider>
    </div>
  );
}

export default ChatSidebar;

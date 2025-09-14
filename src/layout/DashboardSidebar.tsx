import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { SidebarMenuList } from "@/SidebarMenuList";
import { Command } from "lucide-react";

import React from "react";
import { Link } from "react-router-dom";

function DashboardSidebar() {
  const [activeItem, setActiveItem] = React.useState(
    SidebarMenuList.navMain[0]
  );
  const { setOpen } = useSidebar();

  return (
      <Sidebar
        collapsible="none"
        className="w-[calc(var(--sidebar-width-icon)+1px)]! border-r"
      >
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild className="md:h-8 md:p-0">
                <a href="#">
                  <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                    <Command className="size-4" />
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">Acme Inc</span>
                    <span className="truncate text-xs">Enterprise</span>
                  </div>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent className="px-1.5 md:px-0">
              <SidebarMenu>
                {SidebarMenuList.navMain.map((item) => (
                  <Link to={item.url}>
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        onClick={() => {
                          setActiveItem(item);
                          setOpen(true);
                        }}
                        tooltip={{
                          children: item.title,
                          hidden: false,
                        }}
                        isActive={activeItem?.title === item.title}
                      >
                        <item.icon />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </Link>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <NavUser user={SidebarMenuList.user} />
        </SidebarFooter>
      </Sidebar>
  );
}

export default DashboardSidebar;

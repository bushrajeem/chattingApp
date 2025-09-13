import { SidebarProvider } from '@/components/ui/sidebar'
import { Outlet } from "react-router-dom"
import DashboardSidebar from "./DashboardSidebar"


function Layout() {
  return (
       <SidebarProvider
      style={
        {
          "--sidebar-width": "350px",
        } as React.CSSProperties
      }
    >
      <div className="flex">
        <DashboardSidebar />
        <Outlet />
      </div>
    </SidebarProvider>
  )
}

export default Layout

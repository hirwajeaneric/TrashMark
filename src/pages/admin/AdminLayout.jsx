import { Outlet } from "react-router-dom"
import SideMenu from "../../components/admin/SideMenu"
import TopNavigation from "../../components/admin/TopNavigation"

const AdminLayout = () => {
  return (
    <div className="flex h-screen relative">
      <SideMenu />
      <div className="flex flex-col flex-1 w-full md:w-1/6 relative">
        <TopNavigation />
        <div className="flex p-4">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AdminLayout
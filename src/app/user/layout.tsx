import { SidebarProvider } from "@/components/ui/sidebar"
import UserHeader from "@/components/UserHeader"
import UserSidebar from "@/components/UserSidebar"
import AuthContextProvider from "@/context/AuthContext"

function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthContextProvider>
      <SidebarProvider className="bg-[#F2F4F8]">
        <UserHeader />
        <UserSidebar />
        <section className="w-full px-4 pb-4 lg:pb-8 lg:px-8 py-40 md:py-28">
          {children}
        </section>
      </SidebarProvider>
    </AuthContextProvider>
  )
}

export default UserLayout
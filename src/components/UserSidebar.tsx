"use client";

import { Home, Inbox, LogOut, Database, Send, Users, User, Download, ChevronRight } from "lucide-react"
 
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

import Image from "next/image"
import Link from "next/link"
import GoogleTranslate from "./GoogleTranslate";
import { signOut } from "@/lib/actions/user.actions";
import { useAuthContext } from "@/context/AuthContext";

function UserSidebar() {
  const accountItems = [
    {
      title: "Home",
      url: "/user/dashboard",
      icon: Home,
    },
    {
      title: "Account History",
      url: "/user/dashboard",
      icon: Inbox,
      items: [
        {
          title: "Investment History",
          url: "/user/investment_history",
        },
        {
          title: "Withdrawal History",
          url: "/user/withdrawal_history",
        }
      ]
    }
  ]

  const investAndWithdrawItems = [
    {
      title: "Make an Investment",
      url: "/user/invest",
      icon: Database,
    },
    {
      title: "Make a Withdraw",
      url: "/user/withdraw",
      icon: Send,
    }
  ]

  const userItems = [
    {
      title: "Referrals",
      url: "/user/referrals",
      icon: Users,
    },
    {
      title: "Profile",
      url: "/user/profile",
      icon: Download,
    },
    {
      title: "KYC",
      url: "/user/kyc",
      icon: User,
    }
  ]

  const { user } = useAuthContext()

  return (
    <>  
      <div className="hidden md:block lg:hidden pl-20">
        <div className="w-20 bg-green fixed bottom-0 left-0 top-24 md:top-[84px]">
          <Link href="/" className="hidden md:block border-b border-gray-700 w-full">
            <Image 
              src="/images/logo-white.png"
              alt="user profile"
              width={200}
              height={0}
              className="pt-3 pb-1.5"
            />
          </Link>
          
          <div className="py-4 md:py-2 border-b border-gray-500">
            <Image 
              src={user?.profilePicUrl || "/images/profile-placeholder.jpg"}
              alt="user profile"
              width={40}
              height={40}
              className="rounded-full border border-[#262626] mx-auto"
            />
          </div>

          <ul className="flex flex-col justify-center items-center">
            {[...accountItems, ...investAndWithdrawItems, ...userItems].map((item) => {
              return (
                <li 
                  key={item.title}
                  className="py-4 px-[5px] border-b-[0.5px] w-full flex justify-center items-center border-gray-500"
                >
                  <Link href={item.url}>
                    <item.icon size={20} color="#babed0" />
                  </Link>
                </li>
              )
            })}

            <li 
              className="py-5 px-[5px] border-b border-gray-500 w-full flex justify-center items-center"
            >
              <button onClick={signOut}>
                <LogOut size={20} color="#babed0" />
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="hidden lg:block">
        <Sidebar className="hidden md:hidden lg:block bg-[#F2F4F8]">
          <SidebarHeader className="bg-[#F2F4F8] border-b">
            <div className="flex gap-2 justify-center items-center">
              <Image 
                src={user?.profilePicUrl || "/images/profile-placeholder.jpg"}
                alt="user profile"
                width={50}
                height={50}
                className="rounded-full border border-[#262626]"
              />

              <div>
                <p className="capitalize">{user?.name}</p>
                <p className="text-[0.63rem] uppercase text-[#00000066]">
                  {user?.username}
                </p>
              </div>
            </div>
          </SidebarHeader>

          <SidebarHeader className="bg-[#F2F4F8] border-b">
            <div className="text-[14.4px] text-[#3E4B5B] py-2.5">
              <p>Date: Wednesday 22nd of January 2025</p>
              <p>Time: 16:22pm UTC</p>
            </div>
          </SidebarHeader>

          <SidebarContent className="bg-[#F2F4F8]">
            <SidebarGroup>
              <SidebarGroupLabel className="py-2.5 text-green">ACCOUNT</SidebarGroupLabel>
              <SidebarGroupContent className="pl-3">
                <SidebarMenu>
                  {accountItems.map((item, index) => {
                    return index === 0
                      ? (
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton asChild>
                            <Link href={item.url}>
                              <item.icon color="#08a" />
                              <span className="py-[7px] pl-2">{item.title}</span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ): (
                        <Collapsible
                          key={item.title}
                          asChild
                          className="group/collapsible"
                        >
                          <SidebarMenuItem>
                            <CollapsibleTrigger asChild>
                              <SidebarMenuButton tooltip={item.title}>
                                {item.icon && <item.icon color="#08a" />}
                                <span>{item.title}</span>
                                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                              </SidebarMenuButton>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                              <SidebarMenuSub>
                                {item.items?.map((subItem) => (
                                  <SidebarMenuSubItem className="pl-2" key={subItem.title}>
                                    <SidebarMenuSubButton asChild>
                                      <Link href={subItem.url}>
                                        <span>{subItem.title}</span>
                                      </Link>
                                    </SidebarMenuSubButton>
                                  </SidebarMenuSubItem>
                                ))}
                              </SidebarMenuSub>
                            </CollapsibleContent>
                          </SidebarMenuItem>
                        </Collapsible>
                      )
                  })}
                </SidebarMenu>
              </SidebarGroupContent>

              <SidebarGroupLabel className="py-2.5 text-green">INVEST & WITHDRAW</SidebarGroupLabel>
              <SidebarGroupContent className="pl-3">
                <SidebarMenu>
                  {investAndWithdrawItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <Link href={item.url}>
                          <item.icon color="#08a" />
                          <span className="py-[7px] pl-2">{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>

              <SidebarGroupLabel className="py-2.5 text-green">USER</SidebarGroupLabel>
              <SidebarGroupContent className="pl-3">
                <SidebarMenu>
                  {userItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <Link href={item.url}>
                          <item.icon color="#08a" />
                          <span className="py-[7px] pl-2">{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>

              <SidebarGroupLabel className="py-2.5 text-green">AUTHENTICATION</SidebarGroupLabel>
              <SidebarGroupContent className="pl-3">
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <button onClick={signOut}>
                        <LogOut color="#08a" />
                        <span className="py-[7px] pl-2">Logout</span>
                      </button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="py-1 gap-1">
            <GoogleTranslate />
            <p className="text-[10px] text-light">Powered by</p>
            <Link href="https://translate.google.com" className="pl-2 flex items-center gap-1">
              <Image 
                src="/images/google-logo.png"
                alt="google logo"
                width={35}
                height={0}
              />

              <p className="text-xs font-semibold">Translate</p>
            </Link>
          </SidebarFooter>
        </Sidebar>
      </div>
    </>
  )
}

export default UserSidebar
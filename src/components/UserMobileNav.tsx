"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronRight, Database, Download, Home, Inbox, LogOut, Send, User, Users } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/AuthContext";
import { signOut } from "@/lib/actions/user.actions";

function UserMobileNav() {
  const router = useRouter();

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
    <Sheet>
      <div className="pt-5 w-full px-4 md:hidden mr-2 flex justify-between items-center">
        <Image 
          src="/images/logo-white.png"
          alt="logo"
          width={100}
          height={0}
          className="w-[100px] -ml-8 cursor-pointer"
          onClick={() => router.push("/")}
        />

        <SheetTrigger>
          <Image 
            src="/icons/hamburger.png"
            alt="hamburger icon"
            width={20}
            height={20}
          />
        </SheetTrigger>
      </div>
      <SheetContent 
        className="bg-green py-0 px-0"
        side="top"
      >
        <SheetHeader>
          <SheetTitle className="px-10 py-4 flex justify-start items-center gap-4 border-b border-gray-500 mb-2">
            <Image 
              src={user?.profilePicUrl || "/images/profile-placeholder.jpg"}
              alt="logo"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full"
            />

            <div className="flex flex-col items-start">
              <h1 className="text-[14px] font-bold text-white">Chetachi Ogbonna</h1>
              <p className="text-xs text-[#FFFFFF66]">Chetachi909</p>
            </div>
          </SheetTitle>
        </SheetHeader>
        
        <ul className="flex flex-col gap-5 pb-5">
          {[...accountItems, ...investAndWithdrawItems, ...userItems].map((item) => {
            return item.title === "Account History"
              ? (
                <Collapsible
                  key={item.title + crypto.randomUUID()}
                  asChild
                  className="group/collapsible"
                >
                  <div className="border-b border-gray-500">
                    <CollapsibleTrigger asChild>
                      <div title={item.title} className="px-10 w-full flex gap-5 items-center py-1 cursor-pointer">
                        {item.icon && <item.icon size={30} color="#babed0" />}
                        <span className="text-sm text-white">{item.title}</span>
                        <ChevronRight color="white" className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SheetClose 
                        className="pl-28 w-full flex flex-col gap-5 items-start py-1 justify-start"
                        onClick={() => router.push("/user/investment_history")}
                      >
                        <li 
                          className="text-xs text-white list-disc"
                          >
                          Investment History
                        </li>
                      </SheetClose>
                      <SheetClose 
                        className="pl-28 w-full flex flex-col gap-5 items-start py-1 justify-start"
                        onClick={() => router.push("/user/withdrawal_history")}
                      >
                        <li 
                          className="text-xs text-white list-disc"
                        >
                          Withdrawal History
                        </li>
                      </SheetClose>
                    </CollapsibleContent>
                  </div>
                </Collapsible>
              ): (
                <SheetClose 
                  key={item.title + crypto.randomUUID()}
                  className="px-10 w-full flex gap-5 items-center py-1 border-b border-gray-500"
                  onClick={() => router.push(item.url)}
                >
                  <item.icon size={30} color="#babed0" />
                  <li 
                    className="text-sm text-white"
                  >
                    {item.title}
                  </li>
                </SheetClose>
              )
          })}

          <SheetClose 
            className="px-10 w-full flex gap-5 items-center"
            onClick={signOut}
          >
            <LogOut size={30} color="#babed0" />
            <li 
              className="text-sm text-white"
            >
              Logout
            </li>
          </SheetClose>
        </ul>
      </SheetContent>
    </Sheet>
  )
}

export default UserMobileNav
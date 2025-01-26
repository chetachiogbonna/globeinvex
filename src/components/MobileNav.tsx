import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet"
import { navLinks } from "@/constants"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation";

function MobileNav() {
  const pathname = usePathname();
  const router = useRouter();
  
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden mr-2">
        <Image 
          src="/icons/hamburger.png"
          alt="hamburger icon"
          width={30}
          height={30}
        />
      </SheetTrigger>
      <SheetContent 
        className="py-0 px-0"
        side="right"
      >
        <SheetHeader>
          <SheetTitle className="mb-10">
            <Image 
              src="/images/GlobalInvestB.png"
              alt="logo"
              width="100"
              height="100"
              className="w-[300px] -ml-8"
            />
          </SheetTitle>
        </SheetHeader>
        
        <ul>
          {navLinks.map(({ name, route }) => {
            const isActive = pathname === route || pathname.startsWith(`/${route}`);

            return (
              <SheetClose 
                key={name}
                className="block w-full text-left"
                onClick={() => router.push(route)}
              >
                <li 
                  className={`text-[16px] font-semibold py-[14px] px-[20px] text-nowrap ${isActive && "text-green"} hover:text-green transition-colors duration-500 border-t last:border-t-[-1px] last:border-b py-[14px] px-[20px]`}
                >
                  {name}
                </li>
              </SheetClose>
            )
          })}
        </ul>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
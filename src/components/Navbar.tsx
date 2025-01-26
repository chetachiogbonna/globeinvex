"use client";

import { navLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import MobileNav from './MobileNav';

function Navbar() {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 bg-[#E3E7EB] z-10">
      <div className="max-w-screen-xl mx-auto lg:px-16 xl:px-20 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/images/GlobalInvestB.png"
            alt="logo"
            width="100"
            height="0"
            className="w-[300px]"
          />
        </Link>

        <MobileNav />

        <ul className="hidden lg:flex justify-center items-center lg:gap-8 xl:gap-12">
          {navLinks.map(({ name, route }) => {
            const isActive = pathname === route || pathname.startsWith(`/${route}`);

            return (
              <li key={name} className="py-9">
                <Link 
                  className={`text-[16px] font-semibold text-nowrap ${isActive && "text-green"} hover:text-green transition-colors duration-500`}
                  href={route}
                >
                  {name}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
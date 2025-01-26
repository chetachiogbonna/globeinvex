import { Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import UserMobileNav from './UserMobileNav'

function UserHeader() {
  return (
    <header className="w-full text-white fixed z-50 bg-green py-2 md:py-5 px-2 lg:px-14">
      <div className="flex justify-between items-center">
        <Link href="/" className="hidden lg:block">
          <Image 
            src="/images/logo-white.png"
            alt="logo"
            width={200}
            height="0"
            className="w-[200px]"
          />
        </Link>

        <div className="w-full flex flex-col md:flex-row justify-between gap-1">
          <div className="flex justify-start md:justify-center items-center gap-4">
            <Image 
              src="/images/card1.png"
              alt="card"
              width={50}
              height={30}
              className="rounded h-[30px]"
            />

            <div>
              <h2 className="text-[0.99rem] font-semibold mb-[3px]">Global Invest</h2>
              <p
                className="text-[0.72rem] text-[#FFFFFF99] text-nowrap"
              >
                Available Balance: <span className="text-[#F6DB77] font-semibold ml-[5px]">$0</span>
              </p>
            </div>
          </div>

          <div className="flex justify-end md:justify-center gap-5">
            <div className="bg-[#00000033] flex items-center py-1.5 px-2 gap-2 rounded-full">
              <Search color="#cac8c8" />
              <input 
                type="text" 
                readOnly 
                value="Welcome Chetachi Ogbonna"  
                className="bg-transparent outline-none pl-1 pr-3 text-[14px]" 
              />
            </div>

            <Image 
              src="/images/profile-placeholder.jpg"
              alt="user profile"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
        </div>
      </div>

      <UserMobileNav />
    </header>
  )
}

export default UserHeader
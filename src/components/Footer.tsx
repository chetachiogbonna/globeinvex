import { footerLinks } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"

function Footer() {
  return (
    <footer className="max-w-screen-xl mx-auto px-2 lg:px-12 pt-[75px] pb-[65px]">
      <div className="grid grid-cols-1 footer-grid lg:grid-cols-[1fr,1fr,2fr]">
        <div>
          <Image 
            src="/images/GlobalInvestB.png"
            alt="logo"
            width="100"
            height="100"
            className="w-[400px]"
          />

          <div className="text-[14px] text-[#999] flex flex-col">
            REACH OUT TO US
            <Link className="text-[16px] text-black" href="mailto:admin@globeinvex.com">
              Admin@Globeinvex.Com
            </Link>
          </div>
        </div>

        <div className="px-3 mb-8">
          <h5 className="py-[25px] text-[20px] font-semibold">Company</h5>

          <ul>
            {footerLinks.map(({ name, route }) => {
              return (
                <li key={route} className="mb-2">
                  <Link className="text-[14px] text-light" href={route}>{name}</Link>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="px-3 mb-8">
          <h5 className="py-[25px] text-[20px] font-semibold">Our Newsletter</h5>

          <p className="text-[14px] mb-[15px] text-light">
            Subscribe to our newsletter and we will inform you about latest updates and offers
          </p>

          <div className="border rounded-sm flex items-center">
            <input 
              type="email" 
              className="flex-1 w-[90%] py-2.5 pr-10 pl-5 outline-none"
              placeholder="Email Address..."
            />

            <button
              className="w-[10%] flex justify-center items-center"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
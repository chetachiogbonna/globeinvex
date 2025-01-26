"use client";

import { cn } from '@/lib/utils';
import Image from 'next/image'
import { usePathname } from 'next/navigation'

function AboutGlobalInvestment() {
  const pathname = usePathname()

  return (
    <div className="px-2 lg:px-12">
      <div className={cn("py-[100px] flex flex-col lg:flex-row justify-center items-center gap-10", { "border-b-[1.5px]": pathname === "/" })}>
        <div className="w-full md:w-[605px] lg:w-1/2">
          <Image 
            src="/images/home-about.png"
            alt="home about image"
            width="100"
            height="100"
            className="w-full h-auto"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <div className="text-[14px] uppercase text-light">about global investment</div>

          <h2 className="section-header lg:text-[48px] mt-[15px]">
            <span className="font-bold text-green">Global Invest:</span> Your Partner in Financial Success
          </h2>
          
          <div className="mb-[85px] text-[14px] text-light leading-[1.9em]">
            <p className="mb-5">
              When it comes to securing your financial future, Global Invest stands out as a trusted ally. Our commitment to excellence, backed by a team of seasoned experts, ensures your investments are in capable hands. We offer a diverse range of investment opportunities, from stocks and bonds to real estate and commodities, all designed to align with your unique financial goals and risk tolerance.
            </p>

            <p>
              With a global perspective and local expertise, Global Invest delivers tailored investment strategies that empower you to navigate the ever-changing financial landscape. Take the first step towards    financial success – choose Global Invest and watch your wealth grow.
            </p>
          </div>

          <div className="italic text-[30px]">
            Daniel
            <span className="uppercase text-[14px] mt-2.5 block not-italic">
              Daniel jr
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutGlobalInvestment
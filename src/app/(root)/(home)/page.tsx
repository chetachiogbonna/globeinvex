import AboutGlobalInvestment from "@/components/AboutGlobalInvestment";
import ClientsSlider from "@/components/ClientsSlider";
import OurServices from "@/components/OurServices";
import OurTeam from "@/components/OurTeam";
import TestimonialSection from "@/components/TestimonialSection";
import { ourBlogSectionDetails, serviceDetails } from "@/constants";
import { cn } from "@/lib/utils";
import { ShieldHalf } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Home() {
  return (
    <section>
      <div className="w-full bg-[#E3E7EB] px-2 lg:px-12 bg-background-image">
        <div className="py-36 static max-w-screen-xl mx-auto w-full">
          <div className="mb-10">
            <div className="text-[16px] text-[#666]">GLOBAL INVEST</div>

            <div className="flex">
              <div className="w-full md:w-[65%]">
                <h1 className="mt-[15px] leading-[1.1em] mb-[.5rem] font-work-sans section-header lg:text-[48px]">
                  <span className="text-green font-semibold">Invest</span> Smart and Grow Your Wealth
                </h1>

                <p className="mt-10 mb-8 leading-[1.8em] font-normal text-[18px] text-[#666] font-work-sans text">
                  Investing is a journey that can lead to financial independence, <br /> security, and prosperity. However, it&apos;s not just about throwing your <br /> money into the market and hoping for the best. Smart investing <br /> requires careful planning, discipline, and long-term perspective.
                </p>
              </div>

              <div className="hidden lg:w-[35%]" />
            </div>
          </div>

          <Link href="user/dashboard" className="uppercase bg-green rounded-[2px] text-[16px] text-white font-semibold px-8 py-5">Access Account</Link>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto">
        <AboutGlobalInvestment />

        <div className="py-[100px] px-2 lg:px-12">
          <div className="">
            <div className="mb-[50px]">
              <div className="text-light text-[14px] uppercase">our services</div>

              <h2 className="section-header lg:text-[48px] mt-[15px]">
                <span className="text-green font-bold">
                  Best Solution 
                </span> For Your Business
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border">
              {serviceDetails.map(({ title, description }) => {
                return (
                  <div
                    key={title}
                    className="py-[45px] pr-[25px] pl-[35px] border"
                  >
                    <div>
                      <ShieldHalf size={60} />
                    </div>

                    <h3 className="mt-[30px] mb-[15px] font-bold">
                      <Link href="service-detail" className="text-5">{title}</Link>
                    </h3>

                    <p className="mb-5 text-[16px] text-light">{description}</p>

                    <Link 
                      href="service-detail"
                      className="uppercase text-[14px] text-[#777]"
                    >
                      more &gt;
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <TestimonialSection />

        <ClientsSlider repeat={true} />

        <OurServices selectOptions={false} />

        <OurTeam />

        <div className="px-2 lg:px-12 py-[100px] bg-[#E3E7EB]">
          <div className="mb-[50px]">
            <div className="text-[14px] uppercase text-light">our blog</div>

            <h2 className="section-header lg:text-[48px] mt-[15px]">
              <span className="font-bold text-green">
                Latest
              </span> From Our Press
            </h2>
          </div>

          <div className="grid grid-cols-1 our-blog-section-grid lg:grid-cols-3">
            {ourBlogSectionDetails.map(({ image, title, description, date }) => {
              return (
                <div
                  key={title}
                  className={cn("flex flex-col our-blog-section-flex lg:flex-col" )}
                >
                  <Image 
                    src={image}
                    alt={description}
                    width={100}
                    height={100}
                    className="w-full h-auto lg:w-full"
                  />

                  <div className="bg-white pt-[62px] px-[15px] pb-[60px] flex flex-col justify-stretch items-center text-wrapper lg:w-full">
                    <div className="text-[14px] text-light uppercase text-center">{title}</div>

                    <div className="text-[22px] mt-[18px] mb-[35px] font-semibold w-full text-center">{description}</div>

                    <div className="text-light text-[14px] text-nowrap text-center">
                      {date} <span className="text-black">Admin</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="w-full h-[500px]">
          <iframe 
            className="w-full h-full border-none"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2136.986005919501!2d-73.9685579655238!3d40.75862446708152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258e4a1c884e5%3A0x24fe1071086b36d5!2sThe%20Atrium!5e0!3m2!1sen!2sbd!4v1585132512970!5m2!1sen!2sbd"
          />
        </div>
      </div>
    </section>
  );
}

export default Home
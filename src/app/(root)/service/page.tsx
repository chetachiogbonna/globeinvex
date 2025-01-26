import ClientsSlider from '@/components/ClientsSlider'
import OurServices from '@/components/OurServices'
import TestimonialSection from '@/components/TestimonialSection'
import { aboutOurServices } from '@/constants'
import Link from 'next/link'

function Service() {
  return (
    <section>
      <div className="w-full bg-[#E3E7EB] px-2 lg:px-12 bg-background-image">
        <div className="py-36 static max-w-screen-xl mx-auto w-full">
          <div className="mb-10">
            <h2 className="section-header lg:text-[48px] mt-[15px] text-[#666]">
              Our <span className="text-green font-bold">Services</span>
            </h2>

            <div className="flex">
              <div className="w-full md:w-[65%]">
                <p className="mt-10 mb-8 leading-[1.8em] font-normal text-[18px] text-[#666] font-work-sans ">
                  Globe Invest, your trusted partner in the world of finance, offers a wide range of services to cater to your investment needs. From expert financial advising to tailor-made portfolio management, we&apos;re here to help you navigate the complex world of investments. Grow your wealth with Globe Invest today.
                </p>
              </div>

              <div className="hidden lg:w-[35%]" />
            </div>
          </div>

          <Link href="contact" className="uppercase bg-green rounded-[2px] text-[16px] text-white font-semibold px-8 py-5">Get In Touch</Link>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto">
        <div className="px-2 py-[80px] about-our-services-container">
          <ul className="flex flex-col gap-6">
            {aboutOurServices.map(({ header, description }) => {
              return (
                <li key={header} className="about-our-services-li">
                  <div className="about-our-services-div">
                    <h3 className="text-[30px] text-[#777]">{header}</h3>

                    <p className="text-[14px] mb-4 leading-[1.8em] text-[#777]">
                      {description}
                    </p>
                  </div>

                  <div className="space-occupier" />
                </li>
              )
            })}
          </ul>
        </div>

        <OurServices selectOptions={true} />

        <TestimonialSection />

        <div className="px-2 lg:px-12 pt-[40px] pb-[70px]">
          <div className="flex flex-col gap-[10px]">
            <h2 className="uppercase text-green text-[30px]">our patner</h2>

            <ClientsSlider repeat={false} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service
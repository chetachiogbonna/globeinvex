import React from 'react'

function TestimonialSection() {
  return (
    <div className="py-[90px] px-2 lg:px-12">
      <div>
        <div className="mb-10">
          <div className="uppercase text-light">testimonials</div>

          <h2 className="section-header lg:text-[48px] mt-[15px]">
            <span className="text-green font-bold">+2,000 Clients</span> Love Us
          </h2>
        </div>

        <div className="grid grid-col-1 sm:grid-cols-2 gap-10">
          <div className="p-[45px] border border-gray-300">
            <div className="after:content-['\efce'] after:flex after:justify-end after:font-bold" />
            <div>
              <div className="text-[18px] mt-1 font-semibold">Ryan T.</div>
              <p className="mt-5 text-[14px] text-light leading-[1.8em]">
                &quot;I&apos;ve entrusted my financial future to Global Invest for years, and I couldn&apos;t be happier. Their expert guidance and diverse investment options have helped me achieve my goals. I sleep soundly at night knowing my money is in capable hands.&quot;
              </p>
            </div>
          </div>
          <div className="p-[45px] border border-gray-300">
            <div className="after:content-['\20DC'] after:flex after:justify-end" />
            <div>
              <div className="text-[18px] mt-1 font-semibold">John M.</div>
              <p className="mt-5 text-[14px] text-light leading-[1.8em]">
                &quot;Global Invest turned my investments around. They carefully tailored a portfolio that matched my risk tolerance, and it&apos;s been a game-changer. I&apos;m grateful for their exceptional service and commitment to my financial growth.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialSection
import OurServicesForm from './OurServicesForm'

function OurServices({ selectOptions }: { selectOptions: boolean }) {
  return (
    <div className="px-2 lg:px-12 pt-[100px] pb-[60px] flex flex-col-reverse lg:flex-row gap-10 bg-[#F8F6F7]">
      <div className="flex flex-col-reverse lg:flex-row justify-center items-start gap-10">
        <OurServicesForm selectOptions={selectOptions} />

        <div className="w-full lg:w-1/2">
          <div className="mb-[50px]">
            <div className="text-[14px] uppercase text-light">why choose us</div>

            <h2 className="section-header lg:text-[48px] mt-[15px]">
              <span className="font-bold text-green">Your Success</span> Is Our Mission
            </h2>
          </div>
          
          <div className="mb-[85px] text-[14px] leading-[1.9em]">
            <div>
              <h4 className="text-[20px] font-semibold">Expertise & Guidance:</h4>

              <p className="mt-[15px] mb-5 text-[16px] text-[#999]">
                At Globe Invest, we bring years of financial wisdom to the table. Our team of seasoned professionals possesses a deep understanding of diverse investment avenues. We provide you with personalized, expert guidance, ensuring your investments align with your unique financial goals.
              </p>
            </div>

            <div>
              <h4 className="text-[20px] font-semibold">Trust & Transparency:</h4>

              <p className="mt-[15px] mb-5 text-[16px] text-[#999]">
                Trust is at the heart of our business. Globe Invest values transparency and integrity in every interaction. We prioritize your financial security, adhering to stringent ethical standards. With us, you can rest assured that your investments are in trustworthy hands, forging a lasting partnership built on confidence and integrity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurServices
import Link from 'next/link'
import React from 'react'

function Contact() {
  return (
    <section className="bg-[#EEF1F3]">
      <div className="w-full h-[400px] relative">
        <iframe 
          className="w-full h-full border-none"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2136.986005919501!2d-73.9685579655238!3d40.75862446708152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258e4a1c884e5%3A0x24fe1071086b36d5!2sThe%20Atrium!5e0!3m2!1sen!2sbd!4v1585132512970!5m2!1sen!2sbd"
        />
      </div>

      <div className="max-w-screen-xl mx-auto">
        <div className="pb-[80px]">
          <div className="px-2 lg:px-12 pb-[100px] text-white relative">
            <div className="-mt-[80px] pt-[90px] px-[30px] pb-[95px] bg-green mx-auto">
              <div className="grid grid-cols-1 gap-x-9 gap-y-3 items-center contact-box">
                <div>
                  <h2 className="text-[36px] mb-3 leading-[1.3em] font-light text-white">
                    Brooklyn, <span className="font-bold">New York</span>
                  </h2>

                  <div className="text-[16px] text-white leading-[1.8em]">
                    <p>849 Diamond Str, 07th Floor, NY 10012, New York,</p>
                    <p>United State America</p>
                  </div>

                  <div className="text-nowrap mt-7 font-semibold text-[16px]">
                    Email: <Link href="mailto:admin@globeinvex.com" className="font-normal text-[#B3D1C2]">admin@globeinvex.com</Link>
                  </div>
                </div>

                <div>
                  <div className="mb-8 text-[16px]">
                    <h3 className="font-semibold">Branch Offices:</h3>
                    <p className="text-[#B3D1C2]">Allentown PA | Allanta, GA | Chicago, IL | Dallas, TX,
                    Edison, NJ | Houston, TX</p>
                  </div>

                  <div className="text-[16px]">
                    <h3 className="font-semibold">Work Hours:</h3>
                    <p className="text-[#B3D1C2]">Mon - Sat: 8.00 - 17.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-2 lg:px-12">
            <div className="mb-[50px]">
              <div className="text-[14px] uppercase text-light text-center">contact us</div>

              <h2 className="section-header lg:text-[48px] mt-[15px] text-center">
                We Always Here <span className="font-bold text-green">
                  To Help You
                </span>
              </h2>
            </div>
          </div>

          <div className="px-2 lg:px-12">
            <form className="bg-white pt-[45px] px-[50px] pb-[35px] flex flex-col gap-10">
              <div className="grid grid-cols-1 gap-6 contact-form-first-div">
                <input 
                  type="text" 
                  placeholder="Name *"
                  className="placeholder:text-[15px] text-[15px] h-10 pl-2 border outline-none focus:border-gray-400" 
                />
                <input 
                  type="email" 
                  placeholder="Email Address *"
                  className="placeholder:text-[15px] text-[15px] h-10 pl-2 border outline-none focus:border-gray-400" 
                />
              </div>

              <input 
                type="text" 
                placeholder="Subject (Optional)" 
                className="placeholder:text-[15px] text-[15px] h-10 pl-2 border outline-none focus:border-gray-400" 
              />

              <textarea
                className="w-full resize-none mt-2 focus-visible:outline-none placeholder:text-[15px] text-[15px] no-textarea-scrollba border p-2"
                placeholder="Message"
                rows={10}
              />

              <div className="flex justify-center items-center">
                <button
                  className="bg-green text-white uppercase cursor-pointer text-[16px] py-5 px-[30px] font-semibold"
                >
                  send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
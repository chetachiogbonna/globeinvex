"use client";

import AboutGlobalInvestment from '@/components/AboutGlobalInvestment'
import TestimonialSection from '@/components/TestimonialSection'
import { frequentlyAskedQuestions } from '@/constants'
import { cn } from '@/lib/utils';
import Image from 'next/image'
import React, { useState } from 'react'

function About() {
  const [currentViewingQuestion, setCurrentViewingQuestion] = useState("")
  
  return (
    <section>
      <div className="w-full">
        <Image 
          src="/images/about-hero-image.jpg"
          alt="about hero image"
          width={100}
          height={100}
          className="w-full h-auto"
        />
      </div>

      <div className="max-w-screen-xl mx-auto">
        <AboutGlobalInvestment />

        <div className="px-2 lg:px-12 pt-[100px] pb-[60px] flex flex-col-reverse lg:flex-row gap-10 bg-[#F8F6F7]">
          <div className="flex flex-col-reverse lg:flex-row gap-10">
            <div className="w-full lg:w-[55%] flex flex-col gap-8">
              <div>
                <div className="text-[14px] uppercase text-light">
                  why choose us
                </div>

                <h2 className="section-header lg:text-[48px] mt-[15px]">
                  <span className="font-bold text-green">Your Success</span> Is Our Reputation
                </h2>
              </div>
                
              <div className="mb-[85px] text-[14px] leading-[1.9em]">
                <div>
                  <h4 className="text-[20px] font-semibold">
                    Strong Martket Analysis
                  </h4>

                  <p className="mt-[15px] mb-5 text-[16px] text-[#999]">
                    Tasks, docs, and files integrate with Arado’s chat to close the gaps between feedback and action.
                  </p>
                </div>

                <div>
                  <h4 className="text-[20px] font-semibold">Experience & Percision</h4>

                  <p className="mt-[15px] mb-5 text-[16px] text-[#999]">
                    Create multiple discussions to keep all relevant conversations together, all in one place with Arado
                  </p>
                </div>

                <div>
                  <h4 className="text-[20px] font-semibold">Experts About Business</h4>

                  <p className="mt-[15px] text-[16px] text-[#999]">
                    Create multiple discussions to keep all relevant conversations together, all in one place with Arado
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[45%] rounded-sm border border-light bg-white mb-8 h-min">
              <div className="pt-[55px] px-[45px]">
                <h5 className="uppercase text-green mb-[35px] text-5 font-semibold">free consulation</h5>

                <div className="mb-5 text-[14px]">
                  <p className="text-[12px] font-semibold">FULL NAME</p>
                  <input
                    className="h-8 focus-visible:outline-none placeholder:text-[15px] text-[15px]"
                    type="text"
                    placeholder="Chetachi Ogbonna"
                  />
                  <hr className="bg-light" />
                </div>

                <div className="mb-5 text-[14px]">
                  <p className="text-[12px] font-semibold">PHONE NUMBER</p>
                  <input 
                    className="h-8 focus-visible:outline-none placeholder:text-[15px] text-[15px]" 
                    type="text" 
                    placeholder="Enter your phone number" 
                  />
                  <hr />
                </div>

                <div className="mb-5 text-[14px]">
                  <p className="text-[12px] font-semibold">TOPICS</p>
                  <select 
                    className="w-full h-8 focus-visible:outline-none text-[#999] text-[15px] cursor-pointer"
                  >
                    <option selected value="Choose topic">Choose topic</option>
                    <option value="Topic 01">Topic 01</option>
                    <option value="Topic 02">Topic 02</option>
                    <option value="Topic 03">Topic 03</option>
                    <option value="Topic 04">Topic 04</option>
                  </select>
                  <hr />
                </div>

                <div className="mb-5 text-[14px]">
                  <p className="text-[12px] font-semibold">MESSAGE</p>
                  <textarea 
                    className="w-full resize-none mt-2 focus-visible:outline-none placeholder:text-[15px] text-[15px] no-textarea-scrollbar"
                    placeholder="Write your message here"
                    rows={5}
                  />
                </div>
              </div>

              <button className="uppercase py-5 px-9 text-[18px] w-full bg-green text-white rounded-ee-sm rounded-es-sm">send your messanger</button>
            </div>
          </div>
        </div>

        <TestimonialSection />

        <div className="px-2 lg:px-12 pt-[100px] pb-[60px] flex flex-col-reverse lg:flex-row gap-10 bg-[#F8F6F7]">
          <div className="flex lg:flex-col">
            <div className="flex-1 flex flex-col mb-10 w-full lg:w-[75%]">
              <h4 className="section-header lg:text-[28px] -ml-[2px] lg:-ml-6 text-light">
                Frequently Asked Questions
              </h4>

              <div>
                {frequentlyAskedQuestions.map(({ question, answer }) => {
                  return (
                    <div key={question}>
                      <div 
                        className={cn("text-[16px] py-[18px] pr-[50px] pl-[30px] leading-[34px] font-semibold cursor-pointer", { "text-green": currentViewingQuestion === question }, { "text-black": currentViewingQuestion !== question })}
                        onClick={() => setCurrentViewingQuestion(question)}
                      >
                        {question}
                      </div>
                      <div className={cn("px-[35px] pb-[30px] leading-[1.9em] text-light", { "block": currentViewingQuestion === question }, { "hidden": currentViewingQuestion !== question })}>
                        <div className="text-[14px]">{answer}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="hidden lg:block w-[25%]" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
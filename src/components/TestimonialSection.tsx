"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react"

function TestimonialSection() {
  const carouselPreviousRef = useRef<HTMLButtonElement>(null)
  const carouselNextRef = useRef<HTMLButtonElement>(null)

  const pathname = usePathname()

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselPreviousRef.current || carouselNextRef.current) {
          carouselNextRef.current?.click()
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Ryan T.",
      testimony: "I've entrusted my financial future to Global Invest for years, and I couldn&apos;t be happier. Their expert guidance and diverse investment options have helped me achieve my goals. I sleep soundly at night knowing my money is in capable hands."
    },
    {
      name: "John M.",
      testimony: "Global Invest turned my investments around. They carefully tailored a portfolio that matched my risk tolerance, and it&apos;s been a game-changer. I&apos;m grateful for their exceptional service and commitment to my financial growth."
    },
    {
      name: "Lisa W.",
      testimony: "Global Invest provides top-notch investment strategies and impeccable service. Their team's deep understanding of the market has consistently delivered impressive returns. I can't recommend them enough!"
    },
    {
      name: "David H.",
      testimony: "Global Invest has been instrumental in my financial success. Their global perspective and attention to detail set them apart. Thanks to their guidance, I've achieved financial milestones I never thought possible."
    }
  ]

  const servicesTestimonials = [
    {
      name: "Ryan T.",
      testimony: "I've entrusted my financial future to Global Invest for years, and I couldn&apos;t be happier. Their expert guidance and diverse investment options have helped me achieve my goals. I sleep soundly at night knowing my money is in capable hands."
    },
    {
      name: "John M.",
      testimony: "Global Invest turned my investments around. They carefully tailored a portfolio that matched my risk tolerance, and it&apos;s been a game-changer. I&apos;m grateful for their exceptional service and commitment to my financial growth."
    },
    {
      name: "Lisa W.",
      testimony: "Global Invest provides top-notch investment strategies and impeccable service. Their team's deep understanding of the market has consistently delivered impressive returns. I can't recommend them enough!"
    },
    {
      name: "David H.",
      testimony: "Global Invest has been instrumental in my financial success. Their global perspective and attention to detail set them apart. Thanks to their guidance, I've achieved financial milestones I never thought possible."
    }
  ]

  return (
    <div className="py-[90px] px-2 lg:px-12">
      <div>
        <div className="mb-10">
          <div className="uppercase text-light">testimonials</div>

          <div className="md:flex md:justify-between md:items-center">
            <h2 className="section-header lg:text-[48px] mt-[15px]">
              <span className="text-green font-bold">+2,000 Clients</span> Love Us
            </h2>

            <div className="hidden md:flex gap-1 items-center">
              <ChevronLeft 
                color="#666"
                size={50} 
                onClick={() => carouselPreviousRef.current?.click()} 
                className="cursor-pointer"
              />
              <ChevronRight 
                color="#666"
                size={50} 
                onClick={() => carouselNextRef.current?.click()} 
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {(pathname.startsWith("/service") ? servicesTestimonials : testimonials).map(({ name, testimony }) => {
              return (
                <CarouselItem key={name} className="md:basis-1/2">
                  <div className="p-[45px] border border-gray-300">
                    <div className="after:content-['\efce'] after:flex after:justify-end after:font-bold" />
                    <div>
                      <div className="text-[18px] mt-1 font-semibold">{name}</div>
                      <p className="mt-5 text-[14px] text-light leading-[1.8em]">
                        {testimony}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              )
            })}
          </CarouselContent>

          <CarouselPrevious 
            ref={carouselPreviousRef} 
            className="hidden"
          />
          <CarouselNext 
            ref={carouselNextRef} 
            className="hidden"
          />
        </Carousel>

        <div className="pt-6 flex gap-1 items-center">
          <ChevronLeft 
            color="#666"
            size={40} 
            onClick={() => carouselPreviousRef.current?.click()}
            className="cursor-pointer" 
          />
          <ChevronRight 
            color="#666"
            size={40} 
            onClick={() => carouselNextRef.current?.click()}
            className="cursor-pointer" 
          />
        </div>
      </div>
    </div>
  )
}

export default TestimonialSection
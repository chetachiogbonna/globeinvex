import { teams } from '@/constants'
import Image from 'next/image'

function OurTeam() {
  return (
    <div className="px-2 lg:px-12 pt-[100px] pb-[70px] flex flex-col gap-10">
      <div>
        <div className="text-[14px] uppercase text-light">why choose us</div>

        <h2 className="section-header lg:text-[48px] mt-[15px]">
          We Are <span className="font-bold text-green">Friendly & Profressional
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 service-section-grid lg:grid-cols-3 gap-8">
        {teams.map(({ image, name, role }) => {
          return (
            <div key={name}>
              <Image 
                src={image}
                alt={name + " photo"}
                width="100"
                height="100"
                className="w-full"
              />

              <div className="pt-[30px]">
                <h4>
                  <a href="#" className="text-[24px] font-semibold">{name}</a>
                </h4>
                <p className="mt-[5px] text-[14px]">{role}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default OurTeam
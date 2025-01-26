import { packages } from "@/constants"

function Packages() {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto">
        <div className="px-2 lg:px-12 pt-[100px]">
          <div className="w-full lg:w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-[100px] justify-center items-center">
            {packages.slice(0, 3).map(({ name, minimum, maximum, profit, referralBonus, duration }) => {
              return (
                <div 
                  key={name}
                  className="py-[45px] pl-[35px] pr-[25px] border border-gray-200 max-lg:last:col-span-auto"
                >
                  <h2 className="font-bold text-[20px] mb-5 text-green">{name}</h2>

                  <div>
                    <div className="w-full flex justify-between items-center">
                      <p className="text-[14px] text-[#777] mb-4">Minimum</p>

                      <span className="text-white py-[2px] px-[11px] bg-[#228c22] rounded-[6px] inline-block text-xs leading-[1.5]">${minimum.toFixed(2)}</span>
                    </div>
                    <div className="w-full flex justify-between items-center">
                      <p className="text-[14px] text-[#777] mb-4">Maximum</p>

                      <span className="text-white py-[2px] px-[11px] bg-[#228c22] rounded-[6px] inline-block text-xs leading-[1.5]">${maximum.toFixed(2)}</span>
                    </div>
                    <div className="w-full flex justify-between items-center">
                      <p className="text-[14px] text-[#777] mb-4">Profit</p>

                      <span className="text-white py-[2px] px-[11px] bg-[#228c22] rounded-[6px] inline-block text-xs leading-[1.5]">${profit}</span>
                    </div>
                    <div className="w-full flex justify-between items-center">
                      <p className="text-[14px] text-[#777] mb-4">Referral Bonus</p>

                      <span className="text-white py-[2px] px-[11px] bg-[#228c22] rounded-[6px] inline-block text-xs leading-[1.5]">${referralBonus}</span>
                    </div>
                    <div className="w-full flex justify-between items-center">
                      <p className="text-[14px] text-[#777] mb-4">Duration</p>

                      <span className="text-white py-[2px] px-[11px] bg-[#228c22] rounded-[6px] inline-block text-xs leading-[1.5]">{duration} Hour(s)</span>
                    </div>

                    <button
                      className="w-full p-2.5 text-[15px] border-2 border-green text-green bg-white mt-[16px]"
                    >
                      GET STARTED
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="w-full lg:w-[60%] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
            {packages.slice(-2).map(({ name, minimum, maximum, profit, referralBonus, duration }) => {
              return (
                <div 
                  key={name}
                  className="py-[45px] pl-[35px] pr-[25px] border border-gray-200"
                >
                  <h2 className="font-bold text-[20px] mb-5 text-green">{name}</h2>

                  <div>
                    <div className="w-full flex justify-between items-center">
                      <p className="text-[14px] text-[#777] mb-4">Minimum</p>

                      <span className="text-white py-[2px] px-[11px] bg-[#228c22] rounded-[6px] inline-block text-xs leading-[1.5]">${minimum.toFixed(2)}</span>
                    </div>
                    <div className="w-full flex justify-between items-center">
                      <p className="text-[14px] text-[#777] mb-4">Maximum</p>

                      <span className="text-white py-[2px] px-[11px] bg-[#228c22] rounded-[6px] inline-block text-xs leading-[1.5]">${maximum.toFixed(2)}</span>
                    </div>
                    <div className="w-full flex justify-between items-center">
                      <p className="text-[14px] text-[#777] mb-4">Profit</p>

                      <span className="text-white py-[2px] px-[11px] bg-[#228c22] rounded-[6px] inline-block text-xs leading-[1.5]">${profit}</span>
                    </div>
                    <div className="w-full flex justify-between items-center">
                      <p className="text-[14px] text-[#777] mb-4">Referral Bonus</p>

                      <span className="text-white py-[2px] px-[11px] bg-[#228c22] rounded-[6px] inline-block text-xs leading-[1.5]">${referralBonus}</span>
                    </div>
                    <div className="w-full flex justify-between items-center">
                      <p className="text-[14px] text-[#777] mb-4">Duration</p>

                      <span className="text-white py-[2px] px-[11px] bg-[#228c22] rounded-[6px] inline-block text-xs leading-[1.5]">{duration} Hour(s)</span>
                    </div>

                    <button
                      className="w-full p-2.5 text-[15px] border-2 border-green text-green bg-white mt-[16px]"
                    >
                      GET STARTED
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Packages
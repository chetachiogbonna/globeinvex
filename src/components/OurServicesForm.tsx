function OurServicesForm({ selectOptions }: { selectOptions: boolean }) {
  return (
    <form className="w-full lg:w-1/2 rounded-sm border border-light bg-white mb-8">
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

        {selectOptions && (
          <div className="mb-5 text-[14px]">
            <p className="text-[12px] font-semibold">TOPICS</p>
            <select 
              className="w-full h-8 focus-visible:outline-none text-[#999] text-[15px] cursor-pointer"
            >
              <option defaultValue="Choose topic" value="Choose topic">Choose topic</option>
              <option value="Topic 01">Topic 01</option>
              <option value="Topic 02">Topic 02</option>
              <option value="Topic 03">Topic 03</option>
              <option value="Topic 04">Topic 04</option>
            </select>
            <hr />
          </div>
        )}

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
    </form>
  )
}

export default OurServicesForm
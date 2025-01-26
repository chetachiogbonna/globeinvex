function KYC() {
  return (
    <section>
      <h3 className="text-[24px] text-green font-semibold mb-2">Upload KYC Document</h3>
      <p className="font-light mb-4 text-[#636c72] text-[14px]">Be sure to check your uploaded file for validity before you upload.</p>

      <div className="py-4 bg-gray-100">
        <form className="space-y-4">
          <div>
            <label htmlFor="uploadFront" className="block text-sm font-medium text-gray-700">
              Upload ID (Front):
            </label>
            <input
              type="file"
              id="uploadFront"
              className="block w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-green"
            />
          </div>

          <div>
            <label htmlFor="uploadBack" className="block text-sm font-medium text-gray-700">
              Upload ID (Back):
            </label>
            <input
              type="file"
              id="uploadBack"
              className="block w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-green"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="typeOfID" className="block text-sm font-medium text-gray-700">
                Type of ID:
              </label>
              <select
                id="typeOfID"
                className="block w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-green"
              >
                <option defaultValue="Drivers License" value="Drivers License">
                  Drivers License
                </option>
                <option value="International Passport">
                  International Passport
                </option>
                <option value="Proof of Residence">
                Proof of Residence
                </option>
                <option value="Utility Bill">
                  Utility Bill
                </option>
              </select>
            </div>

            <div>
              <label htmlFor="idNumber" className="block text-sm font-medium text-gray-700">
                ID Number:
              </label>
              <input
                type="text"
                id="idNumber"
                className="block w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-green"
                placeholder="Enter Number on ID"
              />
            </div>

            <div>
              <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
                Expiry Date:
              </label>
              <input
                type="date"
                id="expiryDate"
                className="block w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-green"
              />
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Address:
              </label>
              <input
                type="text"
                id="address"
                className="block w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-green"
                placeholder="Address Line"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="text-[0.9rem] bg-green text-white py-[0.375rem] px-[0.75rem] rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Save And Upload Document
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default KYC
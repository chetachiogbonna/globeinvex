import { packages } from "@/constants"
import { getLoggedInUser } from "@/lib/actions/user.actions"

async function Invest() {
  const currentUser = await getLoggedInUser()

  return (
    <section>
      <div className="flex flex-col">
        <div className="relative border-b pb-4 flex flex-col-reverse md:flex-row justify-start md:justify-between items-start md:items-center mb-8">
          <div className="absolute -bottom-1 left-0 w-8 h-1 bg-green" />
          <h3 className="text-[1rem] text-green font-semibold">
            Invest
          </h3>
        </div>

        <div className="p-6 bg-white rounded-md shadow-md">
          <h2 className="text-lg font-semibold text-green mb-4 pb-3">Invest</h2>
          <form className="space-y-4 pt-10 border-t ">
            <div>
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                Amount
              </label>
              <input
                type="text"
                id="amount"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-green h-10 text-[14px] placeholder:text-[13px]"
                placeholder="Amount"
              />
              <p className="mt-1 text-xs text-gray-500">
                Do not include special characters like commas (,) and full stops (.) while inputting amount.
              </p>
            </div>
            <div>
              <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700">
                How do you want to get paid?
              </label>
              <select
                id="paymentMethod"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-green h-10 text-[14px] text-gray-700"
              >
                <option value="">
                  -Please select plan-
                </option>

                {packages.map(({ name }) => {
                  return (
                    <option key={name} value={name}>{name}</option>
                  )
                })}
              </select>
            </div>
            <div className="pb-10 border-b">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-green h-10 text-[14px] placeholder:text-[13px]"
                placeholder={currentUser.email}
              />
            </div>
            <div>
              <button
                type="submit"
                className="mt-2 px-4 py-2 bg-green text-white font-medium rounded-md hover:bg-[#0a9b9c]"
              >
                Invest
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Invest
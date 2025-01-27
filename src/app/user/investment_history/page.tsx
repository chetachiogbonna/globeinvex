
function InvestmentHistory() {
  return (
    <section>
      <div className="flex flex-col">
        <div className="relative border-b pb-4 flex flex-col-reverse md:flex-row justify-start md:justify-between items-start md:items-center mb-8">
          <div className="absolute -bottom-1 left-0 w-8 h-1 bg-green" />
          <h3 className="text-[1rem] text-green font-semibold">
            Recent
          </h3>
        </div>

        <div className="p-6 bg-white rounded-md shadow-md">
          <div>
            <h2 className="text-lg font-semibold text-green pb-3">Recent Transactions</h2>
            <p className="text-sm text-light pb-4 border-b">My Investment History</p>
          </div>

          <div className="pt-8 pb-5">
            <p className="text-sm">you have not made any transactions yet</p>
          </div>

          {/* <div className="pt-8 pb-5">
            <div>
              <div className="pb-4 px-2 flex justify-between items-center">
                <p className="text-xs font-semibold uppercase text-center">Name</p>
                <p className="text-xs font-semibold uppercase text-center -ml-24">Status</p>
                <p className="text-xs font-semibold uppercase text-center">Date</p>
              </div>

              <div className="hover:bg-gray-100 border-t border-gray-600 pt-4 pb-2 px-2 flex justify-between items-center">
                <p className="text-sm font-light">Name</p>
                <p className="text-sm font-light">pending</p>
                <p className="text-sm font-light">0000-00-00 00:00:00</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default InvestmentHistory
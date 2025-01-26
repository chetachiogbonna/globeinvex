import React from 'react'

function WithdrawalHistory() {
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
            <p className="text-sm text-light pb-4 border-b">My Withdrawal History</p>
          </div>

          <div className="pt-8 pb-5">
            <p className="text-sm">you have not made any transactions yet</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WithdrawalHistory
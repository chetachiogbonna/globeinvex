"use client";

import AlertModel from '@/components/AlertModel';
import TradingViewChart from '@/components/TradingViewChart';
import { useAuthContext } from '@/context/AuthContext'
import { Copy, PlusCircle } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'

function UserDashboard() {
  const { user } = useAuthContext();
  const [copied, setCopied] = useState(false);

  const userReferralLink = `https://globeinvex.vercel.app/register?ref=${user?.username}`;

  const copyToClipboard = async () => {
    if (typeof window !== "undefined" && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(userReferralLink);
        setCopied(true);
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    }
  }

  return (
    <section>
      <div className="relative border-b pb-4 flex flex-col-reverse md:flex-row justify-start md:justify-between items-start md:items-center mb-8">
        <div className="absolute -bottom-1 left-0 w-8 h-1 bg-green" />
        <h3 className="text-[1rem] text-green font-semibold">
          Financial Overview
        </h3>

        <div className="text-white flex items-center gap-2">
          <Link href="invest" className="bg-green py-1 px-2 rounded text-sm flex items-center gap-1 cursor-pointer">
            <PlusCircle color="white" size={16} />
            Invest
          </Link>
          <Link href="withdraw" className="bg-[#24b314] py-1 px-2 rounded text-sm flex items-center gap-1 cursor-pointer">
            <Copy color="white" size={16} />
            Withdraw
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-y-5 pb-8">
        <div className="lg:flex justify-center items-center">
          <div className="px-2.5 flex justify-center md:justify-between items-center h-1/2">
            <div className="py-2.5 px-5">
              <div className="text-[#5A637E7D] text-[1.08rem]">Balance</div>
              <div className="text-[2.07rem] font-bold text-[#303A46]">$0</div>
              <Link className="underline flex gap-2 items-center text-green text-nowrap" href="withdrawal_history">
                <span>Withdrawal History</span>
                <FaArrowRight />
              </Link>
            </div>

            <div className="py-2.5 px-5 hidden md:block">
              <div className="text-[#5A637E7D] text-[1.08rem]">Active Deposit</div>
              <div className="text-[2.07rem] font-bold text-[#303A46]">$0.00</div>
              <Link className="underline flex gap-2 items-center text-green text-nowrap" href="investment_history">
                <span>Investment History</span>
                <FaArrowRight />
              </Link>
            </div>
          </div>

          <div className="hidden lg:block w-full h-full" />
        </div>

        <div className="px-2.5 mb-4">
          <h4 className="text-[24px] text-green mb-2 font-semibold">
            Account Details
          </h4>

          <div className="flex flex-col gap-2 text-[#3E4B5B]">
            <div className="bg-white flex rounded-[4px] hover:shadow-md transition-all duration-500">
              <p className="py-[0.9rem] px-[1.1rem] font-semibold text-[14px] w-1/2">
                Account Name:
              </p>
              <p className="py-[0.9rem] px-[1.1rem] font-semibold text-[14px] w-1/2">
                {user?.name}
              </p>
            </div>
            <div className="bg-white flex rounded-[4px] hover:shadow-md transition-all duration-500">
              <p className="py-[0.9rem] px-[1.1rem] font-semibold text-[14px] w-1/2">
                Active Deposit:
              </p>
              <p className="py-[0.9rem] px-[1.1rem] font-semibold text-[14px] w-1/2">
                $0.00
              </p>
            </div>
            <div className="bg-white flex rounded-[4px] hover:shadow-md transition-all duration-500">
              <p className="py-[0.9rem] px-[1.1rem] font-semibold text-[14px] w-1/2">
                Profit:
              </p>
              <p className="py-[0.9rem] px-[1.1rem] font-semibold text-[14px] w-1/2">
                $0.00
              </p>
            </div>
            <div className="bg-white flex rounded-[4px] hover:shadow-md transition-all duration-500">
              <p className="py-[0.9rem] px-[1.1rem] font-semibold text-[14px] w-1/2">
                Referral Bonus:
              </p>
              <p className="py-[0.9rem] px-[1.1rem] font-semibold text-[14px] w-1/2">
                $0.00
              </p>
            </div>
            <div className="bg-white flex rounded-[4px] hover:shadow-md transition-all duration-500">
              <p className="py-[0.9rem] px-[1.1rem] font-semibold text-[14px] w-1/2">
                Withdrawal Limit:
              </p>
              <p className="py-[0.9rem] px-[1.1rem] font-semibold text-[14px] w-1/2">
                $0.00
              </p>
            </div>
            <div className="bg-white flex rounded-[4px] hover:shadow-md transition-all duration-500">
              <p className="py-[0.9rem] px-[1.1rem] font-semibold text-[14px]">
                {userReferralLink} <span className="py-1 px-2 bg-[#24b314] rounded text-white cursor-pointer" onClick={copyToClipboard}>copy</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-b pb-4 flex flex-col-reverse md:flex-row justify-start md:justify-between items-start md:items-center mb-8">
        <div className="absolute -bottom-1 left-0 w-8 h-1 bg-green" />
        <h3 className="text-[1rem] text-green font-semibold">
          Market Data
        </h3>
      </div>

      <TradingViewChart />

      {copied && (
        <AlertModel 
          title="copied to clipboard"
          continueButtonAction={() => setCopied(false)}
        />
      )}
    </section>
  )
}

export default UserDashboard
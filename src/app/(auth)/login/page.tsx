import { Fingerprint, UserCircle2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Login() {
  return (
    <div className="w-full max-w-md bg-white rounded-md shadow-md">
      <div className="p-[90px]">
        <Image 
          src="/images/GlobalInvestB.png" 
          alt="Global Invest Logo" 
          width={250}
          height={0}
          className="w-[250px] h-auto mx-auto" 
        />
      </div>

      <div className="relative border-b pb-4 flex flex-col-reverse md:flex-row justify-start md:justify-between items-start md:items-center mb-8">
        <div className="absolute -bottom-1 rounded-[2px] left-16 w-8 h-2 bg-green" />
        <h2 className="text-2xl font-semibold text-green px-6 w-[80%] mx-auto">Login Form</h2>
      </div>

      <form className="pl-2 py-6 pr-6 w-[80%] mx-auto space-y-4">
        <div className="flex gap-2 items-center">
          <UserCircle2 color="green" className="mt-8" />

          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-green placeholder:text-sm"
              placeholder="Enter your email"
            />
          </div>
        </div>
      
        <div className="flex gap-2 items-center">
          <Fingerprint color="green" className="mt-8" />

          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-green placeholder:text-sm"
              placeholder="Enter your password"
            />
          </div>
        </div>
        
        <div className="flex flex-row justify-between items-center mt-6">
          <button
            type="submit"
            className="px-4 py-1 bg-green text-sm text-white font-medium rounded-md"
          >
            Log me in
          </button>
          <Link href="/register" className="mt-4 sm:mt-0 text-sm text-green hover:underline">
            Register Account?
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Login
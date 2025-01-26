"use client";

import { LinkIcon, Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Profile = () => {
  return (
    <section>
      <div className="flex flex-col sm:flex-row gap-3 lg:gap-10">
        <div className="h-max w-full md:w-[40%] bg-white shadow-lg rounded-md overflow-hidden pb-8">
          <div className="relative">
            <div className="h-48 bg-gradient-to-br from-gray-300 to-gray-500 w-full rounded-br-[130px]">
              <Image 
                src="/images/profile-placeholder.jpg"
                alt="user profile"
                width={100}
                height={100}
                className="w-full h-full object-cover rounded-br-[130px]"
              />
            </div>
            <div className="absolute bottom-6 left-6 text-white">
              <h1 className="text-xl font-bold mb-2.5 pb-1 border-b">Chetachi Ogbonna</h1>
              <p className="text-sm">Chetachi909</p>
            </div>
          </div>

          <div className="px-2">
            <p className="text-xs text-gray-500 mt-6 mb-2 text-center">
              Allowed JPG, GIF or PNG. Max size of 800kB.
            </p>
            <div className="flex justify-between items-center">
              <input 
                type="file"  
                className="hidden profile-upload-input"  
              />

              <div className="flex flex-col gap-1 mb-6">
                <p className="text-xs">Browse Files:</p>
                <button 
                  className="bg-green text-xs text-white px-2 py-1 rounded-lg flex gap-1 items-center hover:bg-[#0a9b9c]"
                  onClick={() => {
                    const element = document.querySelector(".profile-upload-input")! as HTMLInputElement
                    element.click();
                  }}
                >
                  <LinkIcon className="w-3 h-3" />
                  <span>Browse</span>
                </button>
              </div>
              
              <button className="bg-green hover:bg-[#0a9b9c] text-xs text-white px-2 py-1 rounded-lg">
                Save Image
              </button>
            </div>

            <div className="space-y-6 px-4">
              <div>
                <div className="flex justify-between text-xs text-gray-600">
                  <span>Profile Completion +10</span>
                  <span className="text-blue-500">100/100</span>
                </div>
                <div className="w-full bg-[#65affd] rounded-full h-1.5 mt-1">
                  <div className="bg-[#0a9b9c] h-1.5 w-[90%] rounded-full" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-gray-600">
                  <div>Account Security <span className="-mt-5">+5</span></div>
                  <div className="text-blue-500">100/100</div>
                </div>
                <div className="w-full bg-[#65affd] rounded-full h-1.5 mt-1">
                  <div className="bg-[#0a9b9c] h-1.5 w-[95%] rounded-full" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-gray-600">
                  <span>Verification</span>
                  <span className="text-blue-500">90/100</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                  <div className="w-[95%] bg-[#65affd] rounded-full h-1.5">
                    <div className="bg-[#0a9b9c] h-1.5 w-[90%] rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            <button className="px-4"> 
              <Link href="change_password" className="bg-green text-white py-2 px-3 text-xs rounded-md flex items-center justify-center hover:bg-[#0a9b9c] gap-2 mt-6 mb-4">
                <Lock className="w-3 h-3" />
                <span>Change Password</span>
              </Link>
            </button>
          </div>
        </div>

        <div className="h-min w-full md:w-[60%] p-6 mx-auto bg-white rounded-md shadow-md">
          <h2 className="text-lg font-semibold text-green mb-6 pb-4 border-b">Profile Information</h2>
          <form className="space-y-4 sm:gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-green"
                placeholder="Chetachi"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-green"
                placeholder="Ogbonna"
              />
            </div>
            <div className="flex items-center flex-col sm:flex-row gap-3">
              <div className="w-full sm:w-1/2">
                <label htmlFor="birthday" className="block text-sm font-medium text-gray-700">
                  Birthday
                </label>
                <input
                  type="date"
                  id="birthday"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-green"
                />
              </div>
              <div className="w-full sm:w-1/2">
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                  Gender
                </label>
                <select
                  id="gender"
                  className="mt-1 block w-full p-2.5 border border-gray-300 rounded-lg focus:outline-green"
                >
                  <option value="">Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-green"
                placeholder="+12-345 678 910"
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                id="address"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-green"
                placeholder="Enter your home address"
              />
            </div>
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                Country
              </label>
              <input
                type="text"
                id="country"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-green"
                placeholder="Country"
              />
            </div>
            <div>
              <label htmlFor="zip" className="block text-sm font-medium text-gray-700">
                ZIP
              </label>
              <input
                type="text"
                id="zip"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-green"
                placeholder="0"
              />
            </div>
            <div >
              <button
                type="submit"
                className="mt-4 text-sm px-3 py-2 bg-green text-white font-medium rounded-md hover:bg-[#0a9b9c]"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Profile;
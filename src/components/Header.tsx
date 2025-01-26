import Link from 'next/link'
import Navbar from './Navbar'
import { FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa'
import { Clock } from 'lucide-react'
import GoogleTranslate from './GoogleTranslate'

function Header() {
  return (
    <>
      <div id="top-header" className="bg-green z-10">
        <div
          className="max-w-screen-xl mx-auto py-5 px-12 text-white flex flex-col lg:flex-row justify-center md:justify-between items-center gap-y-3"
        >
          <div className="flex flex-col md:flex-row items-center gap-2">
            <Link 
              href="mailto:admin@globeinvex.com"
              className="flex items-center gap-2 hover:underline text-[14px]"
            >
              <FaEnvelope size={16} />
              admin@globeinvex.com
            </Link>
            <Link 
              href="/contact"
              className="flex items-center gap-2 hover:underline text-[14px]"
            >
              <Clock size={16} />
              Mon - Sun: 8.00 - 17.00
            </Link>
          </div>

          <GoogleTranslate  />

          <div className="flex items-center gap-3">
            <span className="text-nowrap">Our Social</span>
            <FaFacebook />
            <FaInstagram />
          </div>
        </div>
      </div>
      
      <Navbar />
    </>
  )
}

export default Header
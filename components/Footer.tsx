import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-black">
      <footer className="text-white w-11/12 lg:w-10/12 mx-auto py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 gap-8 mb-8">
          {/* Links Column */}
          <div className="md:col-span-1">
            <h3 className="font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Engines
                </a>
              </li>
            </ul>
          </div>

          {/* Important Links Column */}
          <div className="md:col-span-1">
            <h3 className="font-semibold mb-4">Important Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Car Parts
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Blogs
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="md:col-span-1">
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Company Info Column – spans 3 columns */}
          <div className="md:col-span-3 flex flex-col items-start md:px-12">
            {/* Logo/Icon */}
            <div className="w-15 h-8 rounded-full flex items-center justify-center mb-4">
              <Image
                src="/FooterLogo.png"
                alt="Footer Logo"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed">
              At Engine Market, we lead the way in providing high-quality
              reconditioned and used engines, revolutionizing how car owners and
              garages find reliable engine solutions.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-500 pt-6 w-full">
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
            {/* Social Media Links */}
            <div className="flex gap-3">
              <button className="border-2 border-white rounded-full px-4 py-2 text-sm hover:bg-white text-white hover:text-black transition-all duration-300 flex items-center gap-2">
                <FaInstagram size={16} />
                Instagram
              </button>
              <button className="border-2 border-white rounded-full px-4 py-2 text-sm hover:bg-white text-white hover:text-black transition-all duration-300 flex items-center gap-2">
                <CiLinkedin size={18} />
                LinkedIn
              </button>
              <button className="border-2 border-white rounded-full px-4 py-2 text-sm hover:bg-white text-white hover:text-black transition-all duration-300 flex items-center gap-2">
                <CiTwitter size={20} />
                Twitter
              </button>
            </div>

            {/* Full-width copyright button style */}
            <div className="border-2 border-white rounded-full px-4 py-2 text-sm text-white w-full sm:flex-1 text-center">
              ENGINEMARKET. All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

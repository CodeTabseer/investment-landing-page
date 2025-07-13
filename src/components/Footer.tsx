/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"
import Image from "next/image"
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa"
import logo from '../../public/asset/logo/tab-startup-logo (2).png'
import google from '../../public/asset/footer/googlepay.png'
import apple from '../../public/asset/footer/appleStore.png'

export default function Footer() {

  const date = new Date()
  const fullYear = date.getFullYear()
  return (
    <footer className="bg-white text-gray-700 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="block">
              <Image
                src={logo}
                alt="logo"
                width={150}
                height={100}
                className="h-20 w-44"
              />
            </Link>
            <p className="text-sm max-w-xs">
              tabstartup is revolutionizing Cross-Border Payments, Empowering Emerging Economies with Access to the USA!
            </p>
            <div className="flex gap-4">
              <Link href="https://play.google.com" className="">
                <Image
                  src={google}
                  alt="Get it on Google Play"
                  width={120}
                  height={40}
                  className="brightness-0 invert"
                />
              </Link>
              <Link href="https://apps.apple.com" className="">
                <Image
                  src={apple}
                  alt="Download on App Store"
                  width={120}
                  height={40}
                  className="brightness-0 invert"
                />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-black font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                "About Us",
                "Fees",
                "Offers",
                "Blog",
                "Newsroom",
                "Disclosures",
                "Terms of Service",
                "Privacy Policy",
                "Contact Us",
              ]?.map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm hover:text-black transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-black font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                "All Services",
                "tabstartup News",
                "tabstartup Card",
                "Mobile Topup",
                "tabstartupShe",
                "tabstartupTech",
                "tabstartup Nilam",
                "iPay Wallet",
              ]?.map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm hover:text-black transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours & Contact */}
          <div>
            <h3 className="text-black font-semibold text-lg mb-4">Business Hours</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm">Phone: +1 628 777 7496</p>
                <p className="text-sm">W'App: +1 555 600 2341</p>
                <p className="text-sm">Email: contact@tabstartup.com</p>
              </div>

              <div className="space-y-2">
                <h4 className="text-black font-medium">Bangladesh</h4>
                <p className="text-sm">P: +880 2 4102 0318</p>
                <p className="text-sm">M: +880 13 0015 2436</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Legal */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-6">
              <Link href="#" className="hover:text-black transition-colors">
                <FaFacebookF className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-black transition-colors">
                <FaLinkedinIn className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="hover:text-black transition-colors">
                <FaYoutube className="w-5 h-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>

            <div className="text-xs text-center md:text-left space-y-4 max-w-3xl">
              <p>
                tabstartup is a financial technology company, not a bank. Banking services are provided by Regent Bank,
                Member FDIC. FDIC insurance only covers failure of insured depository institutions. Certain conditions
                must be satisfied for pass-through FDIC deposit insurance to apply.
              </p>
              <p>
                The tabstartup Mastercard® Debit Card is issued by Regent Bank pursuant to a license from Mastercard U.S.A.
                Inc. and may be used everywhere Mastercard debit cards are accepted. Mastercard is a registered
                trademark, and the circles design is a trademark of Mastercard International Incorporated.
              </p>
              <p>Copyright ©{fullYear} tabstartup Inc. | All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


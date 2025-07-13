"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/asset/logo/tab-startup-logo (2).png";
import PrimaryButton from "./ui/PrimaryButton";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            alt="tabstartup Logo"
            width={100}
            height={60}
            className="h-16 w-auto"
          />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            Personal
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            Business
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            Card
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            Fees
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            Help
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            Contact
          </Link>
        </div>

        <PrimaryButton title="Invest Pay Dashboard" icon={''} />
      </div>
    </nav>
  );
}

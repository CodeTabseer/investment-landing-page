"use client";

import Image from "next/image";
import { MdEmail } from "react-icons/md";
import PrimaryButton from "./ui/PrimaryButton";

export default function Banner() {
  return (
    <section className="relative bg-black min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 py-12 md:py-24 ">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-white text-2xl font-bold">
                Invest in tabstartup Inc., USA
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Be One of our Proud{" "}
                <span className="block">Angel Investors!</span>
              </h1>
              <div className="h-1 w-16 bg-primary-light"></div>
            </div>

            <p className="text-white/80 text-lg mt-10">
              To get the private investment link, please email to
              invest@tabstartup.com along with your details including LinkedIn
              profile.
            </p>

            {/* <button className="bg-primary-light hover:bg-primary-light/90 text-white font-semibold px-8 py-2 h-auto text-lg">
              <MdEmail className="mr-2 h-5 w-5" />
            </button> */}
            <PrimaryButton
              title="Send e-mail Now"
              icon={<MdEmail className="mr-2 h-5 w-5" />}
            />
          </div>

          {/* Right Content */}
          <div className="relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-12%20162621-opsyqm1VZHIGrFKpQIlLs6hwpmGSfp.png"
              alt="tabstartup Logo"
              width={100}
              height={32}
              className="w-full max-w-[500px] ml-auto"
            />
            <div className="absolute bottom-0 right-0 bg-black/80 backdrop-blur p-4 rounded-lg">
              <p className="text-white text-sm">Be one of our</p>
              <div className="text-primary-light text-4xl font-bold">247</div>
              <p className="text-white text-sm">
                Bangladeshi
                <br />
                Angel Investors
                <br />
                <span className="text-primary-light/80">in January 2025</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

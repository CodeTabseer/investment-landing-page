/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import summaryImage from "../../public/asset/summary/summary.png";
import PrimaryButton from "./ui/PrimaryButton";

export default function Summary() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Summary</h2>

        <div className="">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="md:flex justify-between">
              <div className="md:w-2/3 space-y-4">
                <p className="text-gray-600">
                  
                  TabStartup is an innovative startup accelerator that connects
                  entrepreneurs, investors, and mentors in a thriving ecosystem.
                  It offers structured mentorship, investor matchmaking, and
                  accelerator programs to help startups scale. Investors get
                  access to high-potential startups, exclusive pitch events, and
                  strategic support.
                </p>

                <p className="text-gray-600">
                  Funds raised are used for product development, marketing, team
                  expansion, and operational growth. Crowdfunding helps startups
                  validate market demand, build a strong community, and secure
                  diverse funding sources. TabStartup provides a seamless
                  investment experience with curated opportunities and ongoing
                  portfolio management.
                </p>

                <p className="text-gray-600">
                  Join TabStartup to invest in the future. Support
                  groundbreaking innovations and be part of a thriving
                  entrepreneurial network.
                </p>
              </div>
              <div>
                <Image
                  height={400}
                  width={400}
                  alt="summary image"
                  src={summaryImage}
                />
              </div>
            </div>

            <div className="space-y-4">
              <p className="font-medium">
                If you are interested in investing at this stage:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-600 ml-4">
                <li>
                  Please email us at{" "}
                  <span className="text-blue-600">invest@tabstartup.com</span>{" "}
                  with the following details: your full name, address,
                  business/professional background, phone number, LinkedIn
                  profile (if available), and the amount you are interested in
                  investing.
                </li>
                <li>
                  If your profile qualifies, you will receive a private link to
                  complete your investment securely online.
                </li>
                <li>
                  All legal matters will be handled by{" "}
                  <span className="font-semibold">AngelList</span>. For more
                  details, visit the below link.
                </li>
              </ol>
            </div>

            <div className="flex justify-center py-5">
              <PrimaryButton title="AngelList Help Center" icon={''} />
            </div>

            <div className="p-6 space-y-3">
              <h3 className="font-semibold text-lg">Investment Details</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <span className="font-medium">
                    Minimum Investment Amount:
                  </span>{" "}
                  $5,000
                </li>
                <li>
                  <span className="font-medium">
                    Maximum Investment Amount:
                  </span>{" "}
                  Unlimited
                </li>
                <li>
                  <span className="font-medium">Instrument:</span> SAFE Note
                  (Simple Agreement for Future Equity), 15% Discount, No Cap.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { BsPlayCircle, BsEnvelope, BsGlobe } from "react-icons/bs";

const tableOfContents = [
  { id: "intro", title: "Introduction" },
  { id: "mission", title: "Our Mission / Purpose" },
  { id: "funds", title: "How Will the Funds Be Used?" },
  { id: "why", title: "Why Crowdfunding?" },
  { id: "who", title: "Who Can Invest?" },
  { id: "receive", title: "What You Will Receive" },
  { id: "how", title: "How to Invest" },
  { id: "conclusion", title: "Conclusion" },
];

export default function VideoLanding() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <div className="md:flex justify-between">
        {/* Left Side - Table of Contents */}
        <div className="md:w-1/2  p-8">
          <h2 className="mb-6 text-xl font-semibold">Contents:</h2>
          <ol className="space-y-2">
            {tableOfContents.map((item, index) => (
              <li
                key={item.id}
                className={`flex w-full items-center gap-2 rounded-lg px-4 font-semibold text-gray-600 text-left transition-colors`}
              >
                {index + 1}.{item.title}
              </li>
            ))}
          </ol>
        </div>

        {/* Right Side - Video Area */}
        <div className="relative flex-1  p-8">
          <div className="relative aspect-video size-80 md:size-96 bg-black overflow-hidden ">
            {!isPlaying ? (
              <div className="absolute inset-0 flex flex-col items-start justify-between p-8 text-white">
                <div className="space-y-4">
                  <h1 className="text-2xl font-bold">
                    Crowdfunding: Invest in
                    <div className="text-4xl text-primary-light">
                      tabstartup Inc.
                      <br />
                      USA{" "}
                      <span className="inline-block rounded-full border-2 p-1">
                        🇺🇸
                      </span>
                    </div>
                  </h1>
                  <p className="text-2xl">
                    Starts from{" "}
                    <span className="text-3xl font-bold">${"5,000"}</span>
                  </p>
                </div>

                <div className="w-full space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <BsEnvelope className="h-5 w-5" />
                      <span>invest@tabstartup.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BsGlobe className="h-5 w-5" />
                      <span>tabstartup.com/invest</span>
                    </div>
                  </div>

                  <div className="flex items-end justify-between">
                    <p>Closing Date: 31 January 2025</p>
                    <div className="rounded-lg bg-primary-light p-2 text-center text-black">
                      <div className="text-2xl font-bold">247</div>
                      <div className="text-sm">
                        Bangladeshi
                        <br />
                        Angel Investors
                      </div>
                    </div>
                  </div>
                </div>

                {/* Play Button Overlay */}
                <button
                  onClick={handlePlayClick}
                  className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform hover:scale-110"
                >
                  <BsPlayCircle className="h-10 w-10 text-white" />
                </button>
              </div>
            ) : (
              <video controls className="h-full w-full" src="/placeholder.mp4">
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

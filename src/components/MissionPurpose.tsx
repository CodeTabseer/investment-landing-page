import React from "react";
import PrimaryButton from "./ui/PrimaryButton";

const MissionPurpose = () => {
  // const purposeDescriptions = [
  //     {
  //         id:'1',
  //         description: ""
  //     }
  // ]

  return (  
    <div className="max-w-6xl mx-auto px-4 md:px-0">
      <h1 className="text-3xl font-bold text-gray-600">
        Our Mission / Purpose
      </h1>
      <p className="mt-5 text-gray-500 md:ps-5 font-semibold">
        TabStartup aims to empower high-potential startups by providing
        world-class mentorship, access to funding, and a strong network of
        investors and partners. Our mission is to bridge the gap between
        ambition and execution, ensuring every entrepreneur has the support
        needed to build a scalable and impactful business.
      </p>
      <p className="mt-5 text-gray-500 md:ps-5 font-semibold">
        We focus on creating a supportive ecosystem that fosters innovation and
        drives growth. Through structured accelerator programs and strategic
        partnerships, we help startups navigate the challenges of scaling their
        businesses and achieving success.
      </p>
      <p className="mt-5 text-gray-500 md:ps-5 font-semibold">
        Our goal is to enable entrepreneurs to turn their visionary ideas into
        reality. By connecting startups with the right resources and experts, we
        provide the foundation for lasting success and global impact. At
        TabStartup, we believe that with the right support, every startup has
        the potential to succeed and make a difference. Join us in building the
        future of entrepreneurship.
      </p>
      <p className="mt-5 text-gray-500 md:ps-5 font-semibold">
        Through a collaborative approach, we aim to create an inclusive
        environment where entrepreneurs, regardless of their background, can
        access the tools and networks they need. TabStartup is dedicated to
        helping startups unlock their full potential and create positive change.
      </p>
      <p className="mt-5 text-gray-500 md:ps-5 font-semibold">
        We envision a world where every innovative idea is nurtured, funded, and
        supported by a thriving community of mentors, investors, and partners.
        At TabStartup, we provide the platform for startups to grow, scale, and
        succeed globally.
      </p>
      <div className="flex justify-center mt-5">
        <PrimaryButton title="About Tab startup" icon={''}/>
      </div>
    </div>
  );
};

export default MissionPurpose;

/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import ExtendedServices from "./ExtendedServices";

const Initiatives: React.FC = () => {
  return (
    <section className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-sm text-primary-light font-semibold">
          How Will the Funds Be Used?
        </h3>
        <h2 className="text-3xl font-bold text-gray-600 mt-2">
          Be a Part of Our Exciting Initiatives
        </h2>
        <p className="mt-4 text-gray-700">
          TabStartup is an umbrella organization hosting multiple services that
          align with our core vision of empowering startups and entrepreneurs
          globally. One such key initiative is TabStartup Pay, a service
          designed to streamline international payments for freelancers and
          remote professionals.
        </p>
        <p className="mt-4 text-gray-700">
          To create more employment opportunities and support Bangladesh's
          growing freelance market, we believe it’s essential to go beyond just
          improving payment solutions. Along with better payment systems, we
          need to nurture a highly skilled freelance workforce capable of
          delivering work that meets international standards.
        </p>
        <p className="mt-4 text-gray-700">
          Considering these factors, we aim to focus on the following five key
          initiatives to support this large demographic.
        </p>
        <p className="mt-2 text-gray-700">
          Providing freelancers and remote professionals with a seamless and
          cost-effective way to bring earned dollars from international
          platforms to Bangladesh is a service we have already started
          successfully. To scale this service further, the following steps need
          to be taken:
        </p>
        <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
          <li>Enhancing the mobile app to improve user experience.</li>
          <li>Setting up a high-quality call center in Bangladesh.</li>
          <li>
            Integrating this service directly with 10 more banks in the country.
          </li>
          <li>Bringing more freelancers onto the platform.</li>
          <li>Ensuring an adequate workforce to support operations.</li>
          <li>
            Making the platform familiar among expatriates in the USA so they
            can use it to send money home easily.
          </li>
          <li>
            Offering credit cards to Bangladeshi students studying in the USA.
          </li>
          <li>Providing loans to freelancers when needed.</li>
          <li>
            Expanding the service to Canada, Europe, Saudi Arabia, the UAE, and
            several other countries.
          </li>
        </ul>
        <p className="mt-6 text-gray-700">
          Over the next few years, scaling these initiatives could create a
          profound impact on the lives of millions of young individuals,
          empowering them to thrive as global citizens.
        </p>
      </div>
      <ExtendedServices />
    </section>
  );
};

export default Initiatives;

'use client';

import React from 'react';
import { FaCog, FaBuilding, FaShoppingCart, FaHeart } from 'react-icons/fa';

const services = [
  {
    icon: <FaBuilding className="text-primary-light text-3xl" />, 
    title: 'tabstartup Academy',
    description: 'Enhancing the skills of freelancers so that they can earn more and stay updated with new technologies.'
  },
  {
    icon: <FaCog className="text-primary-light text-3xl" />, 
    title: 'tabstartup Services',
    description: 'Establishing a marketing firm in the USA to secure larger projects, which will then be executed by talented individuals from Bangladesh.'
  },
  {
    icon: <FaShoppingCart className="text-primary-light text-3xl" />, 
    title: 'tabstartup Commerce',
    description: 'Build a platform to facilitate cross-border commerce for those looking to penetrate international markets while operating from home.'
  },
  {
    icon: <FaHeart className="text-primary-light text-3xl" />, 
    title: 'tabstartup Foundation',
    description: 'This initiative will provide free technology education and other opportunities for underprivileged students to help them become self-reliant.'
  }
];

const ExtendedServices: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold">Extended Services</h2>
        <p className="mt-2 text-gray-400">Building the ecosystem to create the better opportunity for the younger generation!</p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 border-2 rounded-full border-primary-light p-4">{service.icon}</div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtendedServices;

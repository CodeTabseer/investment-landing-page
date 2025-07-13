import {
  FaHandshake,
  FaCreditCard,
  FaMoneyBillWave,
  FaUsers,
  FaChartLine,
  FaDollarSign,
} from "react-icons/fa";

const benefits = [
  {
    icon: <FaHandshake className="text-primary-light text-3xl" />,
    title: "Shares in tabstartup Inc.",
    description: "SAFE Note: 15% Discount, No Cap.",
  },
  {
    icon: <FaCreditCard className="text-primary-light text-3xl" />,
    title: "Special Credit Card",
    description: "Credit limit will be 80% of your total investment.",
  },
  {
    icon: <FaMoneyBillWave className="text-primary-light text-3xl" />,
    title: "Free USD Transfers to Bangladesh",
    description: "Free send money to Bangladesh for 2 years.",
  },
  {
    icon: <FaUsers className="text-primary-light text-3xl" />,
    title: "Elite Membership",
    description: "Special cell for any personal or business assistance.",
  },
  {
    icon: <FaChartLine className="text-primary-light text-3xl" />,
    title: "Opportunity to Sell Shares",
    description: "After 1 year of investing, you can sell your share.",
  },
  {
    icon: <FaDollarSign className="text-primary-light text-3xl" />,
    title: "Dividends",
    description: "Earn dividends, expected from 2026.",
  },
];

const WhatYouWillReceive = () => {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-20 text-center">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-600">
        What You Will Receive
      </h2>
      <p className="text-gray-600 mt-2">
        Our angel investors will be able to enjoy attractive benefits.
      </p>
      <div className="w-16 border-t-2 border-gray-300 mx-auto my-4"></div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="border-2 border-primary-light p-4 rounded-full">
              {benefit.icon}
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatYouWillReceive;

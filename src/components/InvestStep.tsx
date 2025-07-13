import React from "react";
import { RiFlowChart } from "react-icons/ri";

const InvestStep = () => {
  return (
    <div className="py-14 bg-gray-800 text-white flex justify-center">
      <div className="space-y-5">
        <div className="flex justify-center">
        <RiFlowChart className="text-3xl" />
        </div>
        <div className="text-3xl font-bold">3 Easy Steps to Invest</div>
        <div className="flex gap-4 justify-center">
          <p className="">-------</p>
          <h1>Secured and Private</h1>
          <p className="">-------</p>
        </div>
      </div>
    </div>
  );
};

export default InvestStep;

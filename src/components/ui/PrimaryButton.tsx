/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";

const PrimaryButton = ({title, icon}:{title:string, icon:any}) => {
  return (
    <div>
      <button className="bg-primary-light flex items-center rounded-full font-semibold px-8 py-2 text-white">
       {icon} {title}
      </button>
    </div>
  );
};

export default PrimaryButton;

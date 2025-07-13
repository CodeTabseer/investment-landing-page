import React from "react";

const WhyCrowdfunding = [
  {
    title: "Access to a Larger Pool of Capital",
    description:
      "Traditional fundraising methods can limit startups to a small group of investors. Crowdfunding opens the doors to a broader range of investors, allowing startups to tap into a larger pool of capital and diversify their funding sources.",
  },
  {
    title: "Validation of Ideas and Market Demand",
    description:
      "Crowdfunding provides startups with the opportunity to test their ideas and validate their products or services in the market. By attracting early backers, startups can gauge customer interest and demand before scaling operations.",
  },
  {
    title: "Building a Strong Community of Supporters",
    description:
      "Crowdfunding not only provides funding but also builds a passionate community of investors, users, and brand advocates who support the startup’s vision. This community can help with marketing, feedback, and word-of-mouth promotion.",
  },
  {
    title: "Reduced Dependency on Traditional Investors",
    description:
      "Crowdfunding enables startups to avoid the complexities and pressures of relying solely on venture capitalists or angel investors. Instead, they can secure funding from individuals who believe in their vision and are aligned with their long-term goals.",
  },
  {
    title: "Increased Visibility and Marketing Exposure",
    description:
      "Launching a crowdfunding campaign helps generate buzz around the startup. It creates visibility in the marketplace, attracts media attention, and can help secure strategic partnerships and business opportunities.",
  },
  {
    title: "Flexibility in Fundraising",
    description:
      "Crowdfunding provides startups with flexibility in how much money they need to raise, and the ability to set funding goals that are realistic and achievable. This approach allows for more tailored fundraising strategies compared to traditional methods.",
  },
];

const Crowdfunding: React.FC = () => {
  return (
    <section className="max-w-6xl px-4 md:px-0 mx-auto sm:p-10 md:p-12 ">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-600 mb-6">
        Why Crowdfunding?
      </h2>
      <p className="text-gray-700 mb-6">
        Crowdfunding is revolutionizing the way startups raise capital, offering
        unique advantages for both entrepreneurs and investors. Here’s why
        crowdfunding through TabStartup is a powerful tool for startup success:
      </p>

      {/* Option 1: Wealthy Individuals in Bangladesh */}
      <div>
        {WhyCrowdfunding?.map((item, index) => {
          return (
            <div key={index} className="mb-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-600 mb-2">
                {index+1}) {item?.title}
              </h3>
              <p className="text-gray-700">
                {item?.description}
              </p>
            </div>
          );
        })}
      </div>

      
    </section>
  );
};

export default Crowdfunding;

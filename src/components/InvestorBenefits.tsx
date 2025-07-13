const benefits = [
  {
    title: "Access to High-Growth Startups",
    description:
      "Gain exclusive access to a curated list of high-potential, early-stage startups with scalable business models and innovative solutions, ensuring high-quality opportunities aligned with your goals.",
  },
  {
    title: "Expertly Curated Investment Opportunities",
    description:
      "Invest with confidence in startups that have been vetted and matched to your preferences, ensuring investment opportunities that align with your investment strategy.",
  },
  {
    title: "Mentorship & Strategic Support",
    description:
      "Collaborate with seasoned entrepreneurs, business leaders, and industry experts who provide guidance and support to startups, maximizing the chances of success.",
  },
  {
    title: "Early-Stage Investment Deals",
    description:
      "Participate in investment rounds at the seed stage, giving you an opportunity to secure equity at attractive valuations with long-term growth potential.",
  },
  {
    title: "Global Networking & Cross-Border Opportunities",
    description:
      "Connect with other investors, entrepreneurs, and industry partners worldwide, opening up international collaboration, funding, and scaling opportunities.",
  },
  {
    title: "Exclusive Demo Days & Pitch Events",
    description:
      "Attend pitch events and demo days where startups present their products and visions to investors, giving you a front-row seat to exciting new opportunities.",
  },
  {
    title: "Ongoing Support & Portfolio Management",
    description:
      "Benefit from continued access to the TabStartup network after investing, ensuring long-term relationships with startups and other investors, and receive follow-up support to track the success of your portfolio.",
  },
  {
    title: "Invest in the Future – Join Now",
    description:
      "Ready to find your next big opportunity? Join our growing network of investors and gain early access to high-potential startups looking to scale.",
  },
];

const InvestorBenefits = () => {
  return (
    <section className="py-12 px-6 md:px-12 text-gray-600">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center">
        The benefits you will receive as an investor
      </h2>
      <p className="text-center text-gray-600 mt-2">
        Below are the key advantages you will gain by investing in TabStartup.
      </p>

      {/* Benefits List */}
      <div className="mt-8 max-w-6xl mx-auto">
        {benefits.map((benefit, index) => (
          <div key={index} className="mb-6">
            <h3 className="font-semibold text-xl">
              {index + 1}. {benefit.title}
            </h3>
            <p className="text-gray-600  mt-1">{benefit.description}</p>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <p className="text-sm text-gray-500 text-center mt-8">
        After this, we will no longer be accepting angel investors, and the
        process will move to venture capital firms.
      </p>
    </section>
  );
};

export default InvestorBenefits;

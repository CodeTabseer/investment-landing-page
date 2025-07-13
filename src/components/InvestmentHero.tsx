import { AiOutlineSend } from "react-icons/ai";

const InvestmentHero = () => {
  return (
    <section
      className="relative h-screen flex flex-col justify-center text-white px-10 bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/asset/investHero/cityImage.jpg')",
      }}
    >
      {/* Content Container */}
      <div className="max-w-2xl">
        {/* Icon */}
        <div className="mb-4">
          <AiOutlineSend size={40} className="text-primary-light" />
        </div>

        {/* Title & Text */}
        <h3 className="text-lg font-semibold uppercase tracking-wide">
          Invest in tabstartup Inc. (USA)
        </h3>
        <h1 className="text-4xl md:text-5xl font-bold my-3">
          Be One of our Proud Angel Investors!
        </h1>
        <p className="text-gray-300 text-lg">
          To get the private investment link, please email to{" "}
          <a
            href="mailto:info@tabstartup.com"
            className="text-primary-light underline"
          >
            invest@tabstartup.com
          </a>{" "}
          along with your details including your LinkedIn profile.
        </p>
      </div>

      {/* Button (Bottom Right) */}
      <div className="absolute bottom-10 right-10">
        <button className="bg-primary-light text-black font-semibold px-6 py-3 rounded-full shadow-md transition">
          Invest via Private Link
        </button>
      </div>
    </section>
  );
};

export default InvestmentHero;

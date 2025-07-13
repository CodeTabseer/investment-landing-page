import Image from "next/image";
import investImage from "../../public/asset/summary/summary.png";

const WhoCanInvest = () => {
  return (
    <section className="bg-primary-light py-10 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Left Side: Text Content */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Who Can Invest?
          </h2>
          <p className="text-gray-800 mb-4">
            TabStartup connects angel investors, VCs, corporate, institutional,
            and impact investors with early-stage startups. It offers tailored
            investment opportunities across various sectors. The platform
            empowers investors to support innovative businesses and foster
            growth.
          </p>
          <p className="text-gray-800 mb-4">
            TabStartup provides diverse investment opportunities for different
            types of investors, focusing on early-stage startups. It enables
            support for high-growth companies across industries.
          </p>
          <p className="text-gray-800">
            TabStartup connects investors with high-potential startups, offering
            tailored opportunities for growth.
          </p>
        </div>

        {/* Right Side: Image & Card */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-sm">
            <Image
              src={investImage}
              alt="Investment Promo"
              width={500}
              height={500}
              className="w-full object-cover"
            />
            <div className="p-4">
              <p className="text-lg font-bold text-gray-900">
                Know Anyone who can Invest?
              </p>
              <p className="text-gray-700 text-sm">
                Refer and win $500 on each successful investment.
              </p>
              <button className="mt-4 w-full bg-primary-light text-white font-semibold py-2 rounded-lg transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoCanInvest;

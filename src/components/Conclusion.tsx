/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import conclusionImage from "../../public/asset/conclusion/conclusion.webp";

const Conclusion = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-gray-600">Conclusion</h2>
      <div className="mt-6 flex flex-col justify-center md:flex-row items-center md:items-start gap-6">
        {/* Image Section */}
        <div className="w-full md:w-1/3">
          <Image
            src={conclusionImage} // Replace with your actual image path
            alt="Business team analyzing investment opportunities"
            width={400}
            height={400}
            className="rounded-md shadow-md"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-2/3 text-gray-700 leading-relaxed md:mt-20">
          <p>
            At TabStartup, we believe that the right mentorship, funding, and
            resources can turn great ideas into transformative businesses. As an
            investor, you play a crucial role in shaping the future of
            innovation by supporting startups with the potential to change
            industries and improve lives.
          </p>

          <p className="mt-4">
            By joining our network, you gain access to exclusive investment
            opportunities, a vibrant community of entrepreneurs and experts, and
            the chance to make a meaningful impact while achieving financial
            growth. Whether you're an angel investor, venture capitalist, or
            corporate partner, TabStartup offers you the platform to invest in
            the future.
          </p>

          <p className="mt-4 font-medium">
            You too can become a true friend and companion on this journey!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Conclusion;

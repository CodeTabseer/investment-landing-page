import Image from "next/image";
import cardImage1 from "../../public/asset/card/feature-5.webp";

export default function ProcessSteps() {
  const steps = [
    {
      title: "Express Interest",
      description:
        "To begin, send an email to invest@tabstartup.com with your full name, address, business or professional details, phone number, LinkedIn profile (if available), and the amount you'd like to invest.",
      image: cardImage1,
    },
    {
      title: "Profile Review",
      description:
        "Once we receive your information, we will review your profile. If deemed eligible, you will be sent a private link to proceed with your investment, where you can make the payment online securely.",
      image: cardImage1,
    },
    {
      title: "Legal Process",
      description:
        "AngelList will handle all the legal aspects, including your agreement and SAFE note, according to U.S. law. For more details, please visit the AngelList Information page.",
      image: cardImage1,
    },
  ];

  return (
    <div className="mx-auto px-4 py-12 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col space-y-4 shadow-lg border">
            <div className="relative aspect-[7/4] w-full overflow-hidden bg-gray-100">
              <Image
                src={step.image || "/placeholder.svg"}
                alt={`Step ${index + 1} illustration`}
                fill
                className="object-fill filter grayscale"
                priority={index === 0}
              />
            </div>
            <div className="p-3 py-10">
              <h3 className="text-2xl font-bold text-gray-700">{step.title}</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

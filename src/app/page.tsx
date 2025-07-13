import Banner from "@/components/Banner";
import Conclusion from "@/components/Conclusion";
import Crowdfunding from "@/components/Crowdfunding";
import ImportantDisclaimer from "@/components/ImportantDisclaimer";
import Introduction from "@/components/Indroduction";
import Initiatives from "@/components/Initiatives";
import InvestmentHero from "@/components/InvestmentHero";
import InvestorBenefits from "@/components/InvestorBenefits";
import InvestStep from "@/components/InvestStep";
import MissionPurpose from "@/components/MissionPurpose";
import Navbar from "@/components/Navbar";
import ProcessSteps from "@/components/ProcessSteps";
import Summary from "@/components/Summary";
import VideoLanding from "@/components/VideoLoading";
import WhatYouWillReceive from "@/components/WhatYouWillReceive ";
import WhoCanInvest from "@/components/WhoCanInvest";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="space-y-20">
        <Banner />
        <Summary />
        <ImportantDisclaimer />
        <VideoLanding />
        <Introduction />
        <MissionPurpose />
        <Initiatives />
        <Crowdfunding />
        <WhoCanInvest />
        <WhatYouWillReceive />
        <InvestorBenefits />
        <InvestStep />
        <ProcessSteps />
        <Conclusion />
        <InvestmentHero/>
      </div>
    </main>
  );
}

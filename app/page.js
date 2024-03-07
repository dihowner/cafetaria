import Footer from "@/components/Footer";
import Header from "@/components/Headerr/Header";
import EarnonCafetaria from "@/components/Pages/Home/EarnonCafetaria";
import GetStarted from "@/components/Pages/Home/GetStarted";
import HeroSection from "@/components/Pages/Home/HeroSection";
import Recommended from "@/components/Pages/Home/Recommended";
import VisitStore from "@/components/Pages/Home/VisitStore";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Header />
      <div className="flex flex-col gap-y-12">
        <HeroSection />
        <GetStarted />
        <Recommended />
        <VisitStore />
        <EarnonCafetaria />
        <Footer />
      </div>
    </main>
  );
}

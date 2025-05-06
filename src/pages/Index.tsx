import Header from "@/components/money-info/Header";
import Hero from "@/components/money-info/Hero";
import RoleOfCash from "@/components/money-info/RoleOfCash";
import MoneyTypes from "@/components/money-info/MoneyTypes";
import MoneyStorage from "@/components/money-info/MoneyStorage";
import CallToAction from "@/components/money-info/CallToAction";
import Footer from "@/components/money-info/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      <Hero />
      <RoleOfCash />
      <MoneyTypes />
      <MoneyStorage />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
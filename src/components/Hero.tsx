import Blogs from "./Blogs";
import Brands from "./Brands";
import CardsBar from "./CardsBar";
import CodeSoln from "./CodeSoln";
import CompanyServices from "./CompanyServices";
import FeatureBox from "./FeatureBox";
import Footer from "./Footer";
import MainFooter from "./MainFooter";
import Patnership from "./Patnership";
import ProductsBox from "./ProductsBox";
import Button from "./reusable/Button";
import SubscribeBox from "./SubscribeBox";
import TechStackBox from "./TechStackBox";
// import Services from "./Services";

export default function Hero() {
  return (
    <div className="min-h-screen">
      <div className="w-full flex flex-col items-center justify-center gap-10 mt-72">
        <h1 className="text-center text-7xl px-8">
          Reach more customers wherever they are,{" "}
          <span className="line-through">whatever</span> they’re on
        </h1>
        <p className="text-xl w-full flex justify-center">
          Engage them on every channel, in every scenario – from our platform or
          yours
        </p>
        <div className="w-full flex gap-4 items-center justify-center">
          <Button text="Try for free ->" variant="VAR1" handel={() => {}} />
          <Button
            text="Contact an expert ->"
            variant="VAR3"
            handel={() => {}}
          />
        </div>
      </div>
      <div className="w-full mt-16">
        <img src="https://cdn-web.infobip.com/uploads/2024/12/header-hero-home-page.png" />
      </div>
      <div className="w-full flex items-center justify-center mt-24">
        <Brands />
      </div>
      <div className="w-full flex items-center justify-center mt-24">
        <CardsBar />
      </div>
      <div className="w-full flex flex-col items-center justify-center mt-24 gap-12">
        <h1 className="text-5xl w-1/2 font-light text-center">
          Build any use case or conversational scenario
        </h1>
        <FeatureBox />
      </div>
      <div className="w-full flex flex-col items-center justify-center mt-24 gap-12">
        <h1 className="text-5xl w-5/12 font-light text-center">
          Easy-to-use cloud products for marketing, sales, and support
        </h1>
        <ProductsBox />
      </div>
      <CodeSoln />
      <div className="w-full flex flex-col items-center justify-center mt-24 gap-12">
        <Patnership />
      </div>
      <div className="w-full flex flex-col items-center justify-center mt-24 gap-12">
        <TechStackBox />
      </div>
      <div className="w-full flex flex-col items-center justify-center mt-24 gap-12">
        <CompanyServices />
      </div>
      <div className="w-full flex items-center justify-center mt-24">
        <Blogs />
      </div>
      <div className="w-full flex flex-col items-center justify-center mt-24 gap-12">
        <SubscribeBox />
      </div>
      <div className="w-full flex flex-col items-center justify-center mt-6 gap-12">
        <MainFooter />
      </div>
      <div className="w-full flex flex-col items-center justify-center my-6 gap-12">
        <Footer />
      </div>
    </div>
  );
}

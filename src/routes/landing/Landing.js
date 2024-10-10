import HeroPreview from "./HeroPreview";
import PortfolioPreview from "./PortfolioPreview";
import ContactPreview from "./ContactPreview";
import { Footer } from "../../components";
import ScrollButton from "../../components/ScrollButton";
import { useEffect } from "react";
import "./Landing.sass";

const Mainpage = () => {
  useEffect(() => {
    document.title = "Ira C. | Developer and Designer";
    window.scrollTo(0, 0);
  })
  return (
    <main className="landing">
      <HeroPreview />
      <PortfolioPreview />
      <ContactPreview />
      <ScrollButton />
      <Footer />
    </main>
  );
};

export default Mainpage;

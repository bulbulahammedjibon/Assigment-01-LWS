// import Navbar from "./Component/Navbar Component/Navbar";

import AboutSection from "./Component/AboutSection/AboutSection";
import AvilableSection from "./Component/Available/AvilableSection";
import ContactSection from "./Component/Contact Section/ContactSection";
import CTASection from "./Component/CTA Section/CTASection";
import FAQSection from "./Component/FAQ Section/FAQSection";
import FeatureSection from "./Component/FeatureSection/FeatureSection";
import FooterSection from "./Component/Footer/FooterSection";
import HeroSection from "./Component/HeroSection/HeroSection";
import Navbar from "./Component/Navbar Component/Navbar";
import TeamSection from "./Component/Team Section/TeamSection";

// export default function App() {
//   return <Navbar />;
// }

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <AvilableSection />
      <AboutSection />
      <CTASection />
      <FAQSection />
      <TeamSection />
      <ContactSection />
      <FooterSection />
    </>
  );
};

export default App;

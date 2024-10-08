import AboutSectionImage from "./AboutSectionImage/AboutSectionImage";
import AboutSectionText from "./AboutSectionText/AboutSectionText";

const AboutSection = () => {
  return (
    <section className="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <div>
          <div className="-mx-4 flex flex-wrap items-center">
            <AboutSectionText />

            <AboutSectionImage />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

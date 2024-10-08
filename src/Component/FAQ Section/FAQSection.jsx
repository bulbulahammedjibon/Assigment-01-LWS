import React from "react";
import FAQCard from "./FAQ Card/FAQCard";
import FAQDotUpperSvg from "./FAQ Dot Section/FAQDotUpperSvg";
import FAQHeading from "./FAQ Heading/FAQHeading";
import FAQDotBelowSvg from "./FAQDotBelowSvg/FAQDotBelowSvg";

const FAQSection = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]">
      <div className="container mx-auto">
        <FAQHeading />
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <FAQCard />
            <FAQCard />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <FAQCard />
            <FAQCard />
          </div>
        </div>
      </div>
      <div>
        <FAQDotUpperSvg />
        <FAQDotBelowSvg />
      </div>
    </section>
  );
};

export default FAQSection;

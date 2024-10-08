import React from "react";
import TeamProfile from "./TaemProfileSection/TeamProfile";
import TeamHeadingSection from "./Team Heading Section/TeamHeadingSection";

const TeamSection = () => {
  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container mx-auto">
        <TeamHeadingSection />
        <div className="-mx-4 flex flex-wrap justify-center">
          {/* Team Profile No-1 */}
          <TeamProfile
            name={"Melissa Tatcher"}
            designation={"Marketing Expert"}
            image={
              "https://cdn.tailgrids.com/1.0/assets/images/team/image-07/image-01.png"
            }
          />
          {/* Team Profile No-2 */}
          <TeamProfile
            name={"Stuard Ferrel"}
            designation={"Digital Marketer"}
            image={
              "https://cdn.tailgrids.com/1.0/assets/images/team/image-07/image-02.png"
            }
          />
          {/* Team Profile No-2 */}
          <TeamProfile
            name={"Eva Hudson"}
            designation={"Creative Designer"}
            image={
              "https://cdn.tailgrids.com/1.0/assets/images/team/image-07/image-03.png"
            }
          />
          {/* Team Profile No-4 */}
          <TeamProfile
            name={"Jackie Sanders"}
            designation={"Founder of Facebook"}
            image={
              "https://cdn.tailgrids.com/1.0/assets/images/team/image-07/image-04.png"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

import React from "react";
import GrabSectionHeading from "./GrabSectionHeading/GrabSectionHeading";
import PropertyItem from "./Property Item/PropertyItem";

const AvilableSection = () => {
  const realEstateData = [
    {
      id: 1,
      title: "Modern Family Home",
      price: "$450,000",
      bedrooms: 4,
      bathrooms: 3,
      image: "../../../assets/images/house/1.jpg",
    },
    {
      id: 2,
      title: "Luxury Condo Downtown",
      price: "$750,000",
      bedrooms: 2,
      bathrooms: 2,
      image: "../../../assets/images/house/3.jpg",
    },
    {
      id: 3,
      title: "Cozy Suburban House",
      price: "$320,000",
      bedrooms: 3,
      bathrooms: 2,
      image: "../../../assets/images/house/6.jpg",
    },
    {
      id: 4,
      title: "Beachfront Villa",
      price: "$1,200,000",
      bedrooms: 5,
      bathrooms: 4,
      image: "../../../assets/images/house/4.jpg ",
    },
    {
      id: 5,
      title: "Charming Cottage",
      price: "$275,000",
      bedrooms: 2,
      bathrooms: 1,
      image: "../../../assets/images/house/5.jpg",
    },

    {
      id: 7,
      title: "Mountain Retreat Cabin",
      price: "$550,000",
      bedrooms: 4,
      bathrooms: 3,
      image: "../../../assets/images/house/7.jpg",
    },
  ];

  return (
    <section>
      <div className="container">
        <GrabSectionHeading />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {realEstateData.map((data) => (
            <PropertyItem key={data.id} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvilableSection;

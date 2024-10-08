import React from "react";

const FooterLatestBlogCard = ({ img, title }) => {
  return (
    <a href="blog-details.html" className="group flex items-center gap-[22px]">
      <div className="overflow-hidden rounded">
        <img src={img} alt="blog" />
      </div>
      <span className="max-w-[180px] text-base text-gray-7 group-hover:text-white">
        {title}
      </span>
    </a>
  );
};

export default FooterLatestBlogCard;

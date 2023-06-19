import React from "react";

interface HeadingProps {
  title?: string;
  subtitle?: string;
  subtitletwo?: string;

  hero?: boolean;
}

const Heading: React.FC<HeadingProps> = ({
  title,
  subtitle,
  subtitletwo,

  hero,
}) => {
  return (
    <div>
      <div className={` text-[6rem] sm:text-[5rem] xl:text-[6rem] text-blue font-[400] 
        ${hero ? " xl:text-[10.5rem] 2xl:text-[12rem] first-letter:text-light font-roboto fron-bold text-drak" : ""}
      `}>
        {title}
      </div>
      <div className={`
        ${hero ? "text-[2rem] text-light" : ""}
      `}>
        {subtitle}
      </div>
      <div className={`
        ${hero ? "text-[2rem] text-drak" : ""}
      `}>
        {subtitletwo}
      </div>
    </div>
  );
};

export default Heading;

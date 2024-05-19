import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-between gap-20">
      {technologies.map((technology) => (
        <div
          className="w-28 h-28
          green-pink-gradient p-[1px] rounded-[20px] shadow-card"
          key={technology.name}
        >
          <div className="w-full h-full bg-tertiary rounded-[20px] flex items-center">
            <img
              className="w-26 cover center center p-2 "
              alt={technology.name}
              src={technology.icon}
            />
          </div>
          <h3 className="text-white text-[20px] font-bold text-center mt-2">
            {technology.name}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");

import React, { type ReactElement } from "react";

export default function NavbarCard(): ReactElement {
  return (
    <div className="w-fit h-fit bg-[#1C2D27] flex flex-col font-raleway text-xl text-white py-5 px-5 gap-5">
      <div className="flex justify-start items-center cursor-pointer">
        Our Mission
      </div>
      <div className="flex justify-start items-center cursor-pointer">
        Our Story
      </div>
      <div className="flex justify-start items-center cursor-pointer">
        Our Achievements
      </div>
      <div className="flex justify-start items-center cursor-pointer">
        Our Journey
      </div>
      <div className="flex justify-start items-center cursor-pointer">
        Our Vision
      </div>
      <div className="flex justify-start items-center cursor-pointer">
        Contribute to our Cause
      </div>
    </div>
  );
}

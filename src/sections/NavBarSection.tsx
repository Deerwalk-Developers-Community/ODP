import React, { useState } from "react";
import Logo from "../../public/images/Logo";
import Hamburger from "../../public/images/hamburger";
import NavbarCard from "../components/NavbarCard";

export default function NavBarSection() {
  const [isNavbarCardVisible, setNavbarCardVisible] = useState(false);

  const toggleNavbarCard = () => {
    setNavbarCardVisible(!isNavbarCardVisible);
  };

  return (
    <div className="bg-[#1C2D27] w-full h-[6rem] fixed top-0 z-10 flex flex-row lg:justify-between justify-end px-10">
      <div className="lg:block hidden">
        <Logo width="75px" />
      </div>
      <div className="flex lg:gap-32 gap-4 text-white font-sans justify-center items-center text-lg lg:text-xl">
        <div className="h-full w-[5rem] flex justify-center items-center">
          Events
        </div>
        <div className="h-full w-[5rem] flex justify-center items-center">
          Gallery
        </div>
        <div className="relative flex justify-center items-center cursor-pointer">
          <Hamburger onClick={toggleNavbarCard} />

          {isNavbarCardVisible && (
            <>
              <div
                className="fixed inset-0 bg-black opacity-25 z-9"
                onClick={toggleNavbarCard}
              />

              <div className="absolute top-full right-0 w-max bg-[#1C2D27] shadow-lg rounded-lg mt-5 cursor-default">
                <NavbarCard />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

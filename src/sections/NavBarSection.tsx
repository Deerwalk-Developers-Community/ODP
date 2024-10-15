import React, { useState, useEffect } from "react";
import Logo from "../../public/images/Logo";
import Hamburger from "../../public/images/hamburger";
import NavbarCard from "../components/NavbarCard";

export default function NavBarSection() {
    const [isNavbarCardVisible, setNavbarCardVisible] = useState(false);

    const toggleNavbarCard = () => {
        console.log("Toggle button clicked!");
        setNavbarCardVisible(!isNavbarCardVisible);
    };

    useEffect(() => {
        console.log("NavbarCard visibility changed:", isNavbarCardVisible);
    }, [isNavbarCardVisible]);

    return (
        <div className="bg-[#1C2D27] w-full h-[6rem] fixed top-0 z-10 flex flex-row justify-between px-10">
            <div>
                <Logo width="75px" />
            </div>
            <div className="flex gap-32 text-white font-sans justify-center items-center text-xl">
                <div className="h-full w-[5rem] flex justify-center items-center">
                    Events
                </div>
                <div className="h-full w-[5rem] flex justify-center items-center">
                    Gallery
                </div>
                <div
                    className="h-full w-[5rem] flex justify-center items-center cursor-pointer bg-red-600"
                    onClick={toggleNavbarCard}
                >
                    <Hamburger />
                </div>
            </div>
            {isNavbarCardVisible && (
                <div className="absolute top-[6rem] left-0 w-full">
                    <NavbarCard />
                </div>
            )}
        </div>
    );
}

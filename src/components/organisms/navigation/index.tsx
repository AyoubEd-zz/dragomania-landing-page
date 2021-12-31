import React, { useState, useEffect } from "react";
import NavBrand from "../../molecules/navigation/NavBrand";
import NavButton from "../../molecules/navigation/NavButton";
import NavList from "../../molecules/navigation/NavList";
import NavToggle from "../../molecules/navigation/NavToggle";

const Navigation: React.FC = () => {
  const [isActive, setIsActive] = useState(false)
  const [scrolled, setNavbar] = useState(false)
  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    window.addEventListener("scroll", changeBackground)
  })

  return (
    <div>
      <nav className={"p-2 mt-0 fixed w-full z-10 top-0 " + (scrolled ? "bg-navy-secondary" : "bg-gradient-to-b from-grey")}>
         <div className='container mx-auto flex flex-row flex-wrap xl:flex-nowrap items-center'>
             <NavBrand title='Dragomania' />

             <NavToggle btnClick={() => setIsActive(!isActive)} />

             <NavList isActive={isActive} />

             <NavButton />
        </div>
      </nav>
      <section className="w-full h-screen bg-dragomaniabackground bg-cover bg-center"></section>
    </div>
  );
};

export default Navigation;

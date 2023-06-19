import React from "react";
import { Link } from "react-router-dom";
import useModal from "../../Hooks/useModal";

const Navigation = () => {
  const ModalContent = useModal();
  const LinkStyled = "text-light hover:bg-darkblue p-2 text-[18px] font-[400] cursor-pointer";

  // Funktion til at håndtere klikbegivenheden for 'SectionOne' sektion
  const handleClickOne = () => {
    const element = document.getElementById("SectionOne");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // Rul glat til elementet med id 'SectionOne'
    }
  };

  // Funktion til at håndtere klikbegivenheden for 'SectionTwo'sektion
  const handleClickTwo = () => {
    const element = document.getElementById("SectionTwo");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // Rul glat til elementet med id 'SectionTwo'
    }
  };

  // Funktion til at håndtere klikbegivenheden for 'Section3'sektion
  const handleClick3 = () => {
    const element = document.getElementById("Section3");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // Rul glat til elementet med id 'Section3'
    }
  };

  return (
    <div className={`flex flex-col md:flex-row justify-center sm:flex-col md:justify-start xl:justify-end gap-[15px]`}>
      <Link onClick={handleClickOne} className={LinkStyled} to={""}>
        Om te
      </Link>
      <Link onClick={handleClickTwo} className={LinkStyled} to={""}>
        Tilbud
      </Link>
      <Link onClick={handleClick3} className={LinkStyled} to={""}>
        Favoritter
      </Link>
      <div onClick={ModalContent.onOpen} className={LinkStyled}>
        Kontakt
      </div>
    </div>
  );
};

export default Navigation;

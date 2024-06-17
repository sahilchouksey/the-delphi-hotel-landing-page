import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LogoIcon from "@/assets/logo.svg";
import { NavItems, NavContactItems } from "./data";
import Text from "@/typography";
import Button from "@/components/ui/button";
import Image from "../ui/image";
import InstagramIcon from "@/assets/instagram.svg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage the menu open/close

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu open/close state
  };

  return (
    <div className="sticky top-0 z-[1000] container-full w-full bg-background w-full">
      <div className="container">
        <nav className="container-center navbar w-full flex justify-between items-center">
          <a className="navbar-brand" href="#">
            <img src={LogoIcon} alt="Logo" className="max-w-[15.5rem]" />
          </a>

          <div className="flex-1 flex flex-col justify-around pr-[3.5rem] pl-[4rem]">
            <ul className="w-full flex-1 flex flex-row text-primary list-none justify-end gap-8 items-center">
              {Object.entries(NavContactItems).map(([key, value]) => (
                <li
                  key={key}
                  className="min-w-min text-center flex justify-center items-center gap-4"
                >
                  <img src={value} alt={key} className="max-w-[2.4rem]" />
                  <Text
                    tag="span"
                    font="PrioriSans"
                    className="leading-[2.4rem] text-[1.6rem] capitalize"
                  >
                    {key}
                  </Text>
                </li>
              ))}
              <li className="ml-[3rem] hidden mdlg:block mdlg:relative top-[1px]">
                <button className="flex" onClick={handleMenuToggle}>
                  {" "}
                  <Text
                    tag="h2"
                    font="RankingsCaps"
                    className="uppercase text-[2rem] leading-[2.3rem] text-primary normal hamburger"
                  >
                    Menu
                  </Text>
                </button>
              </li>
            </ul>

            <ul className="mdlg:w-0 mdlg:hidden mdlg:h-0 w-full navbar-nav flex flex-row text-primary list-none justify-between">
              {Object.entries(NavItems).map(([key]) => (
                <li
                  key={key}
                  className="cursor-pointer relative before:absolute before:left-[51%] before:right-[51%] before:bottom-0 before:h-[1px] before:bg-[#1D1D1D] before:transition-all before:duration-300 before:ease-in-out before:hover:left-0 before:hover:right-0"
                >
                  <Text
                    tag="span"
                    font="PrioriSans"
                    className="leading-[2.4rem] text-[1.6rem] uppercase xl:text-[1.4rem]"
                  >
                    {key}
                  </Text>
                </li>
              ))}
            </ul>
          </div>

          <Button
            type="primary"
            width={200}
            height={50}
            backgroundColor="transparent"
            animation="custom"
            animationClassName="hover:!bg-primary hover:!text-background transition-all duration-300 ease-in-out"
            className="text-primary px-[5rem] py-[5.75rem] mdlg:py-[4.2rem] flex justify-center items-center"
            containerClassName="border-x-[1px] border-border"
          >
            <Text
              tag="span"
              font="MillerBanner"
              className="text-[2.6rem] leading-[3rem]"
            >
              Reserve
            </Text>
          </Button>
        </nav>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }} // Start from the left
            animate={{ x: 0 }} // Move to initial position
            exit={{ x: "-100%" }} // Animate back to the left when exiting
            transition={{ duration: 0.5, ease: "easeOut" }} // Smoother and quicker transition
            className="fixed inset-0 bg-white z-[999] flex flex-col items-center justify-center transform"
          >
            <button
              className="absolute top-[5rem] right-[5rem] text-primary"
              onClick={handleMenuToggle} // Close button for the overlay
            >
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <ul className="list-none text-center">
              {Object.entries(NavItems).map(([key]) => (
                <li key={key} className="min-w-min mb-[5rem] relative">
                  <Text
                    tag="span"
                    font="RankingsCaps"
                    className="text-[2.4rem] leading-[3.6rem] text-primary uppercase cursor-pointer relative before:absolute before:left-[51%] before:right-[51%] before:bottom-0 before:h-[1px] before:bg-[#1D1D1D] before:transition-all before:duration-300 before:ease-in-out before:hover:left-0 before:hover:right-0 before:top-[3rem]"
                  >
                    {key}
                  </Text>
                </li>
              ))}
              <li className="flex justify-center items-center">
                <div className="bg-[#EEE] min-w-min rounded-full p-[2rem] flex justify-center items-center ">
                  <Image src={InstagramIcon} alt="Instagram handle" />
                </div>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

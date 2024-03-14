import { useState } from "react";
import { Close, Logo, Menu } from "../assets";
import { navLinks } from "../constants";
import { Button } from "../components";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full py-4 flex justify-between items-center">
      <a href="/">
        <img
          src={Logo}
          alt="Logo"
          className="sm:w-[215px] w-[160px] object-contain"
        />
      </a>
      <div className="md:flex hidden flex-1 justify-end items-center gap-10">
        <ul className="flex justify-center items-center list-none">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className={`font-poppins font-normal text-[1rem] leading-normal text-[#282421] hover:text-[#EEB18E] transition-all cursor-pointer ${
                index !== navLinks.length - 1 ? "mr-10" : "mr-0"
              }`}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center">
          <Button label="Sign Up" styles="bg-[#EEB18E] text-white" />
        </div>
      </div>
      {/* responsive */}
      <div className="md:hidden flex flex-1 justify-end items-center">
        <div className="w-[32px] h-[32px] bg-[#EEB18E] rounded flex justify-center items-center">
          <img
            src={toggle ? Close : Menu}
            alt="Icon"
            className="w-[16px] h-[16px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />
        </div>
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } py-6 px-4 bg-black-gradient absolute top-20 right-[2%] mx-4 my-2 
          min-w-[140px] rounded-xl sidebar bg-black z-[10]`}
        >
          <div className="flex flex-col justify-end items-center gap-4">
            <ul className="flex flex-col justify-center items-center list-none">
              {navLinks.map((link, index) => (
                <li
                  key={link.title}
                  className={`font-poppins font-normal text-[1rem] leading-normal text-white hover:text-[#EEB18E] transition-all cursor-pointer 
                  ${index !== navLinks.length - 1 ? "mb-6" : "mb-0"}`}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
            <div className="flex items-center">
              <Button label="Sign Up" styles="bg-[#EEB18E] text-white" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

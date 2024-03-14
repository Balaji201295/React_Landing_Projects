import React, { useState } from "react";
import styles from "../style";
import { Logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const Footer = () => {
  const [openFooterLink, setOpenFooterLink] = useState(null);
  const toggleFooterLink = (index) =>
    setOpenFooterLink((prev) => (prev === index ? null : index));
  const isMobile = window.innerWidth <= 768;

  const renderSocialIcons = () => (
    <div className="flex justify-start items-center gap-4">
      {socialMedia.map((item) => (
        <div
          key={item.id}
          className="social-icon w-[50px] h-[50px] flex justify-center items-center rounded-full hover:bg-[#7E85F9] cursor-pointer"
        >
          <item.icon />
        </div>
      ))}
    </div>
  );

  const renderFooterLink = (footerLink, index) => (
    <div key={index} className={`flex flex-col ss:my-0 my-4 min-w-[160px]`}>
      <h3
        className={`flex items-center gap-1 text-[20px] leading-[32px] text-dark font-bold mb-2 cursor-pointer ${
          footerLink.links.length > 1 ? "mb-0" : ""
        }`}
        onClick={() => footerLink.links.length > 1 && toggleFooterLink(index)}
      >
        {footerLink.links.length > 1 && (
          <span className="ml-2 flex ss:hidden">
            {openFooterLink === index ? (
              <MdOutlineKeyboardArrowDown fontSize={24} />
            ) : (
              <MdOutlineKeyboardArrowRight fontSize={24} />
            )}
          </span>
        )}
        {footerLink.title}
      </h3>
      {openFooterLink === index && (
        <ul
          className={`list-none block ${isMobile ? "ss:hidden" : ""} mt-4 ml-4`}
        >
          {footerLink.links.map((link, linkIndex) => (
            <li
              key={link.name}
              className={`sm:text-[16px] text-[14px] leading-6 font-normal text-[#35353599] capitalize ${
                linkIndex !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
              }`}
            >
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>
      )}
      <ul className={`list-none ${isMobile ? "ss:block hidden" : ""} mt-4`}>
        {footerLink.links.map((link, index) => (
          <li
            key={link.name}
            className={`font-poppins font-normal text-[16px] leading-[24px] text-[#35353599] cursor-pointer hover:text-secondary ${
              index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
            }`}
          >
            {link.name}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className={`${styles.flexCenter} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col py-6 w-full`}>
        <div className={`flex-1 flex flex-col justify-start`}>
          <img
            src={Logo}
            alt="Logo"
            className="w-[215px] h-[54px] object-contain"
          />
          <p className={`${styles.paragraph} max-w-[320px] text-[14px] my-4`}>
            Open an account in minutes, get full financial control for much
            longer.
          </p>
          {renderSocialIcons()}
        </div>
        <div
          className={`flex-[1.5] w-full flex flex-col ss:flex-row justify-between flex-wrap md:mt-0 mt-10`}
        >
          {footerLinks.map((footerLink, index) =>
            renderFooterLink(footerLink, index)
          )}
        </div>
      </div>
      <div className="w-full flex justify-center items-center border-t-[1px] border-t-[#aaa] pt-6">
        <p className={`${styles.paragraph} text-[#35353599]`}>
          &copy; 2024 Copyright All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

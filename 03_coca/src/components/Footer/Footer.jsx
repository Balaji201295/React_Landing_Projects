import React from "react";
import { info } from "../../constants";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { footerLinks } from "../../constants";
import { IoIosArrowRoundForward } from "react-icons/io";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="app__footer section__padding" id="contact">
      <div className="app__footer_details">
        <div className="app__footer_info">
          <h1 className="headtext">
            Ready to get <br /> started ?
          </h1>
          <p className="p__inter">
            If there are questions you want to ask, we will answer all your
            question
          </p>
          <div className="app__footer_form">
            <input type="email" placeholder="Enter your email" />
            <button type="button" className="custom__button">
              join now
            </button>
          </div>
        </div>
        <div className="app__footer_assist">
          <h3>Maybe your question is have been answered, check this out.</h3>
          {info.map((item, index) => (
            <div className="app__footer_content" key={index}>
              <p className="p__inter">{item.question}</p>
              <IoIosArrowRoundForward color="#101010" fontSize={24} />
            </div>
          ))}
        </div>
      </div>
      <div className="footer__copyright">
        <div className="social_media">
          <FaFacebook />
          <FaInstagram />
          <FaLinkedin />
          <FaTwitter />
          <FaYoutube />
        </div>
        <div className="footer_links">
          {footerLinks.map((link, index) => (
            <a key={index} href={`#${link.id}`}>
              {link.title}
            </a>
          ))}
        </div>
        <p>&copy; Coca All Rights Reserved</p>
      </div>
    </footer>
  );
};
export default Footer;

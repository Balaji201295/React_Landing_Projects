import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="Logo" width={150} height={46} />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            your prefect size in store. Get Rewards.
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div
                key={icon.alt}
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((item) => (
                  <li
                    key={item.name}
                    className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray transition-all"
                  >
                    <a href={item.link}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* copyright */}
      <div className="flex justify-between items-center text-white-400 mt-20 max-sm:flex-col max-sm:gap-6">
        <p>&copy; Copyright. All rights reserved.</p>
        <p className="cursor-pointer font-montserrat">Terms & Conditions</p>
      </div>
    </footer>
  );
};
export default Footer;
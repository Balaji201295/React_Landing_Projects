import styles from "../style";
import { GoArrowRight } from "react-icons/go";

const FeatureCard = ({ icon, title, content }) => (
  <div className="flex flex-1 flex-col feature__card min-w-[280px] sm:p-6 p-4">
    <img
      src={icon}
      alt="Icon"
      className="sm:w-[70px] w-[50px] object-contain"
    />
    <h3 className="text-[20px] leading-normal font-semibold text-dark pt-6">
      {title}
    </h3>
    <p className={`${styles.paragraph} text-gray my-2`}>{content}</p>
    <a href="#" className="flex items-center gap-1 text-[#5E8ED4]">
      Learn More&nbsp;
      <GoArrowRight fontSize={16} />
    </a>
  </div>
);
export default FeatureCard;

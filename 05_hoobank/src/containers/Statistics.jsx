import styles from "../style";
import { stats } from "../constants";
const Statistics = () => (
  <section
    className={`${styles.flexCenter} flex-col sm:flex-row flex-wrap sm:mb-20 mb-6`}
  >
    {stats.map((item) => (
      <div
        key={item.id}
        className={`flex-1 flex justify-start items-center flex-row m-3`}
      >
        <h4 className="font-poppins font-semibold xs:text-[32px] text-[24px] xs:leading-[45px] leading-[36px] text-white">
          {item.value}
        </h4>
        <p className="font-poppins font-normal xs:text-[18px] text-[14px] xs:leading-[24px] leading-[20px] text-gradient uppercase ml-3">
          {item.title}
        </p>
      </div>
    ))}
  </section>
);
export default Statistics;

import { Apple, Iphone, PlayStore, Star_1 } from "../assets";
import styles from "../style";
const Application = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} sm:flex-row flex-col bg-[#7E85F9] rounded-[20px]`}
  >
    <div className={`flex-1 ${styles.flexStart} flex-col sm:p-12 p-4`}>
      <h2 className={`${styles.heading} text-white`}>
        Are you ready to use this Application?
      </h2>
      <p className={`${styles.paragraph} max-w-[468px] text-white my-4`}>
        Activate your free Bank rate account to unlock our most premium tools
        and content.
      </p>
      <div className="flex justify-center sm:justify-start items-center sm:gap-4 gap-2">
        <img
          src={Apple}
          alt="Apple_Store"
          className="sm:w-[100%] w-[40%] object-contain"
        />
        <img
          src={PlayStore}
          alt="Play_Store"
          className="sm:w-[100%] w-[40%] object-contain"
        />
      </div>
    </div>
    <div
      className={`${styles.flexStart} flex-1 sm:-mt-16 px-12 lg:p-0 relative`}
    >
      <img
        src={Iphone}
        alt="iPhone"
        className="w-[330px] object-contain z-[3]"
      />
      <div className="absolute top-32 sm:-left-12 right-0 z-[1]">
        <img
          src={Star_1}
          alt="Star"
          width={30}
          height={30}
          className="object-contain"
        />
      </div>
      <div className="absolute sm:top-48 bottom-24 sm:left-12 left-0 z-[0] ">
        <img
          src={Star_1}
          alt="Star"
          width={60}
          height={60}
          className="object-contain"
        />
      </div>
    </div>
  </section>
);
export default Application;

import styles from "../style";
import {
  Arrow,
  Card_1,
  Card_2,
  HeroImg,
  Play,
  Star_1,
  Star_2,
  Vector_1,
} from "../assets";
import { TiTick } from "react-icons/ti";
import { HeroInfo } from "../constants";
import { Button } from "../components";

const Hero = () => (
  <section
    id="home"
    className={`${styles.flexCenter} pt-12 md:flex-row flex-col`}
  >
    <div className={`${styles.flexStart} flex-1 flex-col relative`}>
      <div className="relative mb-8">
        <h1 className="font-bold sm:text-[60px] text-[36px] sm:leading-[80px] leading-[60px] text-dark relative">
          Make Your Online <br className="sm:block hidden" />
          Bank More <br className="sm:block hidden" />
          <span className="text-[#EEB18E] relative">
            Faster
            <div className="absolute inset-0">
              <img
                src={Vector_1}
                alt="Line"
                className="w-[100%] h-[100%] object-contain"
              />
            </div>
          </span>
          & Smooth
        </h1>
        <div className="absolute sm:top-[60%] -bottom-12 sm:bottom-0  sm:translate-y-[-50%] sm:right-[3rem] flex gap-[1rem]">
          <img
            src={Card_1}
            alt="Master Card"
            className="w-[60px] h-[60px] object-contain"
          />
          <img
            src={Card_2}
            alt="Master Card"
            className="w-[60px] h-[60px] object-contain"
          />
        </div>
      </div>
      <ul className="mt-12 xl:mt-0">
        {HeroInfo.map((item, index) => (
          <li
            key={index}
            className={`flex gap-3 font-normal text-[14px] leading-normal text-black ${
              index !== HeroInfo.length - 1 ? "mb-3" : "mb-0"
            }`}
          >
            <div>
              <TiTick fontSize={24} />
            </div>
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
      <div className="mt-10 flex ss:flex-row flex-col gap-4">
        <Button label="Get Started" />
        <Button
          label="Watch Demo"
          imgUrl={Play}
          styles="bg-transparent text-dark border border-[#353535]"
        />
      </div>
      <div className="absolute bottom-[2rem] translate-y-[-50%] sm:right-0 lg:block hidden">
        <img
          src={Arrow}
          alt="Arrow"
          className="sm:w-[100%] w-[50%] h-[100%] object-contain"
        />
      </div>
    </div>
    <div
      className={`${styles.flexCenter} relative z-[5] flex-1 flex md:mt-0 mt-10 md:ml-12 ml-0`}
    >
      <img
        src={HeroImg}
        alt="Hero"
        className="w-[100%] h-[100%] object-contain"
      />
      <div className="absolute top-20 right-0 z-[1] ss:block hidden">
        <img
          src={Star_1}
          alt="Star"
          width={60}
          height={60}
          className="object-contain"
        />
      </div>
      <div className="absolute top-0 left-[60%] z-[0] ss:block hidden">
        <img
          src={Star_2}
          alt="Star"
          width={36}
          height={36}
          className="object-contain"
        />
      </div>
    </div>
  </section>
);
export default Hero;

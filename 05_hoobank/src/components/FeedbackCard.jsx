import { quotes } from "../assets";
const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex justify-between flex-col sm:p-10 p-6 rounded-[20px] max-w-[350px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <img
      src={quotes}
      alt="Quotes"
      className="w-[42px] h-[27px] object-contain"
    />
    <p className="font-poppins font-normal sm:text-[18px] text-[16px] sm:leading-[32px] leading-[24px] text-white my-8">
      {content}
    </p>
    <div className="flex flex-row">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold sm:text-[20px] text-[18px] sm:leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal sm:text-[16px] text-[14px] leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </div>
);
export default FeedbackCard;

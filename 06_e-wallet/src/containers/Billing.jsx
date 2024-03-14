import styles, { layout } from "../style";
import { BillingImg } from "../assets";
import { billingInfo } from "../constants";
import { IoIosCheckmarkCircle } from "react-icons/io";

const Billing = () => (
  <section className={`${layout.section} sm:pt-0`}>
    <div className={`${layout.sectionInfo}`}>
      <h2 className={styles.heading}>
        Easily control your <br className="sm:block hidden" /> billing & invoice
      </h2>
      <p className={`${styles.paragraph} my-5 max-w-[430px]`}>
        Activate your free Bank rate account to unlock our most premium tools
        and content.
      </p>
      <div className="grid grid-cols-1 ss:grid-cols-2 gap-2">
        {billingInfo.map((item, index) => (
          <p
            key={index}
            className={`flex justify-start gap-2 items-center ${styles.paragraph}`}
          >
            <div>
              <IoIosCheckmarkCircle fontSize={16} />
            </div>
            {item.text}
          </p>
        ))}
      </div>
    </div>
    <div className={`${layout.sectionImg}`}>
      <img
        src={BillingImg}
        alt="Payment"
        className="w-[100%] h-[100%] object-contain"
      />
    </div>
  </section>
);
export default Billing;

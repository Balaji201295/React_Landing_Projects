import styles, { layout } from "../style";
import { PaymentImg } from "../assets";
import { Button } from "../components";
const Payment = () => (
  <section className={layout.sectionReverse}>
    <div className={`${layout.sectionImgReverse}`}>
      <img
        src={PaymentImg}
        alt="Payment"
        className="w-[100%] h-[100%] object-contain"
      />
    </div>
    <div className={`${layout.sectionInfo}`}>
      <h2 className={styles.heading}>
        Virtual payment & <br className="ss:block hidden" /> credit cards with
        <br className="ss:block hidden" /> built-in rules
      </h2>
      <p className={`${styles.paragraph} my-5 max-w-[430px]`}>
        Activate your free Bank rate account to unlock our most premium tools
        and content. Activate your free Bank rate
      </p>
      <Button label="get started" />
    </div>
  </section>
);
export default Payment;

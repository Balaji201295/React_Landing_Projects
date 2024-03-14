import styles, { layout } from "../style";
import { BankingImg } from "../assets";
import { Button } from "../components";
const Banking = () => (
  <section className={layout.sectionReverse}>
    <div className={`${layout.sectionImgReverse}`}>
      <img
        src={BankingImg}
        alt="Payment"
        className="w-[100%] h-[100%] object-contain"
      />
    </div>
    <div className={`${layout.sectionInfo}`}>
      <h2 className={styles.heading}>
        The most sophisticated <br className="sm:block hidden" /> banking ever
      </h2>
      <p className={`${styles.paragraph} my-5 max-w-[530px]`}>
        E-wallet makes it easy for you to make payments through your mobile
        phone easily without having to leave the house. We use the most advanced
        systems so security is guaranteed.
      </p>
      <Button label="get started" />
    </div>
  </section>
);
export default Banking;

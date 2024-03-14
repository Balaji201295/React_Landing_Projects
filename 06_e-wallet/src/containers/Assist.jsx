import styles from "../style";
import { Button } from "../components";

const Assist = () => (
  <section className={`${styles.flexCenter} flex-col text-center py-12`}>
    <h2 className={`${styles.heading}`}>We’ll Handle the Money</h2>
    <p className={`${styles.paragraph} max-w-[510px] my-4`}>
      Activate your free Bank rate account to unlock our most premium tools and
      content.
    </p>
    <Button label="get started" />
  </section>
);
export default Assist;

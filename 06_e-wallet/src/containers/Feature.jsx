import { FeatureCard } from "../components";
import { features } from "../constants";
import styles from "../style";
const Feature = () => {
  return (
    <section id="features" className={styles.paddingY}>
      <div>
        <h3 className={`${styles.heading} text-center`}>
          Some of our Premium Features
        </h3>
        <p
          className={`${styles.paragraph} text-center max-w-[566px] mx-auto mt-4`}
        >
          Activate your free Bank rate account to unlock our most premium tools
          and content.
        </p>
      </div>
      <div className={`${styles.flexCenter} flex-wrap mt-10 gap-6`}>
        {features.map((feature) => (
          <FeatureCard key={feature.id} {...feature} />
        ))}
      </div>
    </section>
  );
};
export default Feature;

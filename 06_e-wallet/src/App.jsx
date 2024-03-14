import React from "react";
import { Navbar } from "./components";
import {
  Application,
  Hero,
  Feature,
  Payment,
  Billing,
  Assist,
  Banking,
  Footer,
} from "./containers";
import styles from "./style";

function SectionWrapper({ children, isPrimaryBackground = false }) {
  const bgColor = isPrimaryBackground
    ? "bg-[#F9F9F9] cta__bg-primary"
    : "bg-[#F9F9F9]";
  return (
    <div
      className={`${styles.padding} ${styles.flexStart} ${styles.boxWidth} ${bgColor}`}
    >
      {children}
    </div>
  );
}

function App() {
  return (
    <div className="w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <Hero />
        </div>
      </div>

      <SectionWrapper>
        <Feature />
      </SectionWrapper>

      <div className={`${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Payment />
          <Billing />
        </div>
      </div>

      <SectionWrapper isPrimaryBackground>
        <Assist />
      </SectionWrapper>

      <div className={`${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Banking />
          <Application />
        </div>
      </div>

      <SectionWrapper>
        <Footer />
      </SectionWrapper>
    </div>
  );
}

export default App;

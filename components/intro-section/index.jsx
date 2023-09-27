import Graph from "@/public/illustration-intro.svg";
import Image from "next/image";
import styles from "./styles.module.css";

function Intro() {
  return (
    <section className="section" id="intro">
      <div className={styles.sectionWrapper}>
        <h1 className={styles.header}>
          Bring everyone together to build better products.
        </h1>
        <p className={styles.description}>
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <button className={styles.introBtn}>Get Started</button>
      </div>
      <Image src={Graph} alt="graph" width={580} height={525} />
    </section>
  );
}

export default Intro;

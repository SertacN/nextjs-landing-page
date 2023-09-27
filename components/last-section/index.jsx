import React from "react";
import styles from "./styles.module.css";

function LastSection() {
  return (
    <section className={`${styles.section}`}>
      <div
        style={{
          width: "40%",
        }}
      >
        <h4 className={styles.header}>Simplify how your team works today.</h4>
      </div>
      <div>
        <button className={styles.lastBtn}>Get Started</button>
      </div>
    </section>
  );
}

export default LastSection;

import React from "react";
import styles from "./styles.module.css";
import carouselDb from "@/mocks/carouseldb";
import Image from "next/image";
async function Api() {
  return new Promise((resolve, reject) => {
    const mockUserData = carouselDb;

    setTimeout(() => {
      resolve(mockUserData);
    }, 2000);
  });
}

async function Carousel() {
  const data = await Api();

  return (
    <div className={styles.carouselWrapper} id="community">
      <h4 className={styles.header}>What they&apos;ve said</h4>
      <div className={`${styles.slider}`}>
        <div className={styles.slides}>
          {data.map((item) => {
            return (
              <>
                <div id="slide">
                  <Image src={item.image} alt="user" width={72} height={72} />
                  <h5 className={styles.name}>{item.name}</h5>
                  <p className={styles.description}>{item.description}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <button className={styles.carouselBtn}>Get Started</button>
    </div>
  );
}

export default Carousel;

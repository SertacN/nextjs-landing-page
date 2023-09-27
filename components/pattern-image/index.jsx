import Image from "next/image";
import pattern from "@/public/bg-tablet-pattern.svg";
import styles from "./styles.module.css";

function Pattern() {
  return (
    <>
      <Image
        src={pattern}
        alt="pattern"
        width={814}
        height={814}
        className={styles.patternTopImg}
        priority={true}
      />
      <Image
        src={pattern}
        alt="pattern"
        width={814}
        height={814}
        className={styles.patternBottomImg}
        priority={true}
      />
    </>
  );
}

export default Pattern;

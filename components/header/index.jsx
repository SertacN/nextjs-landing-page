import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.svg";
import styles from "./styles.module.css";

function Header() {
  return (
    <header className="container fluid">
      <div className={styles.headerWrapper}>
        <Link href="/">
          <Image src={Logo} alt="logo" width={146} height={24} />
        </Link>
        <nav className={styles.navContainer}>
          <Link href="/pricing" className={styles.navLink}>
            Pricing
          </Link>
          <Link href="/product" className={styles.navLink}>
            Product
          </Link>
          <Link href="/aboutus" className={styles.navLink}>
            About Us
          </Link>
          <Link href="/careers" className={styles.navLink}>
            Careers
          </Link>
          <Link href="#community" className={styles.navLink}>
            Community
          </Link>
        </nav>
        <button className={styles.navButton}>Get Started</button>
      </div>
    </header>
  );
}

export default Header;

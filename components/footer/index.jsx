import Logo from "@/public/logo-white.svg";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookSquare,
  FaYoutube,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import MailInput from "../mail-input/index";

function Footer() {
  return (
    <footer className={`${styles.footer} container  fluid`}>
      <div className={styles.footerWrapper}>
        <div className={styles.iconWrapper}>
          <Link href="/">
            <Image src={Logo} alt="logo" width={146} height={24} />
          </Link>
          <div className={styles.icons}>
            <FaFacebookSquare />
            <FaYoutube />
            <FaTwitter />
            <FaPinterest />
            <FaInstagram />
          </div>
        </div>
        <div className={styles.linkWrapper}>
          <Link href="/">Home</Link>
          <Link href="/">Pricing</Link>
          <Link href="/">Products</Link>
          <Link href="/">About Us</Link>
        </div>
        <div className={styles.linkWrapper}>
          <Link href="/">Careers</Link>
          <Link href="/">Community</Link>
          <Link href="/">Privacy Policy</Link>
        </div>
        <MailInput />
      </div>
    </footer>
  );
}

export default Footer;

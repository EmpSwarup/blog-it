import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <a href="https://github.com/EmpSwarup/blogify" target="_blank">
          <Image src="/github.png" alt="github" width={24} height={24} />
        </a>
        <a href="https://www.linkedin.com/in/swarupsapkota/" target="_blank">
          <Image src="/linkedin.png" alt="linkedin" width={24} height={24} />
        </a>
      </div>
      <div className={styles.logo}>blogify</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          Homepage
        </Link>
        <Link href="/about" className={styles.link}>
          About
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="blogify" width={50} height={50} />
          <h1 className={styles.logoText}>blogify</h1>
        </div>
        <p className={styles.desc}>
          Blogify is a platform for people to share their stories and creative
          ideas. Connect with thousands of other users and share your stories
          with them. Create an account today and share your posts.
        </p>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/about">About</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/blog?cat=style">Style</Link>
          <Link href="/blog?cat=culture">Culture</Link>
          <Link href="/blog?cat=fashion">Fashion</Link>
          <Link href="/blog?cat=coding">Coding</Link>
          <Link href="/blog?cat=travel">Travel</Link>
          <Link href="/blog?cat=coding">Coding</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="https://github.com/EmpSwarup/blogify" target="_blank">
            Github
          </Link>
          <Link
            href="https://www.linkedin.com/in/swarupsapkota/"
            target="_blank"
          >
            Linkedin
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

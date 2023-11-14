import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import Link from "next/link";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey!</b> Welcome to blogify!
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/title.jpg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Discover people's stories and creative ideas.
          </h1>
          <p className={styles.postDesc}>
            Blogify is a platform for people to share their stories and creative
            ideas. Connect with thousands of other users and share your stories
            with them. Create an account today and share your posts.
          </p>
          <Link href="/about">
            <button className={styles.button}>Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;

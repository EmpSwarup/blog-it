import Image from "next/image";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>About Blogify</h1>
        <div className={styles.imgContainer}>
          <Image src="/about.jpg" alt="" fill className={styles.image} />
        </div>
        <p className={styles.description}>
          Blogify is a platform for people to share their stories and creative
          ideas. Connect with thousands of other users and share your stories
          with them. Create an account today and share your posts.
        </p>

        <p className={styles.technologies}>
          Application developed using:
          <br />
          NextJS | MongoDB | Prisma | Firebase
        </p>

        <a
          href="https://github.com/EmpSwarup/blogify"
          target="_blank"
          className={styles.githubLink}
        >
          Visit GitHub
        </a>
      </div>
    </div>
  );
};

export default About;

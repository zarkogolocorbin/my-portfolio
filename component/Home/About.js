import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/about.module.css";
export default function AboutComponent() {
  return (
    <section id="about" className={styles.about}>
      <h2 className={styles["about-subtitle"]}>About Me</h2>
      <div className={styles["about-content"]}>
        <div className={styles.image}>
          <Image
            src="/assets/72650427.jpg"
            width={350}
            height={350}
            alt="image"
          />
        </div>
        <div className={styles.content}>
          <h3>Žarko Goločorbin</h3>
          <p className={styles.position}>Junior Frontend Developer</p>
          <p className={styles.text}>
            I’m a junior frontend developer looking for a new role in an
            exciting company. I focus on writing accessible HTML, using modern
            CSS practices and writing clean JavaScript. When writing JavaScript
            code, I use React and Next js. I am based in Novi Sad, Serbia, but I
            am happy to work remotely as well. You can check out my portfolio
            also, where you can see what I am capable of in greater detail.
          </p>
          <Link href={"/project"} passHref>
            <p className="button">Go to portfolio</p>
          </Link>
        </div>
      </div>
    </section>
  );
}

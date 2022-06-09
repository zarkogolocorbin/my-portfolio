import styles from "../../styles/hero.module.css";
import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>
          Hey, I&#39;m Zarko Golocorbin and I love bulding interesting and
          beautiful website
        </h1>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="white-button"
        >
          About Me
        </Link>
      </div>
    </section>
  );
}

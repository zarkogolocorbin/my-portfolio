import styles from "../../styles/myInfo.module.css";
import IconsComponent from "../Shared/Icons";
export default function MyInfoComponent() {
  return (
    <section className={styles.info}>
      <h2 className={styles["sub-title"]}>My Info</h2>
      <div className={styles["contact-info"]}>
        <p className={styles.name}>Žarko Goločorbin</p>
        <p className={styles.position}>Junio Front-end Developer</p>
        <p className={styles.email}>zarkogolocorbin@gmial.com</p>
        <p className={styles.number}>+381 60 509 46 69</p>
        <IconsComponent component={"info"} />
      </div>
    </section>
  );
}

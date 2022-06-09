import Link from "next/link";
import styles from "../../styles/contact.module.css";
export default function ContactComponent() {
  return (
    <section className={styles.contact}>
      <h2>Interested in doing a project together?</h2>
      <Link href="/contact">
        <a className="button">contact me</a>
      </Link>
    </section>
  );
}

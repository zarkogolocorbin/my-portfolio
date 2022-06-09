import Image from "next/image";

import styles from "../../styles/footer.module.css";
import IconsComponent from "./Icons";
import LinksComponents from "./Links";

export default function FooterComponent() {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-center"]}>
        <Image
          src={"/assets/logo-light.svg"}
          width={60}
          height={30}
          alt="logo image"
        />
        <LinksComponents component={"footer"} />
        <IconsComponent component={"footer"} />
      </div>
    </footer>
  );
}

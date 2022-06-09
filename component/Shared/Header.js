import Image from "next/image";

import { useState } from "react";

import styles from "../../styles/header.module.css";
import LinksComponents from "./Links";

export default function Header() {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleLinks = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <nav className={styles.navbar}>
      <div>
        <Image
          src={"/assets/new-logo.svg"}
          width={60}
          height={32}
          alt="logo image"
        />
      </div>
      <LinksComponents component={"header"} />
      <button
        className={styles[`${showNavbar ? "active-menu" : "hamburger-menu"}`]}
        onClick={() => toggleLinks()}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}

import Link from "next/link";
// import styles from "../../styles/header.module.css";
export default function LinksComponents({ component }) {
  return (
    <ul className={`links ${component}-links`}>
      <li>
        <Link href={"/"}>
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href={"/project"}>
          <a>Portfolio</a>
        </Link>
      </li>
      <li>
        <Link href={"/contact"}>
          <a>Contact Me</a>
        </Link>
      </li>
    </ul>
  );
}

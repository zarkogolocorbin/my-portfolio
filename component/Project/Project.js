import Link from "next/link";
import Image from "next/image";

import styles from "../../styles/project.module.css";

export default function ProjectComponent({ project }) {
  return (
    <article className={styles.project}>
      <div className={styles["project-image"]}>
        <Image
          src={project.imageUrl}
          width={540}
          height={500}
          alt={project.name}
        />
      </div>
      <div className={styles["project-content"]}>
        <h2>{project.name}</h2>
        <p>{project.text}</p>
        <Link href={`project/${project.slug}`} passHref>
          <p className="button">view project</p>
        </Link>
      </div>
    </article>
  );
}

import Link from "next/link";
import Image from "next/image";

import styles from "../../styles/projectDetails.module.css";

export default function ProjectDetailsComponent({ project }) {
  console.log(project);
  return (
    <section className={styles.project}>
      <Image
        src={project.heroImgUrl}
        width={1110}
        height={500}
        alt={project.slug}
      />
      <div className={styles["project-center"]}>
        <div className={styles["project-content"]}>
          <h2>{project.title}</h2>
          <p>{project.text}</p>
          <p>
            This project was a front-end challenge from Frontend Mentor. Each
            challenge includes mobile and desktop designs to show how the
            website should look at different screen sizes. Creating these
            projects has helped me refine my workflow and solve real-world
            coding problems. I’ve learned something new with each project,
            helping me to improve and adapt my style.
          </p>
          <Link href={project.urlLocation}>
            <a target="_blank" className="button">
              visit website
            </a>
          </Link>
        </div>
        <div className={styles["project-image"]}>
          <Image
            src={project.mainImgUrl}
            width={540}
            height={450}
            alt={project.name}
          />
          <Image
            src={project.mobileImgUrl}
            width={540}
            height={400}
            alt={project.name}
          />
        </div>
      </div>
    </section>
  );
}

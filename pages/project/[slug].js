import Layout from "../../component/Shared/Layout";
import { PrismaClient } from "@prisma/client";

import ProjectDetailsComponent from "../../component/Project/ProjectDetails";

const prisma = new PrismaClient();

export default function DetailsPage({ project }) {
  const currentProject = JSON.parse(project);
  console.log(currentProject);
  return (
    <Layout title={`Portfolio | ${currentProject.name}`}>
      <ProjectDetailsComponent project={currentProject} />
    </Layout>
  );
}

// export async function getStaticPaths() {
//   const projects = await prisma.project.findMany();

//   const paths = projects.map((project) => ({
//     params: { slug: project.slug },
//   }));

//   return {
//     paths,
//     fallback: true,
//   };
// }

// export async function getStaticProps({ params: { slug } }) {
//   console.log(slug);
//   const currentProject = await prisma.project.findFirst({
//     where: {
//       slug: slug,
//     },
//   });

//   return {
//     props: {
//       project: currentProject,
//     },
//     revalidate: 1,
//   };
// }

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const category = await prisma.project.findFirst({
    where: {
      slug: slug,
    },
  });

  const currentCategory = JSON.stringify(category);
  return {
    props: {
      project: currentCategory,
    },
  };
}

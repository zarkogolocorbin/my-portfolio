import Layout from "../../component/Shared/Layout";
import ProjectComponent from "../../component/Project/Project";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default function ProjectPage({ data }) {
  return (
    <Layout title={"Portfolio | Projects"}>
      {data.map((project, index) => {
        return <ProjectComponent project={project} key={index} />;
      })}
    </Layout>
  );
}

export async function getServerSideProps() {
  const projects = await prisma.project.findMany();
  return {
    props: {
      data: projects,
    },
  };
}

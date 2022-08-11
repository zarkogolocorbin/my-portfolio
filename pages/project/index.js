import Layout from "../../component/Shared/Layout";
import ProjectComponent from "../../component/Project/Project";
//import data.json
import data from "../../data.json";

export default function ProjectPage({ projects }) {
  console.log(projects);
  return (
    <Layout title={"Portfolio | Projects"}>
      {projects.map((project, index) => {
        return <ProjectComponent project={project} key={index} />;
      })}
    </Layout>
  );
}

export async function getServerSideProps() {
  const projects = data;
  return {
    props: {
      projects,
    },
  };
}

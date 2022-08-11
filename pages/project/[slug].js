import Layout from "../../component/Shared/Layout";
import ProjectDetailsComponent from "../../component/Project/ProjectDetails";
// import data
import data from "../../data.json";

export default function DetailsPage({ project }) {
  console.log(project);
  return (
    <Layout title={`Portfolio | ${project.title}`}>
      <ProjectDetailsComponent project={project} />
    </Layout>
  );
}

export function getServerSideProps({ query, req }) {
  const project = data.find((project) => project.slug === query.slug);
  return {
    props: {
      project,
    },
  };
}

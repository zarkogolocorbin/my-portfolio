import Layout from "../component/Shared/Layout";
import HeroSection from "../component/Home/Hero";
import AboutComponent from "../component/Home/About";

export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <AboutComponent />
    </Layout>
  );
}

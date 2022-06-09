import Layout from "../../component/Shared/Layout";
import MyInfoComponent from "../../component/Contact/MyInfo";
import ContactMeComponent from "../../component/Contact/ContactMe";

export default function ContactPage() {
  return (
    <Layout title={"Portfolio | Contact"}>
      <MyInfoComponent />
      <ContactMeComponent />
    </Layout>
  );
}

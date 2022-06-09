import Head from "next/head";
import Header from "./Header";
import FooterComponent from "./Footer";
import ContactComponent from "./Contact";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 0, y: -20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 },
};

export default function Layout({ title, children, description, keywords }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="shortcut icon" href="/assets/new-logo.svg" />
      </Head>
      <Header />
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: "linear", duration: "0.9" }}
      >
        {children}
        {router.route !== "/contact" && <ContactComponent />}
      </motion.main>
      <FooterComponent />
    </div>
  );
}

Layout.defaultProps = {
  title: " Portfolio | Home Page",
  description: "Frontend developer make responsive website",
  keywords: "development, front-end, design",
};

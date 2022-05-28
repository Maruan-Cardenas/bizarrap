// styles
import styles from "./styles.module.scss";

// NextJS Component
import Head from "next/head";
import Footer from "../Footer";
import Header from "../Header";

const Layout = ({ title, description, tags, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={tags} />
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

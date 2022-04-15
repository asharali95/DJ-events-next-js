import Head from "next/head";
import styles from "../../styles/Layout.module.css";
import { useRouter } from "next/router";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Showcase from "../Showcase/Showcase";
export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      {router.pathname === "/" && <Showcase />}
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "DJ Events - find the coolest parties",
  description: "Find latest and amazing dj events here",
  keywords: "music, dj, events, parties",
};

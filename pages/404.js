import { FaExclamationTriangle } from "react-icons/fa";
import Layout from "../Components/Layout/Layout";
import styles from "../styles/404.module.css";
import Link from "next/link";
export default function NotFoundPage() {
  return (
    <Layout title="Not found">
      <div className={styles.error}>
        <h1>{<FaExclamationTriangle />}</h1>
        <h1>Error 404</h1>
        <h4>Sorry, the link you have requested does not exist.</h4>
        Go back to{" "}
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
    </Layout>
  );
}

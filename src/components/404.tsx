import { Link } from "react-router";
import styles from "./404.module.css";

export default function FourZeroFourComponent() {
  return (
    <section className={styles.container404}>
      <h1>404</h1>
      <p>Oops... page not found.</p>
      <Link to=".">Go Back Home</Link>
    </section>
  );
}

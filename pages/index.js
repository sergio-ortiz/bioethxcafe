import Layout from "/components/layout";
import styles from "/styles/registration.module.css";

const HomePage = () => (
  <Layout>
    <form className={styles.form} action="/api/register" method="post">
      <label>
        First Name:{" "}
        <input className={styles.input} type="text" name="firstName" required />
      </label>
      <label>
        Last Name:{" "}
        <input className={styles.input} type="text" name="lastName" required />
      </label>
      <input className={styles.submit} type="submit" value="submit" />
    </form>
  </Layout>
);

export default HomePage;

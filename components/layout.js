import Link from "next/link";
import styles from "/styles/layout.module.css";

const Layout = ({ children }) => (
  <>
    <h1>
      <Link className={styles.heading} href="/">
        BioEthx Cafe
      </Link>
    </h1>
    <ul className={styles.links}>
      <li>
        <Link href="/">home</Link>
      </li>
      <li>
        <Link href="/registration">register</Link>
      </li>
      <li>
        <Link href="/members">members</Link>
      </li>
    </ul>
    {children}
  </>
);

export default Layout;

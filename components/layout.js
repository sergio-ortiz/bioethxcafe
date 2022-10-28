import Link from "next/link";

const Layout = ({ children }) => (
  <>
    <h1>bioethxcafe</h1>
    <ul>
      <li>
        <Link href="/">home</Link>
      </li>
      <li>
        <Link href="/members">members</Link>
      </li>
    </ul>
    {children}
  </>
);

export default Layout;

import Link from "next/link";
import styles from "./Navbar.module.css";
export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <>
        <img
          src="/favicon.png"
          alt="LOGO"
          width="48px"
          height="48px"
          onClick={() => {
            window.location.pathname = "/";
          }}
        />
        <span
          className={styles.logo}
          onClick={() => {
            window.location.pathname = "/";
          }}
        >
          ALICORN LAUNCHER
        </span>
      </>

      <Link href="/get">
        <a className={styles.navfixed}>下载 Alicorn</a>
      </Link>
      <Link href="/explore">
        <a>为什么选择 Alicorn？</a>
      </Link>
    </nav>
  );
}

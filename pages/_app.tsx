import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import Script from "next/script";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import styles from "../styles/Home.module.css";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Script src="//cdn.jsdelivr.net/npm/balance-text@3.3.0/balancetext.min.js"></Script>
      <Component {...pageProps} />
      <footer className={styles.footer}>
        &#169; 2021 Alicorn Union MC
        <br />
        This page is licensed under the{" "}
        <a href={"https://www.gnu.org/licenses/agpl-3.0.html"}>
          GNU Affero General Public License, Version 3
        </a>
        .
        <br />
        Alicorn Launcher is licensed under the{" "}
        <a href={"https://www.gnu.org/licenses/gpl-3.0.html"}>
          GNU General Public License, Version 3 or later
        </a>
        .
        <br />
        能用 JS 改写的，终将用 JS 改写。
        <br />
        <br />
        不是 Mojang 官方产品，与 Mojang 或 Microsoft 没有关联。“Minecraft” 以及
        “我的世界” 是 Mojang AB 的商标。
        <br />与 Hasbro 没有关联。“My Little Pony” 以及 “Friendship Is Magic” 是
        Hasbro 的商标。
      </footer>
    </>
  );
}

export default dynamic(() => Promise.resolve(MyApp), { ssr: false });
